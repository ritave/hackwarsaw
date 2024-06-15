import {User} from "@/model/user";
import {ErrDuplicate, ErrNotFound} from "@/model/errors";


export class MockUserService {
    usersByEmail: Map<string, User>

    constructor() {
        this.usersByEmail = new Map<string, User>
    }

    // Can throw ErrNotFound
    public getByEmail(email: string): User {
        let out = this.usersByEmail.get(email)
        if (out === undefined) {
            throw ErrNotFound;
        }

        return out
    }

    // Can throw ErrDuplicate
    public create(email: string): void {
        if (this.usersByEmail.has(email)) {
            throw ErrDuplicate;
        }
        this.usersByEmail.set(email, new User(email))
    }
}


