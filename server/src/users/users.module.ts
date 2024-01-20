import { Module } from '@nestjs/common';

import { DatabaseModule } from 'src/common/database/database.module';

import { UsersService } from 'src/users/users.service';
import { UsersResolver } from 'src/users/users.resolver';
import { UsersRepository } from 'src/users/users.repository';
import { User, UserSchema } from 'src/users/entities/user.entity';

@Module({
  imports: [
    DatabaseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UsersResolver, UsersService, UsersRepository],
})
export class UsersModule {}
