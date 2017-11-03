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
    <div className="title">Buttons</div>
    <div className="description">Description of this cool component</div>
    <div className="sub-title">How To Use</div>
    <div className="codeblock">
      <Codeblock language="javascript" value={howToUse} />
    </div>
    <div className="sub-title">Common Buttons</div>
    <div className="button-row">
      <div className="button">
        <Button primary onClick={action("clicked")}>
          Button
        </Button>
      </div>
      <div className="buttons">
        <Button disabled>Button</Button>
      </div>
    </div>
    <div className="sub-title">Code Example</div>
    <div className="codeblock">
      <Codeblock language="htmlmixed" value={exampleCode} />
    </div>
  </div>
));
