import { useEffect, useState } from "react";

const Input = (props) => {
        const {id, inputRef, label,labelSize,...other} = props;
        const labelClass= `col-sm-${labelSize ? labelSize:3} col-form-label`;
        return (
            <div className="row mb-3">
              <label htmlFor={id} className={labelClass}>{label}</label>
              <div className="col-sm">
                {
                    other["row"] > 1 ? (<textarea ref={inputRef} className="form-control" id={id} {...other}></textarea>) : 
                    (<input ref={inputRef} className="form-control" id={id} {...other}/>)
                }
              </div>
            </div>
        );
}
 
export default Input;