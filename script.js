// ===== SIDEBAR TOGGLE (Mobile) =====
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebarBtn) {
    sidebarBtn.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    });
}

// ===== NAVIGATION =====
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach((link) => {
    link.addEventListener("click", function () {
        const targetPage = this.getAttribute("data-target");
        
        // Remove active class from all nav links
        navigationLinks.forEach((navLink) => {
            navLink.classList.remove("active");
        });
        
        // Add active class to clicked nav link
        this.classList.add("active");
        
        // Hide all pages
        pages.forEach((page) => {
            page.classList.remove("active");
        });
        
        // Show target page
        const targetElement = document.querySelector(`[data-page="${targetPage}"]`);
        if (targetElement) {
            targetElement.classList.add("active");
            window.scrollTo(0, 0);
        }
    });
});

// ===== PORTFOLIO FILTER =====
const filterBtns = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
        const selectedCategory = this.getAttribute("data-category");
        
        // Remove active class from all filter buttons
        filterBtns.forEach((filterBtn) => {
            filterBtn.classList.remove("active");
        });
        
        // Add active class to clicked button
        this.classList.add("active");
        
        // Filter items
        filterItems.forEach((item) => {
            const itemCategory = item.getAttribute("data-category");
            
            if (selectedCategory === "all" || selectedCategory === itemCategory) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });
    });
});

// ===== MOBILE FILTER SELECT =====
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const selectList = document.querySelector(".select-list");

if (select) {
    select.addEventListener("click", function () {
        if (selectList) {
            selectList.classList.toggle("active");
        }
    });
}

selectItems.forEach((item) => {
    item.addEventListener("click", function () {
        const selectedValue = this.innerText.toLowerCase();
        const selectedCategory = this.getAttribute("data-category");
        
        if (selectValue) {
            selectValue.innerText = this.innerText;
        }
        
        if (selectList) {
            selectList.classList.remove("active");
        }
        
        // Filter items
        filterItems.forEach((filterItem) => {
            const itemCategory = filterItem.getAttribute("data-category");
            
            if (selectedCategory === "all" || selectedCategory === itemCategory) {
                filterItem.classList.add("active");
            } else {
                filterItem.classList.remove("active");
            }
        });
    });
});

// ===== FORM VALIDATION =====
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector(".form-btn");

if (form) {
    // Add input event listeners for validation
    formInputs.forEach((input) => {
        input.addEventListener("input", function () {
            if (form.checkValidity()) {
                formBtn.removeAttribute("disabled");
            } else {
                formBtn.setAttribute("disabled", "");
            }
        });
    });
    
    // Handle form submission
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        console.log("Form submitted with data:", data);
        
        // Show success message (you can customize this)
        alert("Thank you for your message! I'll get back to you soon.");
        
        // Reset form
        form.reset();
        formBtn.setAttribute("disabled", "");
    });
}

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===== ANIMATE SKILL BARS ON SCROLL =====
const skillBars = document.querySelectorAll('.skill-progress-fill');

const animateSkillBars = () => {
    skillBars.forEach(bar => {
        const barPosition = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        
        if (barPosition < screenPosition) {
            const width = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        }
    });
};

// Check if resume page is active and animate
const resumePage = document.querySelector('[data-page="resume"]');
if (resumePage && resumePage.classList.contains('active')) {
    animateSkillBars();
}

// Animate when navigating to resume
navigationLinks.forEach(link => {
    link.addEventListener('click', function() {
        if (this.getAttribute('data-target') === 'resume') {
            setTimeout(animateSkillBars, 300);
        }
    });
});

// ===== CLOSE MOBILE SELECT ON OUTSIDE CLICK =====
document.addEventListener('click', function(e) {
    if (select && selectList && !select.contains(e.target)) {
        selectList.classList.remove('active');
    }
});

// ===== INITIALIZE FILTERS FOR STATIC CONTENT =====
document.addEventListener('DOMContentLoaded', () => {
    initializeFilters();
});

function initializeFilters() {
    const filterBtns = document.querySelectorAll("[data-filter-btn]");
    const filterItems = document.querySelectorAll("[data-filter-item]");
    const selectItems = document.querySelectorAll("[data-select-item]"); // For mobile

    const filterFunc = function (selectedValue) {
        filterItems.forEach((item) => {
            if (selectedValue === "all" || selectedValue === item.getAttribute("data-category")) {
                item.classList.add("active");
                item.classList.add("scaleUp");
            } else {
                item.classList.remove("active");
            }
        });
    }

    // Desktop Filter
    filterBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            const selectedValue = this.getAttribute("data-category");
            
            filterBtns.forEach(item => item.classList.remove("active"));
            this.classList.add("active");
            filterFunc(selectedValue);
        });
    });

    // Mobile Filter
    selectItems.forEach((item) => {
        item.addEventListener("click", function () {
            const selectedValue = this.getAttribute("data-category");
            const selectValue = document.querySelector("[data-select-value]");
            const selectList = document.querySelector(".select-list");
            
            selectValue.innerText = this.innerText;
            selectList.classList.remove("active");
            filterFunc(selectedValue);
        });
    });
}