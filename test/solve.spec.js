import { expect } from "chai";
import { solve, getWinner, getWinnerForRows } from "../src/solve";

describe("solve", () => {
 
  it("should show x as the winner in the first row", () => {
    const board = [
      ["x", "x", "x"],
      [null, null, null],
      [null, null, null]
    ];

    const winner = solve(board);
    expect(winner).to.equal("x");
  });

  it("should show o as the winner in the second row", () => {
    const board = [
      [null, null, null],
      ["o", "o", "o"],
      [null, null, null]
    ];

    const winner = solve(board);
    expect(winner).to.equal("o");
  });

  it("should show x as the winner in the first column", () => {
    const board = [
      ["x", null, null],
      ["x", null, null],
      ["x", null, null]
    ];

    const winner = solve(board);
    expect(winner).to.equal("x");
  });

  it("should show x as the winner in the backslash set", () => {
    const board = [
      ["x", null, null],
      [null, "x", null],
      [null, null, "x"]
    ];

    const winner = solve(board);
    expect(winner).to.equal("x");
  });

  it("should show x as the winner in the forwardslash set", () => {
    const board = [
      [null, null, "x"],
      [null, "x", null],
      ["x", null, null]
    ];

    const winner = solve(board);
    expect(winner).to.equal("x");
  });

  it("should show not show any winner for a full board", () => {
    const board = [
      ["x", "o", "x"],
      ["o", "o", "x"],
      ["x", "x", "o"]
    ];

    const winner = solve(board);
    expect(winner).to.equal(null);
  });
});

describe("getWinner", () => {
  it("should match a set of x player as a winner", () => {
    const winner = getWinner(["x", "x", "x"]);
    expect(winner).to.equal("x");
  });

  it("should not show a winner for mismatched players", () => {
    const winner = getWinner(["x", "o", "x"]);
    expect(winner).to.equal(null);
  });

  it("should not show a winner for unplayed position", () => {
    const winner = getWinner(["x", null, "x"]);
    expect(winner).to.equal(null);
  });
});

describe("getWinnerForRows", () => {
  it("should show x as the winner in the first row", () => {
    const board = [
      ["x", "x", "x"],
      [null, null, null],
      [null, null, null]
    ];

    const winner = getWinnerForRows(board);
    expect(winner).to.equal("x");
  });

  it("should show o as the winner in the second row", () => {
    const board = [
      [null, null, null],
      ["o", "o", "o"],
      [null, null, null]
    ];

    const winner = getWinnerForRows(board);
    expect(winner).to.equal("o");
  });

   it("should show not show any winner for a full board", () => {
    const board = [
      ["x", "o", "x"],
      ["o", "o", "x"],
      ["x", "x", "o"]
    ];

    const winner = getWinnerForRows(board);
    expect(winner).to.equal(null);
  });
});