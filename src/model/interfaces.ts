import {User} from "@/model/user";
import {NonGov} from "@/model/nonGov";

export interface UserService {
    create(email: string): void
    getByEmail(email: string): User
}

export interface AuthService {
    authorize(token: string): boolean
}

export interface NonGovService {
    list(fuzzyName: string): NonGov[]
}