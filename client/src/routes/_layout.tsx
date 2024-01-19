import { Outlet, FileRoute } from "@tanstack/react-router"

export const Route = new FileRoute("/_layout").createRoute({
  component: LayoutComponent,
})

function LayoutComponent(): JSX.Element {
  return (
    <div>
      <div>I'm a layout</div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
