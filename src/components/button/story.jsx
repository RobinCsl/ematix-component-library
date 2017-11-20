import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "./index";

import "./story.scss";

import Codeblock from "../codeblock";

const howToUse = `
    import { Button } from "@ematix/ematix-component-library";
`;
const exampleCode = `
    <div class="my-div-class">
        <Button primary>Button</Button>
    </div>
`;

storiesOf("Buttons", module).add("Buttons", () => (
  <div className="storybook-template">
    <h1 className="title">Buttons</h1>
    <p className="description">Description of this cool component</p>
    <h2 className="sub-title">How To Use</h2>
    <div className="codeblock">
      <Codeblock language="javascript" value={howToUse} />
    </div>
    <h2 className="sub-title">Common Buttons</h2>
    <div className="button-row">
      <div className="button">
        <Button primary onClick={action("clicked")}>
          Button
        </Button>
      </div>
      <div className="buttons">
        <Button disabled>Button</Button>
      </div>
      <div className="buttons">
        <Button success>Button</Button>
      </div>
    </div>
    <h2 className="sub-title">Code Example</h2>
    <div className="codeblock">
      <Codeblock language="htmlmixed" value={exampleCode} />
    </div>
  </div>
));
