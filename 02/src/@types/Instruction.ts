import {Brand} from "ts-brand";

export type OpCode = Brand<number, 'op_code'>;
export type Op1Position = Brand<number, 'op1_position'>;
export type Op2Position = Brand<number, 'op2_position'>;
export type ResultPosition = Brand<number, 'result_position'>;

export interface Instruction {
    readonly [0]: OpCode;
    readonly [1]: Op1Position;
    readonly [2]: Op2Position;
    readonly [3]: ResultPosition;
};

export const InstructionLength = 4;
