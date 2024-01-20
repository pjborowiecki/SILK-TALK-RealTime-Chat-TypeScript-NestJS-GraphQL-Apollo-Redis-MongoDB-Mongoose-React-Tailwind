import { InputType, Field, PartialType } from '@nestjs/graphql';

import { CreateUserInput } from 'src/users/dto/create-user.input';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field()
  _id: string;
}
