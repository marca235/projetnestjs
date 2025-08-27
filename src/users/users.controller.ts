import { Controller,Get, Render, Post, Body } from '@nestjs/common';
import UsersService from './users.service';
import { signinDto } from './dtos/signin.dto';

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
        return body;
    }

    @Post("/signUp")
    postSignup(@Body() body: signinDto){
        return body;
    }
}
