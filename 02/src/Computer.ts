import {AddInstructionExecutor} from "./InstructionExecutors/AddInstructionExecutor";
import {ExecutedProgram, makeExecutedProgramFromProgram} from "./@types/ExecutedProgram";
import {Instruction, InstructionLength, OpCode} from "./@types/Instruction";
import {InstructionExecutor} from "./InstructionExecutors/InstructionExecutor";
import {MultiplyInstructionExecutor} from "./InstructionExecutors/MultiplyInstructionExecutor";
import {makeProgramFromList, Program} from "./@types/Program";

const STOP_OP_CODE = 99;

export class Computer
{
    // ts cannot use OpCode as index type yet :-(
    private readonly executors: {[opCode: number]: InstructionExecutor} = {};

    public constructor()
    {
        const executors: InstructionExecutor[] = [
            new AddInstructionExecutor(),
            new MultiplyInstructionExecutor(),
        ];

        for (const executor of executors) {
            this.executors[executor.opCode] = executor;
        }
    }

    public executeProgram(program: Program): ExecutedProgram
    {
        let executedProgram = makeExecutedProgramFromProgram(program);

        for (let i = 0; i < program.length && program[i] !== STOP_OP_CODE; i += InstructionLength) {
            const instruction = program.slice(i, i + InstructionLength) as unknown as Instruction; // let's hope it will always be number[4]

            if (!this.executors.hasOwnProperty(instruction[0])) {
                console.error(`Cannot find executor for op code "${instruction[0]}" at index "${i}" in program ${program}.`);
            }

            this.executors[instruction[0]].execute(instruction, executedProgram);
        }

        return executedProgram;
    }

    public restoreGravityAssistProgram(program: Program): ExecutedProgram
    {
        let gravityAssistProgram: number[] = program;
        gravityAssistProgram[1] = 12;
        gravityAssistProgram[2] = 2;

        return this.executeProgram(makeProgramFromList(gravityAssistProgram));
    }
}
