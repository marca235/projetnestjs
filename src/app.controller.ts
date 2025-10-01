import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

@Get()
@Render('home')
getHello() {}

}



// import { Controller, Get } from '@nestjs/common';

// @Controller()
// export class AppController {
//   @Get()
//   getHello() {
//     return { message: 'Bienvenue sur la racine !' };
//   }
// }
