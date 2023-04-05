import { SolarCar } from "./solarcarclass";

describe('SolarCar class', () => {
    test('team property is set from the constructor paramater', () => {
        const car = new SolarCar('suncar');
        expect(car.team).toEqual('suncar');
    });
    test('speed property starts at 0', () => {
        const car = new SolarCar('suncar');
        expect(car.speed).toEqual(0);
    });
    test('calling accelerate once brings speed to 1', () => {
        const car = new SolarCar('suncar');
        car.accelerate();
        expect(car.speed).toEqual(1);
    });
    test('calling accelertae twice brings speed to 2', () => {
        const car = new SolarCar('suncar');
        car.accelerate();
        car.accelerate();
        expect(car.speed).toEqual(2);
    });
    test('isFuelEmpty is false', () => {
        const car = new SolarCar('mooncar');
        expect(car.isFuelEmpty()).toEqual(false);
    });
});