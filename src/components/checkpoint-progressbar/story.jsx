import React from "react";
import { storiesOf } from "@storybook/react";

import "./story.scss";

import Codeblock from "../codeblock";
import CheckpointProgress from "./index";

const howToUse = `
    import { CheckpointProgress } from "@ematix/ematix-component-library";
`;
const exampleCode = `
    <CheckpointProgress
        checkPoints={["Basic Information", "Address", "Billing"]}
        activePoint={0}
    />
`;
const exampleCodeSecond = `
    <CheckpointProgress
      checkPoints={["Basic Information", "Address", "Billing"]}
      activePoint={1}
    />
`;
const exampleCodeThird = `
    <CheckpointProgress
      checkPoints={["Basic Information", "Address", "Billing"]}
      activePoint={3}
    />
`;

storiesOf("Progress bar", module).add("Checkpoint", () => (
  <div className="storybook-template">
    <h1 className="storybook-title">Checkpoint Progress Bar</h1>
    <p className="description">Description of this cool component</p>
    <h2 className="storybook-sub-title">How To Use</h2>
    <div className="codeblock">
      <Codeblock language="javascript" value={howToUse} />
    </div>
    <h2 className="storybook-sub-title">Non-active state</h2>
    <div className="progress-container">
      <CheckpointProgress
        checkPoints={["Basic Information", "Address", "Billing"]}
        activePoint={0}
      />
    </div>
    <div className="codeblock">
      <Codeblock language="htmlmixed" value={exampleCode} />
    </div>

    <h2 className="storybook-sub-title">Active states</h2>
    <div className="example">
      <div className="progress-container">
        <CheckpointProgress
          checkPoints={["Basic Information", "Address", "Billing"]}
          activePoint={1}
        />
      </div>
      <div className="codeblock">
        <Codeblock language="htmlmixed" value={exampleCodeSecond} />
      </div>
    </div>
    <div className="example">
      <div className="progress-container">
        <CheckpointProgress
          checkPoints={["Basic Information", "Address", "Billing"]}
          activePoint={3}
        />
      </div>
      <div className="codeblock">
        <Codeblock language="htmlmixed" value={exampleCodeThird} />
      </div>
    </div>
  </div>
));
