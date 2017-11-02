import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "./index";

storiesOf("Button", module)
  .add("no text", () => <Button onClick={action("clicked")} text="" />)
  .add("with text", () => (
    <Button onClick={action("clicked")} text="Click Me!" />
  ));
