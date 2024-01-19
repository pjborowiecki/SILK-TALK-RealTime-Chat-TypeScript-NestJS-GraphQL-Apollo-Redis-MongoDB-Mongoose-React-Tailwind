import { Link, Outlet, RootRoute } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"

export const Route = new RootRoute({
  component: RootComponent,
})

function RootComponent(): JSX.Element {
  return (
    <>
      <div className="flex gap-2 p-2 text-lg">
        <Link
          to="/"
          activeProps={{
            className: "font-bold",
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>{" "}
        <Link
          to="/layout-a"
          activeProps={{
            className: "font-bold",
          }}
        >
          Layout
        </Link>
      </div>
      <hr />
      <Outlet />
      {/* Start rendering router matches */}
      {process.env.NODE_ENV !== "production" && (
        <TanStackRouterDevtools position="bottom-right" />
      )}
    </>
  )
}
