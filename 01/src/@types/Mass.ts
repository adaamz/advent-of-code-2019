import {Brand, make} from "ts-brand";

export type Mass = Brand<number, 'mass'>;

const makeMass = make<Mass>();

export function makeMassFromNumber(mass: number): Mass
{
    return makeMass(mass);
}
