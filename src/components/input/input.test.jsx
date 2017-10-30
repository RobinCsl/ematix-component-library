import React from "react";
import renderer from "react-test-renderer";

import Input from "./index";

it("renders correctly", () => {
  const tree = renderer
    .create(<div><Input /></div>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
