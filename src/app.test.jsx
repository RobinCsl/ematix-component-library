import React from "react";
import renderer from "react-test-renderer";

import App from "./app";

it("renders correctly", () => {
  const tree = renderer
    .create(<div><App /></div>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
