import { Racer } from "./raceri"

export function findRacersWithEmptyFuel(racers: Racer[]): Racer[] {

    let emptyRacers: Racer[] = [];

    for (let racer of racers) {
        if (racer.isFuelEmpty() === true) {
            emptyRacers.push(racer);
        }
    }
    
    return emptyRacers;

};

export function findAverageSpeed(racers: Racer[]): number {
    let total = 0
    for (let racer of racers) {
        total += racer.speed;
    }
    return total/racers.length;
}

export function getFasterRacer(racerA: Racer, racerB: Racer): Racer | null {
    if (racerA.speed > racerB.speed) {
        return racerA;
    } else if (racerB.speed > racerA.speed) {
        return racerB;
    } else {
        return null;
    };
};