import {FuelCounter} from "../src/FuelCounter";
import {makeMassFromNumber} from "../src/@types/Mass";

describe('calculate required fuel single', () => {
    it('mess 12', () => {
        const result = FuelCounter.calculateRequiredFuel(makeMassFromNumber(12));
        expect(result).toBe(makeMassFromNumber(2));
    });

    it('mess 14', () => {
        const result = FuelCounter.calculateRequiredFuel(makeMassFromNumber(14));
        expect(result).toBe(makeMassFromNumber(2));
    });

    it('mess 1969', () => {
        const result = FuelCounter.calculateRequiredFuel(makeMassFromNumber(1969));
        expect(result).toBe(makeMassFromNumber(654));
    });

    it('mess 100756', () => {
        const result = FuelCounter.calculateRequiredFuel(makeMassFromNumber(100756));
        expect(result).toBe(makeMassFromNumber(33583));
    });
});

describe('calculate required fuel for spaceship', () => {
    it('mess of modules [12, 14]', () => {
        const result = FuelCounter.calculateRequiredFuelForSpaceship({modules: [{mass: makeMassFromNumber(12)}, {mass: makeMassFromNumber(14)}]});
        expect(result).toBe(makeMassFromNumber(4));
    });

    it('mess 1969 modules with each mess = 14', () => {
        const result = FuelCounter.calculateRequiredFuelForSpaceship({modules: new Array(1969).fill({mass: makeMassFromNumber(14)})});
        expect(result).toBe(makeMassFromNumber(3938));
    });
});
