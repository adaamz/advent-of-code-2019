import * as readline from 'readline';
import {Computer} from "./src/Computer";
import {makeProgramFromList, Program} from "./src/@types/Program";

const readlineListener = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function readGravityAssistProgramFromStdIn(): Promise<Program>
{
    let gravityAssistProgram: Program;

    return new Promise((resolve): void => {
        readlineListener.on("line", (line: string) => {
            if (line !== "") {
                gravityAssistProgram = makeProgramFromList(line.split(',').map(Number));
            }
        });

        readlineListener.on("close", () => {
            resolve(gravityAssistProgram);
        });
    });
}

async function main()
{
    const gravityAssistProgram = await readGravityAssistProgramFromStdIn();

    const restoredGravityProgram = new Computer().restoreGravityAssistProgram(gravityAssistProgram);

    console.debug(`Restored gravity program is ${restoredGravityProgram}.`);

    console.log(`Position 0 contains "${restoredGravityProgram[0]}".`);
}

main();
