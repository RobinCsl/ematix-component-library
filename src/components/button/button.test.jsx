import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import Button from "./index";

describe("<Button />", () => {
  const component = shallow(<Button />);

  it("renders 1 button component", () => {
    expect(component).toHaveLength(1);
  });

  it("is of type button", () => {
    expect(component.type()).toBe("button");
  });

  it("has props", () => {
    expect(component.instance().props.darkBg).toBe(true);
    expect(component.instance().props.primary).toBe(true);
  });

  it("renders correctly", () => {
    const tree = renderer
      .create(<div>
        <div>
          <Button disabled>Primary</Button>
        </div>
        <div>
          <Button primary>Secondary</Button>
        </div>
              </div>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
