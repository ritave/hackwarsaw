import {NonGov} from "@/model/nonGov";
import Fuse from "fuse.js";
import {User} from "@/model/user";
import {} from "@/services/DB";


export class MockNonGovService {
    nonGovs: NonGov[];
    fuse: Fuse<NonGov>;

    constructor() {
        this.nonGovs = require("@/mock/nongov.json").map(NonGov.fromJSON);
        this.fuse = new Fuse(this.nonGovs, {
            findAllMatches: true,
            isCaseSensitive: false,
            keys: ["name"],
            shouldSort: false,
        });
    }

    list(fuzzyName: string): NonGov[] {
        if (fuzzyName == "") {
            return this.nonGovs;
        }
        return this.fuse.search(fuzzyName).map(result => result.item)
    }

    // Can throw ErrDuplicate
    // addContribution(user: User, amount: number) {
    //     this.db
    // }
}