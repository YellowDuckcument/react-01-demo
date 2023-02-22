import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/CustomButton";
import Input from "../components/Input";
import majorService from "../service/majorsService";

const defaultMajor = { id: 0, code: "", name: "" };

const MajorEdit = () => {
  const { id } = useParams();
  const [major, setMajor] = useState(defaultMajor);
  const [message, setMessage] = useState("");

  const param = useParams();
  useEffect(() => {
    if (param.id > 0) {
      majorService.get(param.id).then((res) => {
        setMajor(res.data);
      });
    }
  }, [param.id]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!/\d+/.test(id)) {
      navigate("/not-found");
    } else {
      if (id > 0) {
        majorService.get(id).then((res) => setMajor(res.data));
      } else {
        setMajor(defaultMajor);
      }
    }
  }, [id, navigate]);

  const changeEventHandler = (e) => {
    let newMajor = { ...major };
    newMajor[e.target.name] = e.target.value;
    setMajor(newMajor);
  };

  const backHandler = (e) => {
    navigate("/majors");
  };

  const saveHandler = () => {
    if (major.id === 0) {
      majorService.add(major).then((res) => {
        if (res.errorCode === 0) navigate("/majors");
        else setMessage(res.message);
      });
    } else {
      majorService.update(major.id, major).then((res) => {
        if (res.errorCode === 0) navigate("/majors");
        else setMessage(res.message);
      });
    }
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card border-primary bt-5">
            <div className="card-header">
              <div className="row">
                <div className="col">
                  <h3 className="card-title">
                    Major{" "}
                    <small className="text-muted">
                      {Number(id) === 0 ? "new" : "update"}
                    </small>
                  </h3>
                </div>
              </div>
            </div>
            <div className="card-body">
              <p className="text-center text-danger">{message}</p>
              <form>
                <Input
                  label="Major name"
                  onChange={changeEventHandler}
                  defaultValue={major.name}
                  name="name"
                  id="txtMajor"
                  required
                  lastRow
                />
              </form>
            </div>
            <div className="card-footer text-center">
              <Button color="secondary" className="me-1" onClick={backHandler}>
                {" "}
                Back{" "}
              </Button>
              <Button color="primary" className="me-1" onClick={saveHandler}>
                {" "}
                Save{" "}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MajorEdit;
