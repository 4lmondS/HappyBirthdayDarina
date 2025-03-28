// Dark Mode
(function () {
  window.addEventListener(
  "click",
  () => document.documentElement.classList.toggle("dark"),
  false);


  const prefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;
  const setting = localStorage.getItem("color-schema") || "auto";
  if (setting === "dark" || prefersDark && setting !== "light")
  document.documentElement.classList.toggle("dark", true);
})();