import { Component } from "react";

class Input extends Component {
  render() {
    const { id, inputRef, label, labelSize, required, lastRow, ...others } = this.props;
    const labelClass = `col-sm-${labelSize ? labelSize : 3} col-form-label ${required ? "required" : ""}`;
    return (
      <div className={`row ${lastRow ? "" : "mb-3"}`}>
        <label htmlFor={id} className={labelClass}>
          {label}
        </label>
        <div className="col-sm">
          {others["rows"] > 1 ? (
            <textarea ref={inputRef} className="form-control" id={id} {...others}></textarea>
          ) : (
            <input ref={inputRef} className="form-control" id={id} {...others} />
          )}
        </div>
      </div>
    );
  }
}

export default Input;
