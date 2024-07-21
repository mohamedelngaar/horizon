import React from "react";
import { Container } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

import "./Dashboard.css";

const Help = () => {
  return (
    <>
      <Container className="mb-4 mt-4">
        <div className="d-flex align-items-center justify-content-between">
          <h1 className="dashboard-text">Help Center</h1>
          <Link to="/">
            <button className="dashboard-back-to-home-btn">
              Back to homepage
            </button>
          </Link>
        </div>
      </Container>
      <hr />

      <Container>
        <div className="row">
          <div className="col-md-3 mt-4">
            <div className="d-flex flex-column gap-2">
              <span>Type your question or search keyword</span>
              <input
                type="text"
                placeholder="Search..."
                className="help-search-input"
              />

              <Link to="getting-started" className="help-get-started-text">
                Getting Started
              </Link>
              <Link to="my-profile" className="help-get-started-text">
                My Profile
              </Link>
              <Link to="applying-for-job" className="help-get-started-text">
                Applying for a Job
              </Link>
              <Link to="job-search-tips" className="help-get-started-text">
                Job Search Tips
              </Link>
              <Link to="job-alerts" className="help-get-started-text">
                Job Alerts
              </Link>
            </div>
          </div>
          <div className="col-md-1 mt-4"></div>

          <div className="col-md-8 mt-4">
            <Outlet />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Help;
