configure(loadStories, module);

import React from "react";
import { configure, addDecorator } from "@storybook/react";
const stories = require.context("../src/components", true, /story.jsx$/);

import "./storybook.scss";
import logo from "./images/ematix-logo.svg";

addDecorator(story => (
  <div className="storybook">
    <div className="storybook-header">
      <div className="storybook-header-info">
        <div className="storybook-header-info-title">
          <img src={logo} className="storybook-header-info-logo" />
          <span className="storybook-header-info-name">
            <span className="storybook-header-info-name">ematix</span>
          </span>
        </div>
        <div className="storybook-header-info-section">/component library</div>
      </div>
    </div>
    <div className="storybook-body">{story()}</div>
  </div>
));

function loadStories() {
  // Write stories inside each component directory and name them `story.js`
  stories.keys().forEach(filename => stories(filename));
}

configure(loadStories, module);
