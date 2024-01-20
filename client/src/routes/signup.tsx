import { SignUpPage } from "@/pages/signup-page"
import { FileRoute } from "@tanstack/react-router"

export const Route = new FileRoute("/signup").createRoute({
  component: SignUpPage,
})
