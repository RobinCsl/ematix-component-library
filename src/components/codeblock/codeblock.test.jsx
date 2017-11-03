import React from "react";
import { shallow } from "enzyme";
import Codeblock from "./index";

describe("<Codeblock />", () => {
  const component = shallow(<Codeblock language="htmlmixed" value="<html></html>" />);
  it("renders 1 component", () => {
    expect(component).toHaveLength(1);
  });

  it("has language set", () => {
    expect(component.instance().props.language).toBe("htmlmixed");
  });

  it("renders a div", () => {
    expect(component.type()).toBe("div");
  });
});
