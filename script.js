const body = document.body;
const themeToggle = document.getElementById("themeToggle");
const aboutText = document.getElementById("aboutText");
const editBtn = document.getElementById("editBtn");

const savedTheme = localStorage.getItem("theme");
if (savedTheme) body.className = savedTheme;

const savedAbout = localStorage.getItem("aboutText");
if (savedAbout) aboutText.textContent = savedAbout;

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    body.classList.toggle("light");

    localStorage.setItem("theme", body.className);
    themeToggle.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
});

editBtn.addEventListener("click", () => {
    if (aboutText.isContentEditable) {
        aboutText.contentEditable = "false";
        editBtn.textContent = "Edit";
        localStorage.setItem("aboutText", aboutText.textContent);
    } else {
        aboutText.contentEditable = "true";
        aboutText.focus();
        editBtn.textContent = "Save";
    }
});
