import { GasCar } from "./gascarclass";

describe('GasCar class', () => {
    test('team and fuel properties are set from the constructor paramaters', () => {
        const car = new GasCar('fuelcar', 4);
        expect(car.team).toEqual('fuelcar');
        expect(car.fuel).toEqual(4);
    });
    test('fuel defaults to 10, when second paramater is omitted', () => {
        const car = new GasCar('gassycar',);
        expect(car.fuel).toEqual(10);
    });
    test('speed property starts at 0', () => {
        const car = new GasCar('foolcar',);
        expect(car.speed).toEqual(0);
    });
    test('calling accelerate once brings speed to 2', () => {
        const car = new GasCar('speedycar',);
        car.accelerate();
        expect(car.speed).toEqual(2)
    });
    test('calling accelerate twice brings speed to 4', () => {
        const car = new GasCar('speedycar',);
        car.accelerate();
        car.accelerate();
        expect(car.speed).toEqual(4)
    });
    test('calling accelerate once reduces fuel by 1', () => {
        const car = new GasCar('speedycar', 5);
        car.accelerate();
        expect(car.fuel).toEqual(4)
    });
    test('calling accelerate twice reduces fuel by 2', () => {
        const car = new GasCar('speedycar', 5);
        car.accelerate();
        car.accelerate();
        expect(car.fuel).toEqual(3)
    });
    test('isFuelEmpty returns true when fuel is 0', () => {
        const car = new GasCar('fuelycar', 0);
        expect(car.isFuelEmpty()).toEqual(true);
    });
    test('isFuelEmpty returns false when fuel is > 0', () => {
        const car = new GasCar('fuelycar', 4);
        expect(car.isFuelEmpty()).toEqual(false);
    });
});