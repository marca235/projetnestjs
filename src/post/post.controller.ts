import { Controller, Get, Post, Render } from '@nestjs/common';

@Controller('post')
export class PostController {
    
    @Get('addPost')
    @Render('post/addPost')
    addPost () { }  
}
