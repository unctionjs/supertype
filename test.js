/* eslint-disable flowtype/require-return-type */
import {test} from "tap"

import supertype from "./index"

test(({same, end}) => {
  same(
    supertype("a"),
    "Object"
  )

  end()
})

test(({same, end}) => {
  class Assistant extends class Job {} {}

  same(
    supertype(new Assistant()),
    "Job"
  )

  end()
})
