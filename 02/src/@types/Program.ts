import {Brand, make} from "ts-brand";

export type Program = Brand<Required<number[]>, 'program'>;
const makeProgram = make<Program>();

export function makeProgramFromList(program: number[]): Program
{
    return makeProgram(program);
}
