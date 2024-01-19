import { FileRoute } from "@tanstack/react-router"

export const Route = new FileRoute("/_layout/_layout-2/layout-b").createRoute({
  component: LayoutBComponent,
})

function LayoutBComponent() {
  return <div>I'm B!</div>
}
