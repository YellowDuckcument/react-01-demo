import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/CustomButton";
import DataRowMajors from "../components/DataRowMajors";
import majorService from "../service/majorsService";

const Major = () => {

  const navigate = useNavigate();
  const [majors, setMajors] = useState([]);

  const showEditPage = (e, id) => {
    if (e) e.preventDefault();
    navigate(`/majors/${id}`);
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    majorService.delete(id).then((res) => {
      if (res.errorCode === 0) {
        loadData();
      }
    }); 
  };

  const loadData = () => {
    majorService.list().then((res) => setMajors(res.data));
  };

  useEffect(() => {
    loadData();
  }, []);

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
              {majors.map((major, id) => (
                  <DataRowMajors
                    key={major.id}
                    dataCode={id + 1}
                    dataName = {major.name}
                    onClickEdit={(e) => showEditPage(e, major.id)}
                    onClickDelete={(e) => handleDelete(e, major.id)}
                  />
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
