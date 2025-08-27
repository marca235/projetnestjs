import { IsNotEmpty,Length,IsEmail, IsString} from "class-validator"

export class signinDto{
    @IsNotEmpty()
    @Length(5,30)
    @IsString()
    fullname:string

    @IsNotEmpty()
    @Length(5,30)
    @IsString()
    @IsEmail()
    email:string

    @IsNotEmpty()
    @Length(5,30)
    @IsString()
    username:string


    @IsNotEmpty()
    @Length(5,30)
    @IsString()
    password:string 

    

    

}