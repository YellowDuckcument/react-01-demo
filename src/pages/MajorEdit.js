import React, { useState, useEffect } from 'react';
const MajorEdit = () => {
    return ( <div>
        <div className="container mt-4">
            <div className='row justify-content-center'>
                <div className=''>
                <div className="card-header">
                <div className="row">
                <div className="col">
                    <h3 className="card-title">Major <small className="text-muted">list</small></h3>
                </div>
                <div className="col-auto">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModal"><i className="bi-plus-lg" /> Add</button>
                </div>
                </div>
      </div>
                </div>
            </div>
    <div className="card border-primary bt-5">
      
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-bordered border-primary table-hover table-striped">
            <thead>
              <tr className="table-primary border-primary">
                <th style={{width: 50}}>#</th>
                <th>Major Name</th>
                <th style={{width: 80}} />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>IT</td>
                <td>
                  <a href="/#"><i className="bi-pencil-square text-primary" /></a>
                  <a href="/#"><i className="bi-trash text-danger" /></a>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Marketing</td>
                <td>
                  <a href="/#"><i className="bi-pencil-square text-primary" /></a>
                  <a href="/#"><i className="bi-trash text-danger" /></a>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Network</td>
                <td>
                  <a href="/#"><i className="bi-pencil-square text-primary" /></a>
                  <a href="/#"><i className="bi-trash text-danger" /></a>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Accounting</td>
                <td>
                  <a href="/#"><i className="bi-pencil-square text-primary" /></a>
                  <a href="/#"><i className="bi-trash text-danger" /></a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
 {/*  Modal */}
  <div className="modal fade" id="editModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">New Major</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <form>
            <div className="row">
              <label htmlFor="txtMajor" className="col-sm-3 col-form-label required">Major name</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" id="txtMajor" />
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  </div>
    </div> );
}
 
export default MajorEdit;