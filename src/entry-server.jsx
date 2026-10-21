import { renderToString } from "react-dom/server";
import App from "./App.jsx";
import NotFound from "./NotFound.jsx";
import Sitemap from "./Sitemap.jsx";
import { headHtml, head404Html, headSitemapHtml } from "./seo.js";

export function render() {
  return {
    html: renderToString(<App />),
    head: headHtml(),
  };
}

export function render404() {
  return {
    html: renderToString(<NotFound />),
    head: head404Html(),
  };
}

export function renderSitemap() {
  return {
    html: renderToString(<Sitemap />),
    head: headSitemapHtml(),
  };
}
