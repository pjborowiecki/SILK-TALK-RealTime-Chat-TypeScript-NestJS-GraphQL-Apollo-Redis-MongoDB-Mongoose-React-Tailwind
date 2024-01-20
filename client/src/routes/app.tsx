import { FileRoute } from "@tanstack/react-router"
import { AppPage } from "@/pages/app-page"

export const Route = new FileRoute("/app").createRoute({
  component: AppPage,
})
