
import supertype from "./index";

test(() => {
  expect(supertype("a")).toEqual("Object");
});

test(() => {
  class Assistant extends class Job {} {}

  expect(supertype(new Assistant())).toEqual("Job");
});
