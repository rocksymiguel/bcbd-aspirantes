const basePath = window.location.hostname.includes("github.io")
  ? "/bcbd-aspirantes/"
  : "/";

fetch(basePath + "partials/header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;
  })
  .catch(error => {
    console.error("Error cargando header:", error);
  });
