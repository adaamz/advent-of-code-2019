import {InstructionExecutor} from "./InstructionExecutor";
import {Instruction, OpCode} from "../@types/Instruction";
import {ExecutedProgram} from "../@types/ExecutedProgram";

const MultiplyInstructionOpCode = 2 as OpCode;

export class MultiplyInstructionExecutor implements InstructionExecutor
{
    public opCode = MultiplyInstructionOpCode;

    execute(instruction: Instruction, program: ExecutedProgram): void
    {
        program[instruction[3]] = program[instruction[1]] * program[instruction[2]];
    }
}
