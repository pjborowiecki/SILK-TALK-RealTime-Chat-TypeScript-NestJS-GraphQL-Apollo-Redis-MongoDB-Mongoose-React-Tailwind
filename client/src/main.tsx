import "@/styles/globals.css"

import ReactDOM from "react-dom/client"
import { RouterProvider, Router } from "@tanstack/react-router"
import { routeTree } from "@/routeTree.gen"
import { ThemeProvider } from "@/providers/theme-provider"
const router = new Router({
  routeTree,
  defaultPreload: "intent",
})

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById("app")!

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
