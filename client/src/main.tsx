import "@/styles/globals.css"

import React from "react"
import ReactDOM from "react-dom/client"

import { App } from "@/components/app"
import { ThemeProvider } from "@/providers/theme-provider"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
