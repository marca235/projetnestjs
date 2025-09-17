



// main.ts
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import session from 'express-session';


const MySQLStore = require('express-mysql-session')(session);





async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );
  app.useGlobalPipes(
  new ValidationPipe(
    
  ),
);
  
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('ejs');

  const options = {
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '',
	database: 'test'
};
const sessionStore = new MySQLStore(options);

  

// somewhere in your initialization file
app.use(
  session({
    secret: 'my-secret',
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
  }),
);


  await app.listen(3000);
}
bootstrap();