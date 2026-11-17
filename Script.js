const body = document.body;
const themeButton = document.getElementById("themeButton");
const menuButton = document.getElementById("menuButton");
const sidebar = document.getElementById("sidebar");
const toast = document.getElementById("toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => toast.classList.remove("show"), 2600);
}

themeButton.addEventListener("click", () => {
  const isDark = body.dataset.theme !== "dark";
  body.dataset.theme = isDark ? "dark" : "light";
  themeButton.textContent = isDark ? "☀" : "☾";
  themeButton.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
});

menuButton.addEventListener("click", () => {
  const isOpen = sidebar.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".nav-link").forEach(item => item.classList.remove("active"));
    link.classList.add("active");
    sidebar.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("reportButton").addEventListener("click", () => {
  showToast("Your new report workspace is ready to set up.");
});

document.querySelector(".text-button").addEventListener("click", () => {
  showToast("You’re viewing the latest activity.");
});
