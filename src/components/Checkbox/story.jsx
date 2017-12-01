import React from "react";
import { storiesOf } from "@storybook/react";
import IconDone from "material-ui-icons/Done";
import "./story.scss";
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
    <p>
      <input type="radio" id="r1" name="rr" />
      <label htmlFor="r1">
        <span /> Radio Button 1
      </label>
    </p>
    <p>
      <input type="radio" id="r2" name="rr" />
      <label htmlFor="r2">
        Radio Button 2
        <span />
      </label>
    </p>

    <h2 className="sub-title">Code Example</h2>
    <div className="codeblock">
      <Codeblock language="htmlmixed" value={exampleCode} />
    </div>
  </div>
));
