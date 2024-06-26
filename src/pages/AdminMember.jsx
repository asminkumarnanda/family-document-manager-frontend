import React, { useState } from "react";
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import Table from "../components/Table";
import Pagination from "../components/Pagination";

const AdminMember = () => {

    let [member, setMember] = useState('');
    let [theads, setTheads] = useState(['Sl.No.','User Name','Email','Action']);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage, setrecordsPerPage] = useState(3);
    const handlePagination = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  function fetchAllUsers() {
    let token = sessionStorage.getItem("auth_token");
    let admin_id = sessionStorage.getItem("user_id");
    axios({
      method: "get",
      url: `http://127.0.0.1:8000/api/users-list/${admin_id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }).then(function (res) {
      setMember(res.data.data)
    }).catch((err)=>{
      console.error(err);
    })
  }
  useEffect(() => {
    fetchAllUsers();
  }, []);
  useEffect(() => {
    console.log(member);
  }, [member]);
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
                  All Users
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="content-body">
          <section id="ajax-datatable">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header border-bottom">
                    <NavLink
                      to="/add-user"
                      id="addBrokerButton"
                      className="dt-button create-new btn btn-primary"
                      type="button"
                    >
                      <span>
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-plus me-50 font-small-4"
                        >
                          <line x1={12} y1={5} x2={12} y2={19} />
                          <line x1={5} y1={12} x2={19} y2={12} />
                        </svg>
                        Add New User
                      </span>
                    </NavLink>
                    <form action="">
                      <div className="form-group search">
                        <label htmlFor="search">Search User Name</label>
                        <div className="d-flex">
                          <input
                            type="text"
                            name="search-user"
                            defaultValue=""
                            id="search-user"
                            className="form-control"
                            placeholder="Search"
                          />
                          <a href="" type="button" className="btn">
                            <i className="fa fa-rotate-right" />
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                   <Table member={member} theads={theads} currentPage={currentPage} recordsPerPage={recordsPerPage}/>             
                </div>
                <Pagination recordsPerPage={recordsPerPage} length={member.length} handlePagination={handlePagination} currentPage={currentPage}/>
              </div>
           
            </div>
         
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdminMember;
