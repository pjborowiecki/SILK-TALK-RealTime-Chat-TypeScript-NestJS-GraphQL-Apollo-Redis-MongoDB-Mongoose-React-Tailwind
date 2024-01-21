import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import {
  signUpWithPasswordSchema,
  type SignUpWithPasswordFormInput,
} from "@/validations/auth"

import { useToast } from "@/hooks/use-toast"
import { useCreateUser } from "@/hooks/use-create-user"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PasswordInput } from "@/components/password-input"
import { Icons } from "@/components/icons"

export function SignUpWithPasswordForm(): JSX.Element {
  const { toast } = useToast()
  const [createUser] = useCreateUser()
  const [isPending, startTransition] = React.useTransition()

  const form = useForm<SignUpWithPasswordFormInput>({
    resolver: zodResolver(signUpWithPasswordSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  })
  function onSubmit(formData: SignUpWithPasswordFormInput): void {
    startTransition(() => {
      createUser({
        variables: {
          createUserInput: {
            email: formData.email,
            password: formData.password,
            confirmPassword: formData.confirmPassword,
          },
        },
      })
        .then((newUser) => {
          // TODO: Handle Toast messages (success, user exists, password mismatch,error)
          console.log("NEW USER", newUser)
        })
        .catch((error) => {
          console.error(error)
          toast({
            title: "Something went wrong",
            description: "Please try again",
            variant: "destructive",
          })
        })
    })
  }

  return (
    <Form {...form}>
      <form
        className="grid gap-4"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="johnsmith@gmail.com"
                  autoComplete="email"
                  {...field}
                />
              </FormControl>
              <FormMessage className="pt-2 sm:text-sm" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="**********" {...field} />
              </FormControl>
              <FormMessage className="pt-2 sm:text-sm" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="**********" {...field} />
              </FormControl>
              <FormMessage className="pt-2 sm:text-sm" />
            </FormItem>
          )}
        />

        <Button disabled={isPending}>
          {isPending ? (
            <>
              <Icons.spinner
                className="mr-2 size-4 animate-spin"
                aria-hidden="true"
              />
              <span>Signing up...</span>
            </>
          ) : (
            <span>Continue</span>
          )}
          <span className="sr-only">
            Continue signing up with email and password
          </span>
        </Button>
      </form>
    </Form>
  )
}
