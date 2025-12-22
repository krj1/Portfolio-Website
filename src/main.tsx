import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./styles/scroll-lock.css";

// Add iOS detection for scroll lock
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if (isIOS) {
  document.body.classList.add('ios-fix');
}

createRoot(document.getElementById("root")!).render(<App />);