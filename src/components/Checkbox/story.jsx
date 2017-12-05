import React from "react";
import { storiesOf } from "@storybook/react";
import Codeblock from "../codeblock";
import Toggle from "./Toggle";
import Checkbox from "./Checkbox";
import "./checkbox.scss";
import Radio from "./Radio";

const howToUse = `
    import { checkbox } from "@ematix/ematix-component-library";
`;
const exampleCode = `
    //toggle switch
    <div className="my-div-class">
        <input type="checkbox" className="tt" id="mm" />
        <label htmlFor="mm">
          <span />Active
        </label>
      </div>

    // check boxes
    <div className="my-div-class">
        <input type="checkbox" className="my-checkbox-class" />
        <label><span/> label </label>
    </div>

    // radio buttons<
    <div className="my-div-class">
        <input type="radio" className="my-checkbox-class" />
        <label><span/> label </label>
    </div>
`;

storiesOf("Form", module).add("Checkbox", () => (
  <div className="storybook-template">
    <h1 className="title">Check boxes</h1>
    <p className="description">Description of this cool component</p>
    <h2 className="sub-title">How To Use</h2>
    <div className="codeblock">
      <Codeblock language="javascript" value={howToUse} />
    </div>

    <Toggle />
    <Checkbox />
    <Radio />

    <h2 className="sub-title">Code Example</h2>
    <div className="codeblock">
      <Codeblock language="htmlmixed" value={exampleCode} />
    </div>
  </div>
));
