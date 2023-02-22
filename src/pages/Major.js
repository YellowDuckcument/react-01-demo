import React, { useState, useEffect, useRef } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import CustomerButton from "../components/CustomButton";
import DataRowMajors from "../components/DataRowMajors";
import Input from "../components/Input";
import majorService from "../service/majorsService";

const defaultMajor = { id: 0, code: "", name: "" };

const Major = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalShowDelete, setModalShowDelete] = useState(false);

  const handleDeleteClose = () => {
    setModalShowDelete(false);
  };

  // Xử lý xóa modal

  const [dataDelete, setDataDelete] = useState([]);

  const handleDeleteShow = (e, id) => {
    e.preventDefault();
    setModalShowDelete(true);
    majorService.get(id).then((res) => {
      setMajor(res.data);
    });
    setDataDelete([e, id]);
  };

  const handleModalClose = () => {
    setModalShow(false);
  };

  const [major, setMajor] = useState(defaultMajor);
  const [majors, setMajors] = useState([]);

  const handleModalShow = (e, id) => {
    if (e) e.preventDefault();

    if (id > 0) {
      majorService.get(id).then((res) => {
        setMajor(res.data);
        setModalShow(true);
      });
    } else {
      setMajor(defaultMajor);
      setModalShow(true);
    }
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    majorService.delete(id).then((res) => {
      if (res.errorCode === 0) {
        loadData();
        toast.warn("This successfully deleted");
      } else {
        toast.error(res.message);
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

  const saveHandler = (e) => {
    if (major.id === 0) {
      majorService.add(major).then((res) => {
        if (res.errorCode === 0) {
          loadData();
          setModalShow(false);
          toast.success("Add data successfully");
        } else toast.error(res.message);
      });
    } else {
      majorService.update(major.id, major).then((res) => {
        if (res.errorCode === 0) {
          loadData();
          setModalShow(false);
          toast.success("Add data successfully");
        } else toast.error(res.message);
      });
    }
  };

  // const [showModal, setShowModal] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (modalShow && inputRef.current) {
      inputRef.current.focus();
    }
  }, [modalShow]);



  return (
    <>
      <Modal
        show={modalShow}
        onHide={handleModalClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Major{" "}
            <small className="text-muted">
              {Number(major.id) === 0 ? "new" : "update"}
            </small>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <p className="text-center text-danger">{message}</p> */}
          {/* <Form> */}
            {/* <Form.Control ref={inputRef} /> */}
            <Input
              autocomplete="off"
              inputRef={inputRef}
              label="Major name"
              onChange={changeEventHandler}
              defaultValue={major.name}
              name="name"
              id="my-Input"
              required
              lastRow
            />
          {/* </Form> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveHandler}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Hỏi trước khi xoa */}
      <Modal
        show={modalShowDelete}
        onHide={handleDeleteClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Thông Báo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Bạn sẽ xóa trường này ?? <br />
          <p className="text-danger fw-bold">name = {major.name}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteClose}>
            No
          </Button>
          <Button
            variant="primary"
            onClick={(e) => handleDelete(...dataDelete)}
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>

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
                <CustomerButton color="primary" onClick={handleModalShow}>
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
                  {majors.map((major, id) => (
                    <DataRowMajors
                      key={major.id}
                      dataCode={id + 1}
                      dataName={major.name}
                      onClickEdit={(e) => handleModalShow(e, major.id)}
                      onClickDelete={(e) => handleDeleteShow(e, major.id)}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Major;
