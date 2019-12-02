import {makeMassFromNumber, Mass} from "./@types/Mass";
import {Spaceship} from "./@types/Spaceship";

export class FuelCounter
{
    public static calculateRequiredFuel(mass: Mass): Mass
    {
        const requiredFuel = Math.floor(mass / 3) - 2;

        return makeMassFromNumber(requiredFuel);
    }

    public static calculateRequiredFuelForSpaceship(spaceship: Spaceship): Mass
    {
        let totalMass = 0;

        for (const module of spaceship.modules) {
            totalMass += FuelCounter.calculateRequiredFuel(module.mass);
        }

        return makeMassFromNumber(totalMass);
    }
}
