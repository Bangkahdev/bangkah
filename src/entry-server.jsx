import { renderToString } from "react-dom/server";
import App from "./App.jsx";
import NotFound from "./NotFound.jsx";
import { headHtml, head404Html } from "./seo.js";

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
