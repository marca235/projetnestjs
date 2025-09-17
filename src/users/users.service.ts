import { Injectable,NotFoundException, UnauthorizedException } from '@nestjs/common';
import { signinDto, } from './dtos/signin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
//importation bcrypt
import * as bcrypt from 'bcrypt';
import { signUpDto } from './dtos/signup.dto';


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
        console.log("Enregistrement reussi");
        return newUser;
        }catch(error){
            console.log("Erreur d'enregistrement");

        
        }

            
    }


       async postLogin(body: signUpDto){ 
        const { username, password} = body;
        const userFound = await this.usersRepository.findOne({
            where:{username:username},
        });
        if(!userFound) return new NotFoundException('User not found');
        const passwordVerify = await bcrypt.compare(password, userFound.password);
        if(!passwordVerify) return new UnauthorizedException("password does not match");
        return userFound;
    }

    
}
