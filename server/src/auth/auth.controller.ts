import { Controller, Post, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';

import { User } from 'src/users/entities/user.entity';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  @Post('signin')
  @UseGuards(LocalAuthGuard)
  async signin(
    @CurrentUser() user: User,
    @Res({ passthrough: true }) response: Response,
  ) {}
}
