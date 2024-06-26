import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const AddUserDetails = () => {
  let { userid } = useParams();

  let [CurrentUser,setCurrentUser] = useState();
  
  // console.log()
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formFileData,formData1,formData,inputData)
    let token = sessionStorage.getItem("auth_token");
    const formData = new FormData(e.target);
    console.log(e);
   
    fetch(`http://127.0.0.1:8000/api/insert-user-details/${userid}`, {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + token,
      },
      body: formData
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });

  };

  useEffect(()=>{ 
   
   let token = sessionStorage.getItem("auth_token");

    axios({
      method: "get",
      url: `http://127.0.0.1:8000/api/user-details/${userid}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }).then(function (res) {

       setCurrentUser(res.data)
    }).catch((err)=>{
      console.error(err);
    })
  },[]);


  return (
    <div className="app-content content ">
      <div className="content-overlay" />
      <div className="header-navbar-shadow" />
      <div className="content-wrapper container-xxl p-0">
        <div className="content-header row">
          <div className="content-header-left col-md-9 col-12 mb-2">
            <div className="row breadcrumbs-top">
              <div className="col-12">
                <h2 className="content-header-title float-start mb-0">
                  Add User Details
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="content-body">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="border-bottom"></div>
                <div className="col-md-12 col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title"></h4>
                    </div>
                    <div className="card-body">
                      <form className="needs-validation"  onSubmit={handleSubmit} id="formElem" noValidate="" aria-multiline method="POST">
                        <div className="mb-1">
                        <div className="row">
                          <div className="col-md-6 mb-1">
                          <label className="form-label fs-5" htmlFor="username">Username</label>
                          <input className="form-control" type="text"   htmlFor="username" name="username" id="username"  value={CurrentUser?.username}/>
                          </div>
                          <div className="col-md-6 mb-1">
                          <label className="form-label fs-5" htmlFor="password">Password</label>
                          <input className="form-control" type="password"  htmlFor="password" name="password" id="password"  />
                          </div>
                        </div>
                        </div>
                       <div className="row">
                       <div className="col-md-6 mb-1">
                          <label className="form-label fs-5" htmlFor="email">Email</label>
                          <input className="form-control" type="email"  htmlFor="email" name="email" id="email"  value={CurrentUser?.email} />
                        </div>
                        <div className="col-md-6 mb-1">
                          <label className="form-label" htmlFor="bsDob">
                            DOB
                          </label>
                          <input
                            type="text"
                            className="form-control picker"
                            name="dob"
                            id="bsDob"
                            required=""
                            readOnly
                          />
                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">
                            Please enter your date of birth.
                          </div>
                        </div>
                       </div>

                        <div className="mb-1">
                          <label className="form-label">Gender</label>
                          <div className="form-check my-50">
                            <input
                              type="radio"
                              id="validationRadio3"
                              name="gender"
                              className="form-check-input"
                              required=""
                            />
                            <label
                              className="form-check-label"
                              htmlFor="validationRadio3"
                            >
                              Male
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              type="radio"
                              id="validationRadio4"
                              name="gender"
                              className="form-check-input"
                              required=""
                            />
                            <label
                              className="form-check-label"
                              htmlFor="validationRadio4"
                            >
                              Female
                            </label>
                          </div>
                        </div>

                        <div className="row">
                        <div className="mb-1 col-md-4">
                          <label htmlFor="customFile1" className="form-label">
                            Profile pic
                          </label>
                          <input
                            name="image"
                            className="form-control"
                            type="file"
                            required=""
                          />
                        </div>
                        <div className="mb-1 col-md-4">
                          <label htmlFor="customFile1" className="form-label">
                            AAdhar card
                          </label>
                          <input
                            name="aadhar"
                            className="form-control"
                            type="file"
                            required = ""
                          />
                        </div>
                        <div className="mb-1 col-md-4">
                          <label htmlFor="customFile1" className="form-label">
                            PAN card
                          </label>
                          <input
                            name="pan"
                            className="form-control"
                            type="file"
                            required=""
                          />
                        </div>
                        </div>
                        <div className="row">
                        <div className="mb-1 col-md-4">
                          <label htmlFor="customFile1" className="form-label">
                            Passport card
                          </label>
                          <input
                            name="passport_number"
                            className="form-control"
                            type="file"
                            required=""
                          />
                        </div>
                        <div className="mb-1 col-md-4">
                          <label htmlFor="customFile1" className="form-label">
                            Driving License card
                          </label>
                          <input
                            name="driving_license"
                            className="form-control"
                            type="file"
                            required=""
                          />
                        </div>
                        <div className="mb-1 col-md-4">
                          <label htmlFor="customFile1" className="form-label">
                            Voter ID card
                          </label>
                          <input
                            name="voter_id"
                            className="form-control"
                            type="file"
                            required=""
                          />
                        </div>
                        </div>
                         {/* form repeater start  1*/}
                         <div action="#" className="invoice-repeater mb-1">
                          <h4 className="">Bank Detail</h4>
                          <div data-repeater-list="banks">
                            <div data-repeater-item="">
                              <div className="row d-flex align-items-end">
                                <div className="col-md-4 col-12">
                                  <div className="mb-1">
                                    <label
                                      className="form-label"
                                    >
                                      Bank Name
                                    </label>
                                    <input
                                      type="text"
                                      name="bank_name"
                                      className="form-control"
                                      placeholder="Vuexy Admin Template"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-2 col-12">
                                  <div className="mb-1">
                                    <label
                                      className="form-label"
                                    >
                                      Account no
                                    </label>
                                    <input
                                      type="number"
                                      name="account_number"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-2 col-12 mb-50">
                                  <div className="mb-1">
                                    <button
                                      className="btn btn-outline-danger text-nowrap px-1"
                                      data-repeater-delete=""
                                      type="button"
                                    >
                                      <i data-feather="x" className="me-25" />
                                      <span>Delete</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <hr />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <button
                                className="btn btn-icon btn-primary"
                                type="button"
                                data-repeater-create=""
                              >
                                <i data-feather="plus" className="me-25" />
                                <span>Add New</span>
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* form repeater end  1*/}
                        {/* form repeater start  2*/}
                        <div action="#" className="invoice-repeater mb-1">
                          <h4 className="">Other Investments</h4>
                          <div data-repeater-list="invoice">
                            <div data-repeater-item="">
                              <div className="row d-flex align-items-end">
                                <div className="col-md-4 col-12">
                                  <div className="mb-1">
                                    <label
                                      className="form-label"
                                      htmlFor="itemname"
                                    >
                                      Type Of Investment
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      aria-describedby="itemname"
                                      placeholder="Vuexy Admin Template"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-2 col-12">
                                  <div className="mb-1">
                                    <label
                                      className="form-label"
                                      htmlFor="itemquantity"
                                    >
                                      Amount Invested(INR)
                                    </label>
                                    <input
                                      type="number"
                                      className="form-control"
                                      id="itemquantity"
                                      aria-describedby="itemquantity"
                                      placeholder={1}
                                    />
                                  </div>
                                </div>

                                <div className="col-md-2 col-12">
                                  <div className="mb-1">
                                    <label
                                      className="form-label"
                                      htmlFor="itemcost"
                                    >
                                      Note
                                    </label>
                                    <input
                                      type="number"
                                      className="form-control"
                                      id="itemcost"
                                      aria-describedby="itemcost"
                                      placeholder={32}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-2 col-12 mb-50">
                                  <div className="mb-1">
                                    <button
                                      className="btn btn-outline-danger text-nowrap px-1"
                                      data-repeater-delete=""
                                      type="button"
                                    >
                                      <i data-feather="x" className="me-25" />
                                      <span>Delete</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <hr />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <button
                                className="btn btn-icon btn-primary"
                                type="button"
                                data-repeater-create=""
                              >
                                <i data-feather="plus" className="me-25" />
                                <span>Add New</span>
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* form repeater end  2*/}
                        <div className="text-center">
                        <button type="submit" style={{width : "20%"}} className="btn btn-primary">
                          Submit
                        </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUserDetails;
