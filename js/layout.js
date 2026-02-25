const isGitHub = window.location.hostname.includes("github.io");

const basePath = isGitHub
  ? "/bcbd-aspirantes/"
  : "/";

function safePrefixHref(href) {
  if (!href) return href;

  // Do not modify absolute URLs, anchors, or protocol links
  if (href.startsWith("http") || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return href;
  }

  // If href already starts with a slash, treat as absolute path on current host
  if (href.startsWith("/")) return href;

  // Build an absolute URL using basePath so relative links become absolute paths
  try {
    const base = window.location.origin + basePath;
    const resolved = new URL(href, base);
    return resolved.pathname + resolved.search + resolved.hash;
  } catch (e) {
    // Fallback to previous behavior
    if (basePath === "/") return "" + href;
    if (href.startsWith(basePath)) return href;
    return basePath + href;
  }
}

// Load header partial
fetch(basePath + "partials/header.html")
  .then(res => res.text())
  .then(html => {
    const headerEl = document.getElementById("header");
    if (headerEl) headerEl.innerHTML = html;

    // Ajustar enlaces dentro del header
    const links = document.querySelectorAll("#header a");
    links.forEach(link => {
      const originalHref = link.getAttribute("href");
      const newHref = safePrefixHref(originalHref);
      if (newHref !== originalHref) link.setAttribute("href", newHref);
    });

    // Add scroll listener to toggle header scrolled state (shadow)
    const headerNode = document.querySelector('.site-header');
    if (headerNode) {
      const onScroll = () => {
        if (window.scrollY > 8) headerNode.classList.add('site-header--scrolled');
        else headerNode.classList.remove('site-header--scrolled');
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      // run once to set initial state
      onScroll();
    }
  })
  .catch(err => console.error("Error cargando header:", err));

// Load footer partial into #footer if present, otherwise append as before
fetch(basePath + "partials/footer.html")
  .then(res => res.text())
  .then(html => {
    const footerPlaceholder = document.getElementById("footer");
    if (footerPlaceholder) {
      footerPlaceholder.innerHTML = html;
      // If footer contains links, adjust them as well
      const links = footerPlaceholder.querySelectorAll("a");
      links.forEach(link => {
        const originalHref = link.getAttribute("href");
        const newHref = safePrefixHref(originalHref);
        if (newHref !== originalHref) link.setAttribute("href", newHref);
      });
      return;
    }

    // Fallback: append footer if none exists on the page
    if (!document.querySelector(".footer")) {
      const div = document.createElement('div');
      div.innerHTML = html;
      document.body.appendChild(div.firstElementChild);
    }
  })
  .catch(err => console.error("Error cargando footer:", err));
