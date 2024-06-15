import {UserService} from "@/model/interfaces";

export class MockAuthService {
    userSrv: UserService

    constructor(userSrv: UserService) {
        this.userSrv = userSrv;
    }

    public authorize(email: string): boolean {
        try {
            this.userSrv.getByEmail(email)
        } catch (exception) {
            this.userSrv.create(email)
        }
        return true; // We do not care about the user here, just about him existing
    }
}