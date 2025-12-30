const HASHNODE_HOST = "n8n-msazrure-hosting.hashnode.dev"; // Extracted from user's URL

async function fetchHashnodePosts() {
  const query = `
    query Publication {
        publication(host: "${HASHNODE_HOST}") {
            isTeam
            title
            posts(first: 10) {
                edges {
                    node {
                        title
                        brief
                        slug
                        coverImage {
                            url
                        }
                        publishedAt
                        url
                    }
                }
            }
        }
    }`;

  try {
    const response = await fetch("https://gql.hashnode.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    const result = await response.json();

    if (
      result.data &&
      result.data.publication &&
      result.data.publication.posts
    ) {
      renderBlogPosts(result.data.publication.posts.edges);
    } else {
      console.error("No posts found or error in response:", result);
      document.getElementById("blog-posts-container").innerHTML =
        "<p>No posts found.</p>";
    }
  } catch (error) {
    console.error("Error fetching Hashnode posts:", error);
    document.getElementById("blog-posts-container").innerHTML =
      "<p>Failed to load blog posts.</p>";
  }
}

function renderBlogPosts(posts) {
  const container = document.getElementById("blog-posts-container");
  container.innerHTML = ""; // Clear loading text

  posts.forEach((edge) => {
    const post = edge.node;
    const date = new Date(post.publishedAt).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const postElement = document.createElement("li");
    postElement.classList.add("blog-post-item");

    // Use a default image if coverImage is missing
    const imageUrl = post.coverImage
      ? post.coverImage.url
      : "images/blog-placeholder.jpg";

    postElement.innerHTML = `
            <a href="${post.url}" target="_blank" class="blog-post-link">
                <figure class="blog-banner-box">
                    <img src="${imageUrl}" alt="${post.title}" loading="lazy">
                </figure>
                <div class="blog-content">
                    <div class="blog-meta">
                        <p class="blog-category">Hashnode</p>
                        <span class="dot"></span>
                        <time datetime="${post.publishedAt}">${date}</time>
                    </div>
                    <h3 class="h3 blog-item-title">${post.title}</h3>
                    <p class="blog-text">${post.brief}</p>
                </div>
            </a>
        `;

    container.appendChild(postElement);
  });
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  fetchHashnodePosts();
});
