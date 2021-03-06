/* eslint-disable */

import React from "react";
import renderer from "react-test-renderer";

import Button from "./index";

describe("<Button />", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <div>
          <div>
            <Button disabled>Primary</Button>
          </div>
          <div>
            <Button primary>Secondary</Button>
          </div>
          <div>
            <Button href="#test">Test a link with href param</Button>
          </div>
        </div>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
