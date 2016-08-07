import { expect } from "chai";
import transpose from "../src/transpose";

describe("transpose", () => {
  it("should rotate a matrix", () => {
    const matrix = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ];
    const transposedArray = transpose(matrix);
    expect(transposedArray).to.deep.equal([ [ 1, 4, 7 ], [ 2, 5, 8 ], [ 3, 6, 9 ] ]);
  });

    it("return an empty matrix when nothing is passed in", () => {
    expect(transpose(undefined)).to.deep.equal([]);
  });
 });