// 
import { User } from 'src/users/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne} from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  title: string;

  @Column({ unique: true })
  image: string;

  @Column()
  content: string; 

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;


    @CreateDateColumn({ type: 'timestamp' })
    dateUpdated: Date;


    @ManyToOne(() => User, (user) => user.posts)
    user: User;
}
