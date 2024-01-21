import "@/styles/globals.css"

import ReactDOM from "react-dom/client"
import { ApolloProvider } from "@apollo/client"

import { router } from "@/config/routing"
import { client } from "@/config/apollo"

import { Toaster } from "@/components/ui/toaster"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/providers/theme-provider"
import { RouterProvider } from "@tanstack/react-router"

const rootElement = document.getElementById("app")!

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <ThemeProvider>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
        <Toaster />
        <TailwindIndicator />
      </ApolloProvider>
    </ThemeProvider>
  )
}
