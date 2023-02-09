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
                {/* {majors.maps((aMajor, id) => (
                  <DataRow dataCode={id+1} dataName={aMajor.name} key={aMajor.id} onClick={(e) => showEditPage(e, `${id+1}`)} />
                ))} */}
                {/* {majorService.maps((aMjor, idx) => (
                  <tr key={aMjor.id}>
                  <td>{idx + 1}</td>
                  <td>{aMjor.name}</td>
                  <td>
                    <a href="/#" onClick={(e) => showEditPage(e, `${idx + 1}`)} className="me-1">
                      <i className="bi-pencil-square text-primary" />
                    </a>
                    <a href="/#">
                      <i className="bi-trash text-danger" />
                    </a>
                  </td>
                </tr>
                ))} */}
                <DataRow dataCode='1' dataName='iT' onClick={(e) => showEditPage(e, 1)} />
                <DataRow dataCode='2' dataName='Marketing' onClick={(e) => showEditPage(e, 2)} />
                <DataRow dataCode='3' dataName='Network' onClick={(e) => showEditPage(e, 3)} />
                <DataRow dataCode='4' dataName='Account' onClick={(e) => showEditPage(e, 4)} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Major;
