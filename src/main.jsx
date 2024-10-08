import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { StoreProvider } from "./Store/storeContext.jsx"; // Ensure you import the StoreProvider

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <StoreProvider>
      {" "}
      {/* Wrap App with StoreProvider */}
      <App />
    </StoreProvider>
  </StrictMode>
);
