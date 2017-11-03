import React from "react";
import { storiesOf } from "@storybook/react";
import Codeblock from "./index";

import "./story.scss";

const example = `
  <div className="codeblock-example">
      <Codeblock language="htmlmixed" value={example} readOnly/>
  </div>
`;

storiesOf("Codeblock", module).add("Codeblock", () => (
  <div className="codeblock">
    <Codeblock language="htmlmixed" value={example} readOnly />
  </div>
));
