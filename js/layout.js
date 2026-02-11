const isGitHub = window.location.hostname.includes("github.io");

const basePath = isGitHub
  ? "/bcbd-aspirantes/"
  : "/";

fetch(basePath + "partials/header.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("header").innerHTML = html;

    // Ajustar enlaces automáticamente
    const links = document.querySelectorAll("#header a");
    links.forEach(link => {
      link.href = basePath + link.getAttribute("href");
    });
  })
  .catch(err => console.error("Error cargando header:", err));
