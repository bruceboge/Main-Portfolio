const username = "bruceboge";
const container = document.getElementById("vg-projects");
const modal = document.getElementById("vg-readme-modal");
const modalContent = document.getElementById("vg-readme-body");
const closeModalBtn = document.getElementById("vg-close-modal");

// Check if container exists to avoid errors on other pages (though in single page app it might be always there but hidden)
if (container) {
  fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
    .then(res => res.json())
    .then(repos => {
      // Clear loading state if any
      container.innerHTML = '';
      
      repos.forEach(repo => {
        const card = document.createElement("div");
        card.className = "vg-card";

        const language = repo.language || "Mixed";
        const description = repo.description || "No description provided.";
        const date = new Date(repo.updated_at).toLocaleDateString();

        card.innerHTML = `
          <div class="vg-card-header">
            <h3>${repo.name}</h3>
            <span class="vg-lang">${language}</span>
          </div>

          <p class="vg-desc">
            ${description}
          </p>

          <div class="vg-stats">
            <span>⭐ ${repo.stargazers_count}</span>
            <span>🕒 ${date}</span>
          </div>

          <div class="vg-actions">
            <a href="${repo.html_url}" target="_blank">View Repo</a>
            <button class="vg-readme-btn" data-repo="${repo.name}">README</button>
            <a href="https://github.com/${username}/${repo.name}/archive/refs/heads/${repo.default_branch}.zip">
              Download
            </a>
          </div>
        `;

        container.appendChild(card);
      });
    })
    .catch(err => {
      console.error(err);
      container.innerHTML = '<p class="error-msg">Failed to load repositories.</p>';
    });

  /* ===== README MODAL LOGIC ===== */
  container.addEventListener("click", async (e) => {
    if (!e.target.classList.contains("vg-readme-btn")) return;

    e.preventDefault();
    const repoName = e.target.dataset.repo;

    if (modal) {
        modal.classList.remove("hidden");
        modalContent.innerHTML = "<p>Loading README...</p>";

        try {
            const res = await fetch(
            `https://api.github.com/repos/${username}/${repoName}/readme`,
            { headers: { Accept: "application/vnd.github.v3.raw" } }
            );

            if (!res.ok) throw new Error("No README");

            const markdown = await res.text();
            modalContent.innerHTML = markdownToHTML(markdown);
        } catch {
            modalContent.innerHTML = "<p>No README found.</p>";
        }
    }
  });
}

if (closeModalBtn && modal) {
    closeModalBtn.onclick = () => modal.classList.add("hidden");
    
    // Close on outside click
    modal.onclick = (e) => {
        if (e.target === modal) modal.classList.add("hidden");
    };
}


/* ===== SIMPLE MARKDOWN PARSER ===== */
function markdownToHTML(md) {
  return md
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^# (.*$)/gim, "<h1>$1</h1>")
    .replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/gim, "<em>$1</em>")
    .replace(/```([\s\S]*?)```/gim, "<pre><code>$1</code></pre>")
    .replace(/\n/g, "<br>");
}
