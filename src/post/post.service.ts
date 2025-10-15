import { Injectable } from '@nestjs/common';
import { PostDto } from './dto/postDto';
import { Post } from './post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/users/user.entity';


@Injectable()
export class PostService {
  getAllPosts() {
    const posts = this.postRepository.find({ order: { dateUpdated: 'DESC'}})
    return posts;
  }

     constructor(
        @InjectRepository(Post) private  postRepository: Repository<Post>) {}
    async addPost(body: PostDto, user: User) {
        const newPost = this.postRepository.create(body);
        newPost.user=user
        await this.postRepository.save(newPost);
        return "Publication reussie";


    
}
}
