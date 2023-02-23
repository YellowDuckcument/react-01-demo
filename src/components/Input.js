import { Component } from "react";

class Input extends Component {
  render() {
    const { id, inputRef, label, labelSize, required, frmFeild, errMessage, lastRow, ...others } = this.props;
    const labelClass = `col-sm-${labelSize ? labelSize : 3} col-form-label ${required ? "required" : ""}`;
    const inputClass = `form-control ${errMessage ? "is-invalid" : ""}`

    return (
      <div className={`row ${lastRow ? "" : "mb-3"}`}>
        <label htmlFor={id} className={labelClass}>
          {label}
        </label>
        <div className="col-sm">
          {others["rows"] > 1 ? (
            <textarea ref={inputRef} className={inputClass} id={id} {...frmFeild} {...others}></textarea>
          ) : (
            <input ref={inputRef} className={inputClass} id={id} {...frmFeild} {...others} />
          )}
          {errMessage && (<div className="invalid-feedback">PLease choose your name</div>)}
        </div>
      </div>
    );
  }
}

export default Input;
