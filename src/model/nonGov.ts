import {name} from "next/dist/telemetry/ci-info";

export class NonGov {
    krs: string;
    name: string;
    region: string;
    city: string;

    contributors: number;
    totalRaised: number;
    govMatch: number;

    constructor(krs: string, name: string, region: string, city: string) {
        this.krs = krs;
        this.name = name;
        this.region = region;
        this.city = city;
        this.contributors = 0;
        this.totalRaised = 0;
        this.govMatch = 0;
    }

    public static fromJSON(data: any): NonGov {
        return new NonGov(data['krs'], data['name'], data['region'], data['city'])
    }
}