import { Controller,Get, Render } from '@nestjs/common';
import UsersService from './users.service';

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
}
