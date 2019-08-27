
import {test} from "tap";

import supertype from "./";

test(({same, end}) => {
  same(
    supertype("a"),
    "Object"
  );

  end();
});

test(({same, end}) => {
  class Assistant extends class Job {} {}

  same(
    supertype(new Assistant()),
    "Job"
  );

  end();
});
