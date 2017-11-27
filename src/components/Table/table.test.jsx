/* eslint-disable */

import React from "react";
import renderer from "react-test-renderer";
import { action } from "@storybook/addon-actions";

import classnames from "classnames";
import { Map, Record } from "immutable";

import "./table.scss";

import Table from "./Table";
import TableCell from "./TableCell";
import Button from "../Button";

// Enum
import Enum from "../../lib/enum";

const TestRecord = Record({
  id: null,
  name: null,
  status: 0
});

const EnumStatus = new Enum({
  0: "Active",
  1: "Running",
  2: "Terminated"
});

const plainData = [
  {
    id: "uoaerht",
    name: "Barry Allen",
    status: 1
  },
  {
    id: "314",
    name: "Harrisson Wells",
    status: 0
  },
  {
    id: "werthw356",
    name: "Iris West",
    status: 2
  }
];

const mapItem = item => [item.id, new TestRecord(item)];
const mappedData = new Map(plainData.map(mapItem));

const ActionCell = ({ data: { id } }) => (
  <TableCell>
    <Button onClick={action("click button", id)} primary>
      Action
    </Button>
  </TableCell>
);

describe("<Button />", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <div>
          <Table
            data={mappedData}
            propsRow={{
              onClick: action("row click")
            }}
            columns={[
              {
                key: "name",
                displayName: "Name"
              },
              {
                key: "status",
                displayName: "Status",
                Component: ({ data: { id, status } }) => (
                  <TableCell onClick={action("click cell", id)}>
                    {EnumStatus.getBy(status)}
                  </TableCell>
                )
              },
              {
                key: "action",
                displayName: "Status",
                Component: ActionCell
              }
            ]}
          />
        </div>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
