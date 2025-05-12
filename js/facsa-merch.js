function scrollTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Select elements
const select = document.querySelector(".select");
const caret = document.querySelector(".caret");
const menu = document.querySelector(".size");
const options = document.querySelectorAll(".size li");
const selected = document.querySelector(".selected");

// Toggle dropdown
select.addEventListener("click", () => {
    select.classList.toggle("open");
    menu.classList.toggle("show");
    caret.classList.toggle("open");
});

// Handle option selection
options.forEach(option => {
    option.addEventListener("click", () => {
        selected.innerText = option.innerText;
        select.classList.remove("open");
        menu.classList.remove("show");
        caret.classList.remove("open");

        // Remove 'active' class from previously selected option
        options.forEach(opt => opt.classList.remove("active"));
        option.classList.add("active");
    });
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
    if (!select.contains(e.target)) {
        select.classList.remove("open");
        menu.classList.remove("show");
        caret.classList.remove("open");
    }
});
