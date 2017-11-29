import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import IconArrowForward from "material-ui-icons/ArrowForward";
import Button from "./index";

import "./story.scss";

import Codeblock from "../codeblock";

const howToUse = `
    import { Button } from "@ematix/ematix-component-library";
`;
const exampleCode = `
    // Regular primary button
    <div class="my-div-class">
      <Button primary>Button</Button>
    </div>

    // Link
    <div class="my-div-class">
      <Button href="#link" lg>Button</Button>
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
    <h2 className="sub-title">UI Props</h2>
    <p>primary, warning, error, success</p>
    <h2 className="sub-title">Size Props</h2>
    <p>xs, lg</p>
    <h2 className="sub-title">As Link</h2>
    <p>to, href</p>
    <h2 className="sub-title">Common Buttons</h2>
    <h3>xs</h3>
    <div className="button-row">
      <Button bl xs>
        button
      </Button>
      <Button xs>Button</Button>
      <Button disabled xs>
        Button
      </Button>
      <Button primary xs>
        Button
      </Button>
      <Button success xs>
        very long texted button
      </Button>
      <Button error xs>
        button
      </Button>
    </div>
    <h3>No size defined</h3>
    <div className="button-row">
      <Button onClick={action("button-click")}>Button</Button>
      <Button onClick={action("button-click")} disabled>
        Button
      </Button>
      <Button onClick={action("button-click")} primary>
        Button
      </Button>
      <Button onClick={action("button-click")} success>
        Button
      </Button>
      <Button error>button</Button>
    </div>
    <h3>Lg</h3>

    <div className="button-row">
      <Button lg>Button</Button>
      <Button disabled lg>
        Button
      </Button>
      <Button primary lg>
        Button
      </Button>
      <Button success lg>
        Button
      </Button>
      <Button error lg>
        button
      </Button>
    </div>
    <h3>Buttons with icons </h3>
    <div className="button-row">
      <Button disabled lg>
        Button
        <IconArrowForward />
      </Button>
      <Button primary lg>
        Button
        <IconArrowForward />
      </Button>
      <Button success lg>
        Button
        <IconArrowForward />
      </Button>
      <Button error lg>
        Button
        <IconArrowForward />
      </Button>
    </div>

    <h2 className="sub-title">Code Example</h2>
    <div className="codeblock">
      <Codeblock language="htmlmixed" value={exampleCode} />
    </div>
  </div>
));
