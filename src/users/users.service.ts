import { Injectable } from '@nestjs/common';
import { signinDto } from './dtos/signin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
//importation bcrypt
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,) {}


   async addUser (body: signinDto){
        try{
            const newUser = this.usersRepository.create({...body});
            //hashage du mot de passe
            const bcrypt = require('bcrypt');
            const salt = await bcrypt.genSalt();
            newUser.password = await bcrypt.hash(newUser.password, salt);

           await this.usersRepository.save(newUser);
        // console.log("Enregistrement reussi");
        return newUser;
        }catch(error){
            console.log("Erreur d'enregistrement");

        
        }
    }
}
