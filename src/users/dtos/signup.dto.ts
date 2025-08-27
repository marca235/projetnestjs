import { IsNotEmpty, Length } from "class-validator";

export class signUpDto{
    @IsNotEmpty()
    @Length(5,30)
    username:string

    @IsNotEmpty()
    @Length(5,30)
    password:string 
}