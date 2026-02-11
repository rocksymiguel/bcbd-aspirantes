const basePath = window.location.hostname.includes("github.io")
  ? "/bcbd-aspirantes/"
  : "/";

fetch(basePath + "partials/header.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("header").innerHTML = html;
  })
  .catch(err => console.error("Error cargando header:", err));

