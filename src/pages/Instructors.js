import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/CustomButton";
import DataRowIns from "../components/DataInstructor";
import instructorService from "../service/instructorService";

const Instructors = () => {
  const navigate = useNavigate();
  const [instructor, setInstructor] = useState([]);

  const showEditPage = (e, id) => {
    if (e) e.preventDefault();
    navigate(`/instructors/${id}`);
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    instructorService.delete(id).then((res) => {
      if (res.errorCode === 0) {
        loadData();
      }
    });
  };

  const loadData = () => {
    instructorService.list().then((res) => setInstructor(res.data));
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
                Instructor <small className="text-muted">list</small>
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
                <tr className="table-primary border-primary text-center">
                  <th style={{ width: 50 }}>#</th>
                  <th style={{ width: "15%" }}>Instructor Id</th>
                  <th style={{ width: "25%" }}>Full Name</th>
                  <th style={{ width: "8%" }}>Gender</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th style={{ width: 80 }} />
                </tr>
              </thead>
              <tbody>
                {instructor.map((aInstructor, id) => (
                  <DataRowIns
                    key={aInstructor.id}
                    dataCode={id + 1}
                    insId = {
                      aInstructor.Instructor_id
                    }
                    fullName={
                      aInstructor.Full_name
                    }
                    gender={aInstructor.gender}
                    phone={aInstructor.Phone}
                    email={aInstructor.Email}
                    onClickEdit={(e) => showEditPage(e, aInstructor.id)}
                    onClickDelete={(e) => handleDelete(e, aInstructor.id)}
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

export default Instructors;
