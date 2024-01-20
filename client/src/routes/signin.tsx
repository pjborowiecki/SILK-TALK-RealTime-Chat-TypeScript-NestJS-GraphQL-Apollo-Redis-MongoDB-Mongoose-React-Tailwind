import { SignInPage } from "@/pages/signin-page"
import { FileRoute } from "@tanstack/react-router"

export const Route = new FileRoute("/signin").createRoute({
  component: SignInPage,
})
