import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Major = () => {
  const navigate = useNavigate();

  const showEditPage = (e, id) => {
    if (e) e.preventDefault();
    navigate(`/major/${id}`);
  };

  return (
    <div className="container mt-4">
      <div className="card border-primary bt-5">
        <div className="card-header">
          <div className="row">
            <div className="col">
              <h3 className="card-title">
                Major <small className="text-muted">list</small>
              </h3>
            </div>
            <div className="col-auto">
              <button type="button" onClick={() => showEditPage(null, 0)} className="btn btn-primary">
                <i className="bi-plus-lg" /> Add
              </button>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered border-primary table-hover table-striped">
              <thead>
                <tr className="table-primary border-primary">
                  <th style={{ width: 50 }}>#</th>
                  <th>Major Name</th>
                  <th style={{ width: 80 }} />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>IT</td>
                  <td>
                    <a href="/#" onClick={(e) => showEditPage(e, 1)} className="me-1">
                      <i className="bi-pencil-square text-primary" />
                    </a>
                    <a href="/#">
                      <i className="bi-trash text-danger" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Marketing</td>
                  <td>
                    <a href="/#" onClick={(e) => showEditPage(e, 2)} className="me-1">
                      <i className="bi-pencil-square text-primary" />
                    </a>
                    <a href="/#">
                      <i className="bi-trash text-danger" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Network</td>
                  <td>
                    <a href="/#" onClick={(e) => showEditPage(e, 3)} className="me-1">
                      <i className="bi-pencil-square text-primary" />
                    </a>
                    <a href="/#">
                      <i className="bi-trash text-danger" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Accounting</td>
                  <td>
                    <a href="/#" onClick={(e) => showEditPage(e, 4)} className="me-1">
                      <i className="bi-pencil-square text-primary" />
                    </a>
                    <a href="/#">
                      <i className="bi-trash text-danger" />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Major;
