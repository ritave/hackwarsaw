import {User} from "@/model/user";
import {ErrDuplicate, ErrNotFound} from "@/model/errors";
import {createUser, getUserByEmail, updateUser} from "@/services/DB";


let mockUser: MockUserService | undefined;

export function mockUserService(): MockUserService {
    if (mockUser === undefined) {
        mockUser = new MockUserService();
    }
    return mockUser;
}


class MockUserService {
    // Can throw ErrNotFound
    public async getByEmail(email: string): Promise<User> {
        return getUserByEmail(email)
    }

    // Can throw ErrDuplicate
    public async create(email: string): Promise<void> {
        return createUser(email)
    }

    public async getOrCreateByEmail(email: string): Promise<User> {
        return this.getByEmail(email)
            .catch(async e => {
                const msg = (e as Error).message;
                if (msg === ErrNotFound) {
                    await this.create(email);
                    return await this.getByEmail(email);
                }
                throw e;
            })
    }

    public async update(user: User): Promise<void> {
        return updateUser(user)
    }
}


