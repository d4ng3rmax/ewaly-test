import React, { useState, Animated } from 'react';
import { Badge, Table } from 'reactstrap';
import Moment from 'react-moment';

function formatTime(time, prefix = "") {
  console.log(typeof time)
  return typeof time == "object" ? prefix + time.toLocaleDateString() : "";
}

export default function DataTable({ data }) {

  const [height, setHeight] = useState(0)
  const [display, setDisplay] = useState("none")

  return (
    <Table hover bordered striped responsive size="sm">
      <thead>
        <tr>
          <th>Data</th>
          <th>Ação</th>
          <th>Valor</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map(row => (
          <tr key={row.id}>
            <td>
              <Moment format="DD/MM/YYYY">
                {row.createdAt}
              </Moment>
            </td>
            <td>{row.operationType}</td>
            <td>{row.amount}</td>
            <td>
              <Badge color="success">ok</Badge>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

