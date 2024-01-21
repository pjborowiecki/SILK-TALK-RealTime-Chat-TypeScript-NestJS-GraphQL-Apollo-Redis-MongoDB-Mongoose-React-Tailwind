import { useMutation, gql } from "@apollo/client"
import type { User } from "@/types/user"
import type { SignUpWithPasswordFormInput } from "@/validations/auth"

interface CreateUserInput {
  createUserInput: SignUpWithPasswordFormInput
}

const CREATE_USER = gql`
  mutation CreateUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
    }
  }
`

export function useCreateUser() {
  return useMutation<User, CreateUserInput>(CREATE_USER)
}
