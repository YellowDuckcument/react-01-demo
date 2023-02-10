import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/CustomButton";
import DataRow from "../components/Data";
import majorService from "../service/majorsService";

const Major = () => {
  const [majors, setMajors] = useState([]);
  const navigate = useNavigate();

  const showEditPage = (e, id) => {
    if (e) e.preventDefault();
    navigate(`/major/${id}`);
  };

  useEffect(() => {
    majorService.list().then(res => setMajors(res.data))
  }, [])

  console.log(majors)
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
              <Button color="primary" onClick={() => showEditPage(null, 0)}>
                <i className="bi-plus-lg" /> Add
              </Button>
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
                {majors.map((aMajor, id) => (
                  <DataRow dataCode={id+1} dataName={aMajor.name} key={aMajor.id} onClick={(e) => showEditPage(e, `${id + 1}`)}  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Major;
