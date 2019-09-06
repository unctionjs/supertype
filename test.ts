
import supertype from "./index";

test("works", () => {
  expect(supertype("a")).toEqual("Object");
});

test("works", () => {
  class Assistant extends class Job {} {}

  expect(supertype(new Assistant())).toEqual("Job");
});
