// 
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn } from 'typeorm';
import { Post } from '../post/post.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string; 

  @CreateDateColumn({ type: 'timestamp' })
  createdAj: Date;


  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];
}
