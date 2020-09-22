import "./css/index.css";

import "./js/quicklink.js";

function prefetch(e) {
  if (e.target.tagName != "A") {
    return;
  }
  if (e.target.origin != location.origin) {
    return;
  }
  var l = document.createElement("link");
  l.rel = "prefetch";
  l.href = e.target.href;
  document.head.appendChild(l);
}

document.documentElement.className = document.documentElement.className.replace(
  /\bno-js\b/,
  "js"
);

if (DEV_MODE) console.log("Dev mode is currently enabled yo.");
