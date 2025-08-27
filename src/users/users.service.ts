import { Injectable } from '@nestjs/common';

@Injectable()
export default class UsersService {
    get Users(): string {
        return 'Module users';
    }
    
}
