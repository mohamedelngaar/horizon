import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useUserInfo } from "../../customHooks/userInfo";

import newfeaturenote from "../../../src/assets/images/new-feature-note.png";

const Applications = () => {
  const userInfo = useUserInfo();

  return (
    <>
      <Container className="mb-4 mt-4">
        <div className="d-flex align-items-center justify-content-between">
          <h1 className="dashboard-text">My Applications</h1>
          <Link to="/">
            <button className="dashboard-back-to-home-btn">
              Back to homepage
            </button>
          </Link>
        </div>
      </Container>
      <hr />
      <Container>
        <div className="d-flex flex-column gap-2 mt-4">
          <span className="fw-bold fs-5">
            Keep It Up,{" "}
            <span className="fw-bold fs-2 text-uppercase">
              {userInfo?.name}
            </span>
          </span>
          <span>Here is job applications status from July 19 - July 25.</span>
        </div>
      </Container>
      <Container>
        <div className="mt-4 d-flex align-items-center gap-4 main-new-feature-container">
          <div>
            <img src={newfeaturenote} alt="new feature note" />
          </div>
          <div className="d-flex flex-column gap-2">
            <span className="fw-bold new-feature-text">
              A Feature Coming Soon!
            </span>
            <p>
              You can request a follow-up 7 days after applying for a job if the
              application status is in review. Only one follow-up is allowed per
              job.
            </p>
          </div>
        </div>
      </Container>
      <Container>
        <div className="mt-4">
          <h4 className="fw-bold">Applications History</h4>
        </div>
      </Container>
    </>
  );
};

export default Applications;
