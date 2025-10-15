import { IsNotEmpty,Length, IsString} from "class-validator"

export class PostDto {

    @IsNotEmpty()
    @Length(4,50)
    @IsString()
    title:string

    @IsString()
    image:string;

    @IsNotEmpty()
    @IsString()
    content:string;
   

}

