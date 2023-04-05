import { Racer } from "./raceri";

export class GasCar implements Racer {
    team: string;
    speed: number = 0;
    fuel: number;

    //adding a fixed value (fuel: number = 10) inherently makes it optional
    constructor(team: string, fuel: number = 10) {
        this.team = team;
        this.fuel = fuel
    }

    accelerate(): void {
        this.speed += 2;
        this.fuel -= 1;
    }

    isFuelEmpty(): boolean {
        if (this.fuel <= 0) {
            return true;
        } else {
            return false;
        };
    };
};