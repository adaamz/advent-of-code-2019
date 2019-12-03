import {Computer} from "../src/Computer";
import {makeProgramFromList} from "../src/@types/Program";
import {makeExecutedProgramFromList} from "../src/@types/ExecutedProgram";

describe('single operations', () => {
    it('example #1', () => {
        const result = new Computer().executeProgram(makeProgramFromList([1, 0, 0, 0, 99]));
        expect(result).toEqual(makeExecutedProgramFromList([2, 0, 0, 0, 99]));
    });

    it('example #2', () => {
        const result = new Computer().executeProgram(makeProgramFromList([2, 3, 0, 3, 99]));
        expect(result).toEqual(makeExecutedProgramFromList([2, 3, 0, 6, 99]));
    });

    it('example #3', () => {
        const result = new Computer().executeProgram(makeProgramFromList([2, 4, 4, 5, 99, 0]));
        expect(result).toEqual(makeExecutedProgramFromList([2, 4, 4, 5, 99, 9801]));
    });

    it('example #4', () => {
        const result = new Computer().executeProgram(makeProgramFromList([1, 1, 1, 4, 99, 5, 6, 0, 99]));
        expect(result).toEqual(makeExecutedProgramFromList([30, 1, 1, 4, 2, 5, 6, 0, 99]));
    });
});

describe('restore gravity assist program', () => {
    it('example #4', () => {
        const result = new Computer().restoreGravityAssistProgram(makeProgramFromList([
            1, 0, 0, 0,
            99, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, 0,
        ]));
        expect(result).toEqual(makeExecutedProgramFromList([
            2, 12, 2, 0,
            99, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, 0,
        ]));
    });
});
