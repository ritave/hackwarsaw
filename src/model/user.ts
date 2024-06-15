export class User {
    email: string;
    contributesTo: string | undefined;
    taxAmount: number;

    constructor(email: string) {
        this.email = email;
        this.contributesTo = undefined;
        this.taxAmount = 0
    }

    contributeTo(krs: string, amount: number) {
        this.contributesTo = krs;
        this.taxAmount = amount;
    }
}