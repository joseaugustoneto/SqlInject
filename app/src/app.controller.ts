import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { resolve } from 'path';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getHome(@Res() res: Response): void {
    res.sendFile(resolve('./src/public/home.html'));
  }

  @Get('script.js')
  getScript(@Res() res: Response): void {
    res.sendFile(resolve('./src/public/script.js'));
  }
}
