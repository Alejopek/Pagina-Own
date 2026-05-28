import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

/* ─── DEV CONSOLE EASTER EGG ──────────────────────────────
   Outputs a personalized greeting block whenever a developer
   opens the browser inspector DevTools.
   ──────────────────────────────────────────────────────────── */
console.log(
  "%c Alejo Tomas Diaz %c\n%c Backend & Linux Specialist\n%c\n → Encontraste el console. Veo que sos curioso\n → alejopek62@gmail.com\n",
  "background:#38bdf8;color:#060608;font-size:16px;font-weight:800;padding:4px 8px;border-radius:4px",
  "",
  "color:#818cf8;font-size:12px",
  "color:#9090a8;font-size:11px"
);

const container = document.getElementById("root");
if (!container) {
  throw new Error("Failed to find root mounting element.");
}

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>
);
