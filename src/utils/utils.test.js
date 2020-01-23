import { getCardsScore } from "./index";

const mockCards = [{ value: "KING" }, { value: 2 }];

it("should return 10 for picture card", () => {
  expect(getCardsScore([mockCards[0]])).toBe(10);
});

it("should return 12 for picture card and a deuce", () => {
  expect(getCardsScore(mockCards)).toBe(12);
});
