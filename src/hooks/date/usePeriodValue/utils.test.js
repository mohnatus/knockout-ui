import { convertPeriodToText } from "./utils";

const day1 = new Date("2022-05-20");
const day2 = new Date("2022-05-22");

describe("convertPeriodToText", () => {
  test("нормальный период", () => {
    const text = convertPeriodToText([+day1, +day2]);
    expect(text).toBe("20.05.2022-22.05.2022");
  });
  test("пустой период", () => {
    const text = convertPeriodToText([null, null]);
    expect(text).toBe("");
  });
  test("только from", () => {
    const text = convertPeriodToText([+day1, null]);
    expect(text).toBe("20.05.2022");
  });
  test("from = to", () => {
    const text = convertPeriodToText([+day1, +day1]);
    expect(text).toBe("20.05.2022");
  });
});
