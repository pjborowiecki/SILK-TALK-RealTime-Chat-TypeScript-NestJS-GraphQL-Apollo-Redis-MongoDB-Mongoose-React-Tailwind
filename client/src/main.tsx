import "@/styles/globals.css"

import ReactDOM from "react-dom/client"

import { Toaster } from "@/components/ui/toaster"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/providers/theme-provider"
import { RouterProvider } from "@tanstack/react-router"
import { router } from "@/config/routing"

const rootElement = document.getElementById("app")!

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <ThemeProvider>
      <RouterProvider router={router} />
      <Toaster />
      <TailwindIndicator />
    </ThemeProvider>
  )
}
