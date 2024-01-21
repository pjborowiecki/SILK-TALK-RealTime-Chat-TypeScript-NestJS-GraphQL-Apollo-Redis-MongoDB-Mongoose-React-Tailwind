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
import { SignUpWithPasswordForm } from "@/components/forms/signup-with-password-form"
import { Icons } from "@/components/icons"

export function SignUpPage(): JSX.Element {
  return (
    <div className="flex h-auto min-h-screen w-full items-center justify-center">
      <Card className="max-sm:flex  max-sm:w-full max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:rounded-none max-sm:border-none sm:min-w-[370px] sm:max-w-[368px]">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl">Sign up</CardTitle>
            <Link to="/">
              <Icons.close className="size-4" />
            </Link>
          </div>
          <CardDescription>
            Choose your preferred sign up method
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
          <SignUpWithPasswordForm />
        </CardContent>

        <CardFooter className="grid w-full text-sm text-muted-foreground max-sm:max-w-[340px] max-sm:px-10">
          <div>
            <div>
              <span> Already have an account? </span>
              <Link
                aria-label="Sign in"
                href="/signin"
                className="font-bold tracking-wide text-primary underline-offset-4 transition-all hover:underline"
              >
                Sign in
                <span className="sr-only">Sign in</span>
              </Link>
              .
            </div>
            <div>
              <span>Lost email verification link? </span>
              <Link
                aria-label="Resend email verification link"
                href="/signup/reverify-email"
                className="text-sm font-normal text-primary underline-offset-4 transition-colors hover:underline"
              >
                Resend
                <span className="sr-only">Resend email verification link</span>
              </Link>
              .
            </div>
          </div>

          <div className="text-sm text-muted-foreground md:text-xs">
            By continuing, you agree to our{" "}
            <Link
              aria-label="Terms of Service"
              href="/tos"
              className="font-semibold underline-offset-4 transition-all hover:underline"
            >
              ToS
            </Link>{" "}
            <br className="xs:hidden sm:block md:hidden" />
            and
            <Link
              aria-label="Privacy Policy"
              href="/privacy"
              className="font-semibold underline-offset-4 transition-all hover:underline"
            >
              {" "}
              Privacy Policy
            </Link>
            .
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
