const isGitHub = window.location.hostname.includes("github.io");

const basePath = isGitHub
  ? "/bcbd-aspirantes/"
  : "/";

fetch(basePath + "partials/header.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("header").innerHTML = html;

    // Ajustar enlaces correctamente
    const links = document.querySelectorAll("#header a");

    links.forEach(link => {
      const originalHref = link.getAttribute("href");

      // Evitar modificar links externos
      if (!originalHref.startsWith("http")) {
        link.setAttribute("href", basePath + originalHref);
      }
    });
  })
  .catch(err => console.error("Error cargando header:", err));
