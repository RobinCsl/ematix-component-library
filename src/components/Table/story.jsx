import React from "react";
import { storiesOf } from "@storybook/react";
import { Map, Record } from "immutable";
import { action } from "@storybook/addon-actions";

import "./story.scss";

import Codeblock from "../codeblock";
import { Button } from "../index";

// components

import Table from "./Table";
import TableCell from "./TableCell";

// Enum
import Enum from "../../lib/enum";

const howToUse = `
    import {
      Table,
      TableRow,
      TableHeader,
      TableContent,
      TableHeader,
      TableCell
    } from "@ematix/ematix-component-library";
`;
const exampleCode = `
...
`;

const TestRecord = Record({
  id: null,
  name: null,
  status: 0,
});

const EnumStatus = new Enum({
  0: "Active",
  1: "Running",
  2: "Terminated",
});

const plainData = [
  {
    id: "uoaerht",
    name: "Barry Allen",
    status: 1,
  },
  {
    id: "314",
    name: "Harrisson Wells",
    status: 0,
  },
  {
    id: "werthw356",
    name: "Iris West",
    status: 2,
  },
];

const mapItem = item => [item.id, new TestRecord(item)];
const mappedData = new Map(plainData.map(mapItem));

storiesOf("Tables", module).add("Tables", () => (
  <div className="storybook-template">
    <h1 className="title">Tables</h1>
    <p className="description">Description of this cool component</p>
    <h2 className="sub-title">How To Use</h2>
    <div className="codeblock">
      <Codeblock language="javascript" value={howToUse} />
    </div>

    <h2 className="sub-title">UI Props</h2>
    {/* eslint-disable react/prop-types */}
    <Table
      data={mappedData}
      propsRow={{
        onClick: action("row click"),
      }}
      columns={[
        {
          key: "name",
          displayName: "Name",
        },
        {
          key: "status",
          displayName: "Status",
          Component: ({ data: { id, status } }) => (
            <TableCell onClick={action("click cell", id)}>
              {EnumStatus.getBy(status)}
            </TableCell>
          ),
        },
        {
          key: "action",
          displayName: "Status",
          Component: ({ data: { id } }) => (
            <TableCell>
              <Button onClick={action("click button", id)} primary>
                Action
              </Button>
            </TableCell>
          ),
        },
      ]}
    />

    <h2 className="sub-title">Code Example</h2>
    <div className="codeblock">
      <Codeblock language="htmlmixed" value={exampleCode} />
    </div>
  </div>
));
