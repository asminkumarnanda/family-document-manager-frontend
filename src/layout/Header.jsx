import {React} from 'react'


const Header = () => {
    function logout() {
      sessionStorage.clear();
      window.location.replace('/');
    }
  
  return (

    <div
  className="vertical-layout vertical-menu-modern  navbar-floating footer-static  "
  data-open="click"
  data-menu="vertical-menu-modern"
  data-col=""
>
<nav className="header-navbar navbar navbar-expand-lg align-items-center floating-nav navbar-light navbar-shadow container-xxl">
  <div className="navbar-container d-flex content">
    <div className="bookmark-wrapper d-flex align-items-center">
    </div>
    <ul className="nav navbar-nav align-items-center ms-auto">
      
      <li className="nav-item dropdown dropdown-notification me-25">
        <a className="nav-link" href="#" data-bs-toggle="dropdown">
          <i className="ficon" data-feather="bell" />
          <span className="badge rounded-pill bg-danger badge-up">5</span>
        </a>
        <ul className="dropdown-menu dropdown-menu-media dropdown-menu-end">
          <li className="dropdown-menu-header">
            <div className="dropdown-header d-flex">
              <h4 className="notification-title mb-0 me-auto">Notifications</h4>
              <div className="badge rounded-pill badge-light-primary">
                6 New
              </div>
            </div>
          </li>
          <li className="scrollable-container media-list">
            <a className="d-flex" href="#">
              <div className="list-item d-flex align-items-start">
                <div className="me-1">
                  <div className="avatar">
                    <img
                      src="../../../app-assets/images/portrait/small/avatar-s-15.jpg"
                      alt="avatar"
                      width={32}
                      height={32}
                    />
                  </div>
                </div>
                <div className="list-item-body flex-grow-1">
                  <p className="media-heading">
                    <span className="fw-bolder">Congratulation Sam 🎉</span>
                    winner!
                  </p>
                  <small className="notification-text">
                    {" "}
                    Won the monthly best seller badge.
                  </small>
                </div>
              </div>
            </a>
            <a className="d-flex" href="#">
              <div className="list-item d-flex align-items-start">
                <div className="me-1">
                  <div className="avatar">
                    <img
                      src="../../../app-assets/images/portrait/small/avatar-s-3.jpg"
                      alt="avatar"
                      width={32}
                      height={32}
                    />
                  </div>
                </div>
                <div className="list-item-body flex-grow-1">
                  <p className="media-heading">
                    <span className="fw-bolder">New message</span>&nbsp;received
                  </p>
                  <small className="notification-text">
                    {" "}
                    You have 10 unread messages
                  </small>
                </div>
              </div>
            </a>
            <a className="d-flex" href="#">
              <div className="list-item d-flex align-items-start">
                <div className="me-1">
                  <div className="avatar bg-light-danger">
                    <div className="avatar-content">MD</div>
                  </div>
                </div>
                <div className="list-item-body flex-grow-1">
                  <p className="media-heading">
                    <span className="fw-bolder">Revised Order 👋</span>
                    &nbsp;checkout
                  </p>
                  <small className="notification-text">
                    {" "}
                    MD Inc. order updated
                  </small>
                </div>
              </div>
            </a>
            <div className="list-item d-flex align-items-center">
              <h6 className="fw-bolder me-auto mb-0">System Notifications</h6>
              <div className="form-check form-check-primary form-switch">
                <input
                  className="form-check-input"
                  id="systemNotification"
                  type="checkbox"
                  defaultChecked=""
                />
                <label
                  className="form-check-label"
                  htmlFor="systemNotification"
                />
              </div>
            </div>
            <a className="d-flex" href="#">
              <div className="list-item d-flex align-items-start">
                <div className="me-1">
                  <div className="avatar bg-light-danger">
                    <div className="avatar-content">
                      <i className="avatar-icon" data-feather="x" />
                    </div>
                  </div>
                </div>
                <div className="list-item-body flex-grow-1">
                  <p className="media-heading">
                    <span className="fw-bolder">Server down</span>
                    &nbsp;registered
                  </p>
                  <small className="notification-text">
                    {" "}
                    USA Server is down due to high CPU usage
                  </small>
                </div>
              </div>
            </a>
            <a className="d-flex" href="#">
              <div className="list-item d-flex align-items-start">
                <div className="me-1">
                  <div className="avatar bg-light-success">
                    <div className="avatar-content">
                      <i className="avatar-icon" data-feather="check" />
                    </div>
                  </div>
                </div>
                <div className="list-item-body flex-grow-1">
                  <p className="media-heading">
                    <span className="fw-bolder">Sales report</span>
                    &nbsp;generated
                  </p>
                  <small className="notification-text">
                    {" "}
                    Last month sales report generated
                  </small>
                </div>
              </div>
            </a>
            <a className="d-flex" href="#">
              <div className="list-item d-flex align-items-start">
                <div className="me-1">
                  <div className="avatar bg-light-warning">
                    <div className="avatar-content">
                      <i
                        className="avatar-icon"
                        data-feather="alert-triangle"
                      />
                    </div>
                  </div>
                </div>
                <div className="list-item-body flex-grow-1">
                  <p className="media-heading">
                    <span className="fw-bolder">High memory</span>&nbsp;usage
                  </p>
                  <small className="notification-text">
                    {" "}
                    BLR Server using high memory
                  </small>
                </div>
              </div>
            </a>
          </li>
          <li className="dropdown-menu-footer">
            <a className="btn btn-primary w-100" href="#">
              Read all notifications
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item dropdown dropdown-user">
        <a
          className="nav-link dropdown-toggle dropdown-user-link"
          id="dropdown-user"
          href="#"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <div className="user-nav d-sm-flex d-none">
            <span className="user-name fw-bolder">John Doe</span>
            <span className="user-status">Admin</span>
          </div>
          <span className="avatar">
            <img
              className="round"
              src="../../../app-assets/images/portrait/small/avatar-s-11.jpg"
              alt="avatar"
              height={40}
              width={40}
            />
            <span className="avatar-status-online" />
          </span>
        </a>
        <div
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="dropdown-user"
        >
          <a className="dropdown-item" href="page-profile.html">
            <i className="me-50" data-feather="user" /> Profile
          </a>
          <div className="dropdown-divider" />
          <a className="dropdown-item"  onClick={logout}>
            <i className="me-50" data-feather="power"/> Logout
          </a>
        </div>
      </li>
    </ul>
  </div>
</nav>
</div>


  );
}

export default Header;