import {User} from "@/model/user";
import {NonGov} from "@/model/nonGov";

export interface UserService {
    create(email: string): Promise<void>
    getByEmail(email: string): Promise<User>
}

export interface AuthService {
    authorize(token: string): Promise<User>
}

export interface NonGovService {
    list(fuzzyName: string): NonGov[]
}