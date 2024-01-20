import { FileRoute } from "@tanstack/react-router"
import { LandingPage } from "@/pages/landing-page"

export const Route = new FileRoute("/").createRoute({
  component: LandingPage,
})
