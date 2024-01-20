import { Outlet, RootRoute } from "@tanstack/react-router"

export const Route = new RootRoute({
  component: () => <Outlet />,
})
