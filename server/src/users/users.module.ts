import { Module } from '@nestjs/common';

import { UsersService } from 'src/users/users.service';
import { UsersResolver } from 'src/users/users.resolver';

@Module({
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
