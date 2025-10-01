import { Controller,Get, Render, Post, Body,UseInterceptors,ClassSerializerInterceptor,Session, Redirect} from '@nestjs/common';
import {UsersService} from './users.service';
import { signinDto } from './dtos/signin.dto';
import { signUpDto } from './dtos/signup.dto';
import session from 'express-session';

@Controller('users')
export class UsersController {
    constructor(private readonly userService:UsersService) {}

    @Get('home')
    @Render('users/home')
    home () {
        
    }

    
    @Get('signin')
    @Render('users/signin')
    signin () {
        
    }

    @Get('signUp')
    @Render('users/signUp')
    signUp () {
        
    }

    @Post("/signin")
    postSignin(@Body() body: signinDto){

        return this.userService.addUser(body);
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Post("/signUp")
    @Redirect('/')
   async postSignup(@Body() body: signUpDto, @Session() session : Record<string, any>){
        const user = await this.userService.postLogin(body);
        session.user = user;
        session.connected = true;
        return session;
    }
    
    @Post("/login")
    login(@Body() body){
        return body;
    }
    @Post("/Logout")
    @Redirect('/users/signUp')
    async logout(@Session() session : Record<string, any>){
        session.destroy();
       
    }
}




// import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
// import { UsersService } from './users.service';

// @Controller('users')
// export class UsersController {
//   constructor(private readonly usersService: UsersService) {}

//   @Post('login')
//   async login(@Body() body: { username: string; password: string }) {
//     const { username, password } = body;
//     const isValid = await this.usersService.validateUser(username, password);
//     if (!isValid) {
//       throw new UnauthorizedException('Nom d’utilisateur ou mot de passe incorrect');
//     }
//     return { message: 'Connexion réussie' };
//   }

//   @Post('register')
//   async register(@Body() body: { username: string; password: string }) {
//     const user = await this.usersService.createUser(body.username, body.password);
//     return { message: 'Utilisateur créé', userId: user.id };
//   }

//   @Post('logout')
//   logout() {
//     return { message: 'Déconnecté avec succès' };
//   }
// }

