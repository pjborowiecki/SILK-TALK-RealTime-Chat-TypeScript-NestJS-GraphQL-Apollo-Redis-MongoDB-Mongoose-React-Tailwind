import { InputType, PartialType } from '@nestjs/graphql';

import { CreateUserInput } from 'src/users/dto/create-user.input';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {}
