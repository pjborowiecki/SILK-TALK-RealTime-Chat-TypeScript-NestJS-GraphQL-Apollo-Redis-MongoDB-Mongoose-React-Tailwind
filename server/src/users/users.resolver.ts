import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';
import { CreateUserInput } from 'src/users/dto/create-user.input';
import { UpdateUserInput } from 'src/users/dto/update-user.input';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('_id') _id: string) {
    return this.usersService.findOne(_id);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput._id, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('_id') _id: string) {
    return this.usersService.remove(_id);
  }
}
