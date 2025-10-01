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
