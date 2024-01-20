import { Link } from "@tanstack/react-router"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { OAuthButtons } from "@/components/auth/oauth-buttons"
import { SignInWithPasswordForm } from "@/components/forms/signin-with-password-form"
import { Icons } from "@/components/icons"

export function SignInPage(): JSX.Element {
  return (
    <div className="flex h-auto min-h-screen w-full items-center justify-center">
      <Card className="max-sm:flex  max-sm:w-full max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:rounded-none max-sm:border-none sm:min-w-[370px] sm:max-w-[368px]">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl">Sign in</CardTitle>
            <Link to="/">
              <Icons.close className="size-4" />
            </Link>
          </div>
          <CardDescription>
            Choose your preferred sign in method
          </CardDescription>
        </CardHeader>
        <CardContent className="max-sm:w-full max-sm:max-w-[340px] max-sm:px-10">
          <OAuthButtons />
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative mb-3 mt-6 flex justify-center text-xs uppercase">
              <span className="bg-background px-2">
                Or continue with password
              </span>
            </div>
          </div>
          <SignInWithPasswordForm />
        </CardContent>

        <CardFooter className="grid w-full text-sm text-muted-foreground max-sm:max-w-[340px] max-sm:px-10">
          <div>
            <span>Don&apos;t have an account? </span>
            <Link
              aria-label="Sign up"
              to="/signup"
              className="font-bold tracking-wide text-primary underline-offset-4 transition-colors hover:underline"
            >
              Sign up
              <span className="sr-only">Sign up</span>
            </Link>
            .
          </div>
          <div>
            <span>Forgot your password? </span>
            <Link
              aria-label="Reset password"
              to="/signin/password-reset"
              className="text-sm font-normal text-primary underline-offset-4 transition-colors hover:underline"
            >
              Reset now
              <span className="sr-only">Reset Password</span>
            </Link>
            .
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}