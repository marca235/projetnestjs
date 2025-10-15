import { Controller, Get, Post, Render,Body,Session } from '@nestjs/common';
import { PostDto } from './dto/postDto';
import { PostService } from './post.service';
import  session from 'express-session';
import { User } from 'src/users/user.entity';




@Controller('post')
export class PostController {

    constructor(private readonly postService: PostService) {}
    
    @Get('addPost')
    @Render('post/addPost')
    getPost () { }  


    @Post('/addPost')
    async addPostPost (
        @Body() body:PostDto,
         @Session() session: Record<string,any>
         ){
            const UserConnect:User = session.user;
        return await this.postService.addPost(body,UserConnect);
     }
}
