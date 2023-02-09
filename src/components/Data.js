import React, { useState, useEffect } from "react";

const DataRow = (props) => {
  const { dataCode, dataName, onClick, key } = props;

  return (
    <tr key={key}>
      <td>{dataCode}</td>
      <td>{dataName}</td>
      <td>
        <a href="/#" onClick={onClick} className="me-1">
          <i className="bi-pencil-square text-primary" />
        </a>
        <a href="/#">
          <i className="bi-trash text-danger" />
        </a>
      </td>
    </tr>
  );
};

export default DataRow;
