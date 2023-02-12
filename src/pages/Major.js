import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import CustomerButton from "../components/CustomButton";
import DataRow from "../components/DataMajor";
import Input from "../components/Input";
import majorService from "../service/majorsService";

const defaultMajor = { id: 0, code: "", name: "" };

const Major = () => {
  const [majors, setMajors] = useState([]);
  const [modalShow, setmodalShow] = useState(false);
  // const { id } = useParams();
  const [major, setMajor] = useState(defaultMajor);
  const [message, setMessage] = useState("");

  const handleModalClose = () => setmodalShow(false);

  const showEditModal = (e, id) => {
    if (e) e.preventDefault();
    setmodalShow(true);
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

  const changeEventHandler = (e) => {
    let newMajor = { ...major };
    newMajor[e.target.name] = e.target.value;
    setMajor(newMajor);
  };


  return (
    <>
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
                <CustomerButton
                  color="primary"
                  onClick={() => showEditModal(null, 0)}
                >
                  <i className="bi-plus-lg" /> Add
                </CustomerButton>
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
                    <DataRow
                      dataCode={id + 1}
                      dataName={aMajor.name}
                      key={aMajor.id}
                      onClickEdit={(e) => showEditModal(e, aMajor.id)}
                      onClickDelete={(e) => handleDelete(e, aMajor.id)}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Modal show={modalShow} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input
            label="Major name"
            onChange={changeEventHandler}
            defaultValue={major.name}
            name="name"
            id="txtMajor"
            required
            lastRow
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleModalClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Major;
