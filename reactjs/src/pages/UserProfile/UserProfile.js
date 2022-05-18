import '../BootstrapTemplate.css';
import { Navigate } from 'react-router-dom'
import img from '../../logo.svg';
import { useState } from 'react';

function UserProfile() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [birthday, setBirthday] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [foodpantryid, setFoodpantryid] = useState('');

  if (localStorage.getItem("loginStatus") == 'true') {
    return (
      <div id="wrapper">
          <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
            <div className="container-fluid d-flex flex-column p-0"><a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
                <div className="sidebar-brand-icon rotate-n-15"><i className="fas fa-laugh-wink" /></div>
                <div className="sidebar-brand-text mx-3"><span>Stock Track</span></div>
              </a>
              <hr className="sidebar-divider my-0" />
              <ul className="navbar-nav text-light" id="accordionSidebar">
                <li className="nav-item"><a className="nav-link active" href="/dashboard"><i className="fas fa-tachometer-alt" /><span>Dashboard</span></a></li>
                <li className="nav-item"><a className="nav-link" href="/user-profile"><i className="fas fa-us er" /><span>Profile</span></a></li>
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
                          {/* add notification menu here */}
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown no-arrow mx-1">
                      <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><span className="badge bg-danger badge-counter">7</span><i className="fas fa-envelope fa-fw" /></a>
                        <div className="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
                          {/* add messages notifications here */}
                        </div>
                      </div>
                      <div className="shadow dropdown-list dropdown-menu dropdown-menu-end" aria-labelledby="alertsDropdown" />
                    </li>
                    <div className="d-none d-sm-block topbar-divider" />
                    <li className="nav-item dropdown no-arrow">
                      <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><span className="d-none d-lg-inline me-2 text-gray-600 small">Valerie Luna</span><img className="border rounded-circle img-profile" src={img} /></a>
                        <div className="dropdown-menu shadow dropdown-menu-end animated--grow-in"><a className="dropdown-item" href="#"><i className="fas fa-user fa-sm fa-fw me-2 text-gray-400" />&nbsp;Profile</a><a className="dropdown-item" href="#"><i className="fas fa-cogs fa-sm fa-fw me-2 text-gray-400" />&nbsp;Settings</a><a className="dropdown-item" href="#"><i className="fas fa-list fa-sm fa-fw me-2 text-gray-400" />&nbsp;Activity log</a>
                          <div className="dropdown-divider" /><a className="dropdown-item" href="#"><i className="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400" />&nbsp;Logout</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="container-fluid">
                <h3 className="text-dark mb-4">Profile</h3>
                <div className="row mb-3">
                  <div className="col-lg-4">
                    <div className="card mb-3">
                      <div className="card-body text-center shadow"><img className="rounded-circle mb-3 mt-4" src={img} width={160} height={160} />
                        <div className="mb-3"><button className="btn btn-primary btn-sm" type="button">Change Photo</button></div>
                      </div>
                    </div>
                    <div className="card shadow mb-4">
                      <div className="card-header py-3">
                        <h6 className="text-primary fw-bold m-0">Projects</h6>
                      </div>
                      <div className="card-body">
                        <h4 className="small fw-bold">Order #0824903543<span className="float-end">20%</span></h4>
                        <div className="progress progress-sm mb-3">
                          <div className="progress-bar bg-danger" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} style={{width: '20%'}}><span className="visually-hidden">20%</span></div>
                        </div>
                        <h4 className="small fw-bold">Order #0824903549<span className="float-end">40%</span></h4>
                        <div className="progress progress-sm mb-3">
                          <div className="progress-bar bg-warning" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{width: '40%'}}><span className="visually-hidden">40%</span></div>
                        </div>
                        <h4 className="small fw-bold">Order #8945894563<span className="float-end">60%</span></h4>
                        <div className="progress progress-sm mb-3">
                          <div className="progress-bar bg-primary" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}><span className="visually-hidden">60%</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="row mb-3 d-none">
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="card shadow mb-3">
                          <div className="card-header py-3">
                            <p className="text-primary m-0 fw-bold">User Settings</p>
                          </div>
                          <div className="card-body">
                            <form>
                              <div className="row">
                                <div className="col">
                                  <div className="mb-3"><label className="form-label" htmlFor="email"><strong>Email Address</strong></label><input className="form-control" type="email" id="email" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} /></div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col">
                                  <div className="mb-3"><label className="form-label" htmlFor="first_name"><strong>First Name</strong></label><input className="form-control" type="text" id="first_name" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} /></div>
                                </div>
                                <div className="col">
                                  <div className="mb-3"><label className="form-label" htmlFor="last_name"><strong>Last Name</strong></label><input className="form-control" type="text" id="last_name" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} /></div>
                                </div>
                              </div>
                              <div className="mb-3"><button className="btn btn-primary btn-sm" type="submit">Save Settings</button></div>
                            </form>
                          </div>
                        </div>
                        <div className="card shadow">
                          <div className="card-header py-3">
                            <p className="text-primary m-0 fw-bold">Contact Settings</p>
                          </div>
                          <div className="card-body">
                            <form>
                              <div className="mb-3"><label className="form-label" htmlFor="address"><strong>Address</strong></label><input className="form-control" type="text" id="address" placeholder="Street" onChange={(e) => setStreet(e.target.value)} /></div>
                              <div className="row">
                                <div className="col">
                                  <div className="mb-3"><label className="form-label" htmlFor="city"><strong>City</strong></label><input className="form-control" type="text" id="city" placeholder="City" onChange={(e) => setCity(e.target.value)} /></div>
                                </div>
                                <div className="col">
                                  <div className="mb-3"><label className="form-label" htmlFor="state"><strong>State</strong></label><input className="form-control" type="text" id="state" placeholder="State" onChange={(e) => setState(e.target.value)} /></div>
                                </div>
                                <div className="col">
                                  <div className="mb-3"><label className="form-label" htmlFor="country"><strong>Country</strong></label><input className="form-control" type="text" id="country" placeholder="Country" onChange={(e) => setCountry(e.target.value)} /></div>
                                </div>
                              </div>
                              <div className="mb-3"><button className="btn btn-primary btn-sm" type="submit">Save Settings</button></div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card shadow mb-5">
                  <div className="card-header py-3">
                    <p className="text-primary m-0 fw-bold">Forum Settings</p>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <form>
                          <div className="mb-3"><label className="form-label" htmlFor="signature"><strong>Signature</strong><br /></label><textarea className="form-control" id="signature" rows={4} name="signature" defaultValue={""} /></div>
                          <div className="mb-3">
                            <div className="form-check form-switch"><input className="form-check-input" type="checkbox" id="formCheck-1" /><label className="form-check-label" htmlFor="formCheck-1"><strong>Notify me about new replies</strong></label></div>
                          </div>
                          <div className="mb-3"><button className="btn btn-primary btn-sm" type="submit">Save Settings</button></div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="bg-white sticky-footer">
              <div className="container my-auto">
                <div className="text-center my-auto copyright"><span>Copyright © Stock Track 2022</span></div>
              </div>
            </footer>
          </div><a className="border rounded d-inline scroll-to-top" href="#page-top"><i className="fas fa-angle-up" /></a>
        </div>
    );
  }
  else {
    return <Navigate replace to='/login' />
  }
}


export default UserProfile;