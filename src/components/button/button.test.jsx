import React from "react";
import renderer from "react-test-renderer";

import Button from "./index";

it("renders correctly", () => {
  const tree = renderer
    .create(<div><Button /></div>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
