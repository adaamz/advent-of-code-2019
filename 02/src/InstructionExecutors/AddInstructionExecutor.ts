import {InstructionExecutor} from "./InstructionExecutor";
import {Instruction, OpCode} from "../@types/Instruction";
import {ExecutedProgram} from "../@types/ExecutedProgram";

const AddInstructionOpCode = 1 as OpCode;

export class AddInstructionExecutor implements InstructionExecutor
{
    public opCode: OpCode = AddInstructionOpCode;

    execute(instruction: Instruction, program: ExecutedProgram): void
    {
        program[instruction[3]] = program[instruction[1]] + program[instruction[2]];
    }
}
