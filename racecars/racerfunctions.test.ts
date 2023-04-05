import { GasCar } from "./gascarclass";
import { findRacersWithEmptyFuel, findAverageSpeed, getFasterRacer } from "./racerfunctions";
import { SolarCar } from "./solarcarclass";

describe('findRacersWithEmptyFuel', () => {
    test('test case: some have no fuel', () => {
        let testArray = [
            new GasCar('Oldsmobile', 0),
            new GasCar('Ford', 30)
        ];
        expect(findRacersWithEmptyFuel(testArray).length).toEqual(1);
    });
    test('test case: all have no fuel', () => {
        let testArray = [
            new GasCar('Ford', 0),
            new GasCar('Mazda', 0),
            new GasCar('Chevy', 0)
        ];
        expect(findRacersWithEmptyFuel(testArray).length).toEqual(3);
    });
    test('none have no fuel', () => {
        let testArray = [
            new GasCar('Ford', 20),
            new GasCar('Mazda', 10),
            new GasCar('Chevy', 25)
        ];
        expect(findRacersWithEmptyFuel(testArray)).toEqual([]);
    });
    test('with a SolarCar', () => {
        let testArray = [
        new SolarCar('Suncar')
        ];
        expect(findRacersWithEmptyFuel(testArray)).toEqual([]);
    });
    test('with both GasCars and SolarCars', () => {
        let testArray = [
            new SolarCar('Suncar'),
            new SolarCar('Supersuncar'),
            new GasCar('GassGuzzler5000', 780),
            new GasCar('Fiat300', 0),
            new GasCar('Ford', 20)
        ];
        expect(findRacersWithEmptyFuel(testArray).length).toEqual(1);
    })
})