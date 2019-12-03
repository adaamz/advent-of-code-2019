import {Instruction} from "../@types/Instruction";
import {ExecutedProgram} from "../@types/ExecutedProgram";

export interface InstructionExecutor
{
    opCode: Instruction[0];

    execute(instruction: Instruction, program: ExecutedProgram): void;
}
