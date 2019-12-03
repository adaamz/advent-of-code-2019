import {Brand, make} from "ts-brand";
import {Program} from "./Program";

export type ExecutedProgram = Brand<number[], 'executed_program'>;
const makeExecutedProgram = make<ExecutedProgram>();

export function makeExecutedProgramFromList(executedProgram: number[]): ExecutedProgram
{
    return makeExecutedProgram(executedProgram);
}

export function makeExecutedProgramFromProgram(program: Program): ExecutedProgram
{
    return makeExecutedProgram(program);
}
