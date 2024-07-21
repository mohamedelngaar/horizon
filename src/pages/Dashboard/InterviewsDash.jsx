import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useUserInfo } from "../../customHooks/userInfo";
import { HiOutlineDocumentText } from "react-icons/hi";
import { BsPlusLg } from "react-icons/bs";
import "./Dashboard.css";
import days from "../../assets/images/days.png";
import Clender from "../../assets/images/Clender.png";
import Catgory from "../../assets/images/Catgory.png";


const InterviewsDash = () => {
    const userInfo = useUserInfo();

    return (
        <div className="home-dashboard-main-container">
            <Container className="mb-4 mt-4 home-dashboard-main-container">
                <div className="d-flex align-items-center justify-content-between">
                    <h1 className="dashboard-text">CompanyHarizon</h1>
                    <Link to="/dashboard/postJob">
                        <HiOutlineDocumentText className="fs-4 m-3" />
                        <button className="text-white fw-bold bg-primary-color border-0 custom-padding mt-2">
                            <BsPlusLg className="fs-5 m-2" /> post job
                        </button>
                    </Link>
                </div>
            </Container>
            <hr />
            <Container className="mb-2 mt-4 home-dashboard-main-container">
                <div className="d-flex align-items-center justify-content-between">
                    <h1 className="fw-bold fs-4" >My Schedule <Link to="/">
                        <button className="dashboard-back-to-home-btn">
                            Today
                        </button>
                    </Link> </h1>

                    <div className="d-flex align-items-center justify-content-between"> <span className="fw-bold fs-4">Filters</span></div>
                    <div class="col-md-3 d-flex align-items-center justify-content-between btn-group me-2" role="group" aria-label="First group">
                        <Link class=" link-underline-opacity-0 link-dark">Day</Link>
                        <Link class=" link-underline-opacity-0 link-dark border-bottom border-primary border-3">Week</Link>
                        <Link class=" link-underline-opacity-0 link-dark">Month</Link>
                    </div>
                </div>
            </Container>
            <Container>
                <div className="row">

                    <div className="col-md-3 mt-4">
                        <div className="d-flex flex-column gap-4">
                            <div className="w-100  d-flex flex-column gap-3">
                                <img
                                    src={days}
                                    alt="main-content-graph"
                                    className="  main-content-graph"
                                />
                            </div>
                            <div className="w-100  d-flex flex-column gap-3">
                                <img
                                    src={Catgory}
                                    alt="main-content-graph"
                                    className="w-100  main-content-graph"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9 mt-4">
                        <div className="d-flex flex-column gap-4">
                            <div className=" d-flex flex-column gap-3">
                                <img
                                    src={Clender}
                                    alt="main-content-graph"
                                    className="main-content-graph"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default InterviewsDash;

