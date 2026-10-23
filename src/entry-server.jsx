import { renderToString } from "react-dom/server";
import App from "./App.jsx";
import NotFound from "./NotFound.jsx";
import Sitemap from "./Sitemap.jsx";
import Rack from "./Rack.jsx";
import Changelog from "./Changelog.jsx";
import { projects } from "./data.js";
import {
  headHtml,
  head404Html,
  headSitemapHtml,
  headRackHtml,
  headChangelogHtml,
} from "./seo.js";
import { atomFeed } from "./feed.js";
import { llmsFullText, llmsText } from "./llms.js";

export { atomFeed, llmsFullText, llmsText };

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

export function renderRacks() {
  return projects.map((project) => ({
    slug: project.slug,
    html: renderToString(<Rack project={project} />),
    head: headRackHtml(project),
  }));
}

export function renderChangelog() {
  return {
    html: renderToString(<Changelog />),
    head: headChangelogHtml(),
  };
}
