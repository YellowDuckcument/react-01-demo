// import React, { useState, useEffect } from 'react';

const CustomerButton = (props) => {
  const { color, className, ...other } = props;
  const classBtn = `btn btn-${color} ${className}`;

  return (
    <button type="button" className={classBtn} {...other}>
      {props.children}
    </button>
  );
};

export default CustomerButton;
