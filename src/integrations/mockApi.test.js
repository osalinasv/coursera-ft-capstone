import { fetchAPI, submitAPI } from "./mockApi";

describe("mockApi", () => {
  describe("fetchAPI", () => {
    it("should return time options for date", () => {
      const options = fetchAPI(new Date("2024-01-01"));
      expect(options).not.toBeNull();
      expect(options.length).toBeGreaterThanOrEqual(1);
    });

    it("should return options consistently for same date", () => {
      const date = new Date("2024-01-01");
      const options1 = fetchAPI(date);
      const options2 = fetchAPI(date);

      expect(options1).toEqual(options2);
    });
  });

  describe("submitAPI", () => {
    it("should return true", () => {
      expect(submitAPI()).toBeTruthy();
    });
  });
});
