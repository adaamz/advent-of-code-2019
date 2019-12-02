import * as readline from 'readline';
import {FuelCounter} from "./src/FuelCounter";
import {makeMassFromNumber} from "./src/@types/Mass";
import {SpaceshipModule} from "./src/@types/Spaceship";

const readlineListener = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function readModuleMassFromStdIn(): Promise<SpaceshipModule[]>
{
    const modules: SpaceshipModule[] = [];

    return new Promise((resolve): void => {
        readlineListener.on("line", (data: string) => {
            const mass = Number(data);

            if (!isNaN(mass)) {
                modules.push({mass: makeMassFromNumber(mass)});
            }
        });

        readlineListener.on("close", () => {
            resolve(modules);
        });
    });
}

async function main()
{
    const modules = await readModuleMassFromStdIn();

    const requiredFuelForSpaceship = FuelCounter.calculateRequiredFuelForSpaceship({
        modules: modules,
    });

    console.log(`Spaceship required fuel is ${requiredFuelForSpaceship}.`);
}

main();
