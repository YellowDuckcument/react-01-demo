import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../components/Input";
const MajorEdit = () => {
  const [major, setMajor] = useState({ id: 0, code: "", name: "" });
  const { id } = useParams();

  const navigate = useNavigate();
  useEffect(() => {
    if (!/\d+/.test(id)) {
      navigate("/not-found");
    }
  }, [id, navigate]);

  const backHandler = (e) => {
    navigate("/major");
  };

  const changeEventHandler = (e) => {
    let newMajor = { ...major };
    newMajor[e.target.name] = e.target.value;
    setMajor(newMajor);
  };

  const saveHandler = () => {
    console.log(major);
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
                    Major <small className="text-muted">{Number(id) === 0 ? "new" : "update"}</small>
                  </h3>
                </div>
              </div>
            </div>
            <div className="card-body">
              <Input
                label="Major code"
                onChange={changeEventHandler}
                defaultValue={major.code}
                name="code"
                id="txtCode"
                required
              />
              <Input
                label="Major name"
                onChange={changeEventHandler}
                defaultValue={major.name}
                name="name"
                id="txtMajor"
                required
                lastRow
              />
            </div>
            <div className="card-footer text-center">
              <button type="button" onClick={backHandler} className="btn btn-secondary me-1">
                Back
              </button>
              <button type="button" onClick={saveHandler} className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MajorEdit;
