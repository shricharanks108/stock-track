import '../BootstrapTemplate.css';
import { Button } from 'react-bootstrap';

function TeamManagement() {

  const teamMembers = [
      {
        memberID: 1,
        name: 'Shri',
        role: 'Volunteer',
        location: 'Newark',
        age: 18,
        accessLevel: '001',
      },
      {
        memberID: 2,
        name: 'Anna',
        role: 'Engineer',
        location: 'Newark',
        age: 19,
        accessLevel: '002',
      },
      {
        memberID: 3,
        name: 'Sai',
        role: 'Developer',
        location: 'Aberdeen',
        age: 18,
        accessLevel: '003',
      },
    ];

  return (
    <div>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
          <title>Table - Brand</title>
          <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.0/css/all.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
          <link rel="stylesheet" href="assets/fonts/fontawesome5-overrides.min.css" />
          <div id="wrapper">
            <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
              <div className="container-fluid d-flex flex-column p-0"><a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
                  <div className="sidebar-brand-icon rotate-n-15"><i className="fas fa-laugh-wink" /></div>
                  <div className="sidebar-brand-text mx-3"><span>Brand</span></div>
                </a>
                <hr className="sidebar-divider my-0" />
                <ul className="navbar-nav text-light" id="accordionSidebar">
                  <li className="nav-item"><a className="nav-link active" href="/dashboard"><i className="fas fa-tachometer-alt" /><span>Dashboard</span></a></li>
                  <li className="nav-item"><a className="nav-link" href="/user-profile"><i className="fas fa-us er" /><span>Admin Profile</span></a></li>
                  <li className="nav-item"><a className="nav-link" href="/team-management"><i className="fas fa-table" /><span>Team Management</span></a></li>
                  <li className="nav-item"><a className="nav-link" href="/logout"><i className="far fa-user-circle" /><span>Logout</span></a></li>
                </ul>
                <div className="text-center d-none d-md-inline"><button className="btn rounded-circle border-0" id="sidebarToggle" type="button" /></div>
              </div>
            </nav>
            <div className="d-flex flex-column" id="content-wrapper">
              <div id="content">
                <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
                  <div className="container-fluid"><button className="btn btn-link d-md-none rounded-circle me-3" id="sidebarToggleTop" type="button"><i className="fas fa-bars" /></button>
                    <form className="d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search">
                      <div className="input-group"><input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..." /><button className="btn btn-primary py-0" type="button"><i className="fas fa-search" /></button></div>
                    </form>
                    <ul className="navbar-nav flex-nowrap ms-auto">
                      <li className="nav-item dropdown d-sm-none no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><i className="fas fa-search" /></a>
                        <div className="dropdown-menu dropdown-menu-end p-3 animated--grow-in" aria-labelledby="searchDropdown">
                          <form className="me-auto navbar-search w-100">
                            <div className="input-group"><input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..." />
                              <div className="input-group-append"><button className="btn btn-primary py-0" type="button"><i className="fas fa-search" /></button></div>
                            </div>
                          </form>
                        </div>
                      </li>
                      <li className="nav-item dropdown no-arrow mx-1">
                        <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><span className="badge bg-danger badge-counter">3+</span><i className="fas fa-bell fa-fw" /></a>
                          <div className="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
                            <h6 className="dropdown-header">alerts center</h6>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item dropdown no-arrow mx-1">
                        <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><span className="badge bg-danger badge-counter">7</span><i className="fas fa-envelope fa-fw" /></a>
                          <div className="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
                            <h6 className="dropdown-header">alerts center</h6><a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                          </div>
                        </div>
                        <div className="shadow dropdown-list dropdown-menu dropdown-menu-end" aria-labelledby="alertsDropdown" />
                      </li>
                      <div className="d-none d-sm-block topbar-divider" />
                      <li className="nav-item dropdown no-arrow">
                        <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><span className="d-none d-lg-inline me-2 text-gray-600 small">Valerie Luna</span><img className="border rounded-circle img-profile" src="assets/img/avatars/avatar1.jpeg" /></a>
                          <div className="dropdown-menu shadow dropdown-menu-end animated--grow-in"><a className="dropdown-item" href="#"><i className="fas fa-user fa-sm fa-fw me-2 text-gray-400" />&nbsp;Profile</a><a className="dropdown-item" href="#"><i className="fas fa-cogs fa-sm fa-fw me-2 text-gray-400" />&nbsp;Settings</a><a className="dropdown-item" href="#"><i className="fas fa-list fa-sm fa-fw me-2 text-gray-400" />&nbsp;Activity log</a>
                            <div className="dropdown-divider" /><a className="dropdown-item" href="#"><i className="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400" />&nbsp;Logout</a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </nav>
                <div className="container-fluid">
                  <h3 className="text-dark mb-4">Team</h3>
                  <div className="card shadow">
                    <div className="card-header py-3">
                      <p className="text-primary m-0 fw-bold">Employee Info</p>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-6 text-nowrap">
                          {/*   */}
                        </div>
                        <div className="col-md-6">
                          <div className="text-md-end dataTables_filter" id="dataTable_filter"><label className="form-label"><input type="search" className="form-control form-control-sm" aria-controls="dataTable" placeholder="Search" /></label></div>
                        </div>
                      </div>
                      <div className="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                        <table className="table my-0" id="dataTable">
                          <thead>
                            <tr>
                              <th>Team Member ID</th>
                              <th>Name</th>
                              <th>Position</th>
                              <th>Location</th>
                              <th>Age</th>
                              <th>Access Level</th>
                            </tr>
                          </thead>
                          <tbody>
                              {teamMembers.map((member) => (
                                <tr>
                                  <td>{member.memberID}</td>
                                  <td>{member.name}</td>
                                  <td>{member.role}</td>
                                  <td>{member.location}</td>
                                  <td>{member.age}</td>
                                  <td>{member.accessLevel}</td>
                                </tr>
                              ))}
                          </tbody>
                          <tfoot>
                            <tr>
                              <td><strong>Team Member ID</strong></td>
                              <td><strong>Name</strong></td>
                              <td><strong>Position</strong></td>
                              <td><strong>Location</strong></td>
                              <td><strong>Age</strong></td>
                              <td><strong>Access Level</strong></td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                      <div className="row">
                        <div className="col-md-6 align-self-center">
                          <p id="dataTable_info" className="dataTables_info" role="status" aria-live="polite">Showing all of {teamMembers.length} Team Members!</p>
                        </div>
                        <div className="col-md-6">
                          {/* <nav className="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">
                            <ul className="pagination">
                              <li className="page-item disabled"><a className="page-link" href="#" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
                              <li className="page-item active"><a className="page-link" href="#">1</a></li>
                              <li className="page-item"><a className="page-link" href="#">2</a></li>
                              <li className="page-item"><a className="page-link" href="#">3</a></li>
                              <li className="page-item"><a className="page-link" href="#" aria-label="Next"><span aria-hidden="true">»</span></a></li>
                            </ul>
                          </nav> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <footer className="bg-white sticky-footer">
                <div className="container my-auto">
                  <div className="text-center my-auto copyright"><span>Copyright © Brand 2022</span></div>
                </div>
              </footer>
            </div><a className="border rounded d-inline scroll-to-top" href="#page-top"><i className="fas fa-angle-up" /></a>
          </div>
        </div>
  );
}

export default TeamManagement;

  