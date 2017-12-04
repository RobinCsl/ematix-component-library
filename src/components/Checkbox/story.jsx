import React from "react";
import { storiesOf } from "@storybook/react";
import IconDone from "material-ui-icons/Done";
import "./story.scss";
import "./icon.scss";
import Codeblock from "../codeblock";

const howToUse = `
    import {  } from "@ematix/ematix-component-library";
`;
const exampleCode = `

    // check boxes
    <div>
      <form>
        <input type="checkbox" name="male" />
        <input type="checkbox" value="female" />
      </form>
    </div>

    // radio buttons
<form>
  <input type="radio" name="gender" value="male" checked> Male</input>
  <input type="radio" name="gender" value="female"> Female</input>
</form>
`;

storiesOf("Form", module).add("Checkbox", () => (
  <div className="storybook-template">
    <h1 className="title">Checkbox</h1>
    <p className="description">Description of this cool component</p>
    <h2 className="sub-title">How To Use</h2>
    <div className="codeblock">
      <Codeblock language="javascript" value={howToUse} />
    </div>
    <div className="material-icons">
      <p>
        <h3>Material icons </h3>
        <input type="checkbox" className="ios8-switch" id="mm" />
        <label htmlFor="mm">
          <span />Active
        </label>
      </p>
    </div>

    <h3> CheckBoxes </h3>
    <p>
      <input type="checkbox" id="c1" name="cc" />

      <label htmlFor="c1">
        <span>
          <IconDone />
        </span>Checked CheckBox
      </label>
    </p>
    <p>
      <input type="checkbox" id="c2" name="cc" />
      <label htmlFor="c2">
        <span>
          <IconDone />
        </span>Unchecked CheckBox
      </label>
    </p>

    <h3> Radio Buttons </h3>
    <p>
      <input type="radio" id="r1" name="rr" />
      <label htmlFor="r1">
        <span /> Radio Button 1
      </label>
    </p>
    <p>
      <input type="radio" id="r2" name="rr" />
      <label htmlFor="r2">
        <span />
        Radio Button 2
      </label>
    </p>

    <h2 className="sub-title">Code Example</h2>
    <div className="codeblock">
      <Codeblock language="htmlmixed" value={exampleCode} />
    </div>
  </div>
));
