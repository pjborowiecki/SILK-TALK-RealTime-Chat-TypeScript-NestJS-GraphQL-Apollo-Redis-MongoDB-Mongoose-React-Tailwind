import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { AbstractRepository } from 'src/common/database/abstract.repository';

import { User } from 'src/users/entities/user.entity';

@Injectable()
export class UsersRepository extends AbstractRepository<User> {
  protected readonly logger = new Logger(UsersRepository.name);

  constructor(@InjectModel(User.name) userModel: Model<User>) {
    super(userModel);
  }
}
