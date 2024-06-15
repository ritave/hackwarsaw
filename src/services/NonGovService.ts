"use client";
import {NonGov} from "@/model/nonGov";
import Fuse from "fuse.js";
import {User} from "@/model/user";
import {getContributionsStats} from "@/services/DB";

export class MockNonGovService {
  nonGovs: NonGov[];
  fuse: Fuse<NonGov>;

  constructor() {
    this.nonGovs = require("@/mock/nongov.json").map(NonGov.fromJSON);
    this.fuse = new Fuse(this.nonGovs, {
      isCaseSensitive: false,
      keys: ["name"],
    });
  }

  list(fuzzyName: string): NonGov[] {
    if (fuzzyName == "") {
      return this.nonGovs;
    }
    return this.fuse.search(fuzzyName).map((result) => result.item);
  }

  async updateContributions(): Promise<void> {
    const stats = await getContributionsStats()

    this.nonGovs.forEach((nG) => {
      const s = stats.get(nG.krs) || {count: 0, sum: 0, match: 0}

      nG.contributors = s.count
      nG.totalRaised = s.sum
      nG.govMatch = s.match
    });
  }
}
