import React from "react";
import { Container, Form, InputGroup } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Link } from "react-router-dom";
import { useUserInfo } from "../../customHooks/userInfo";
import "./Dashboard.css";
import { FaArrowLeft } from "react-icons/fa";
import FirstStep from "../../../src/assets/images/FirstStep.png";
import Second from "../../../src/assets/images/Second.png";
import Therdstep from "../../../src/assets/images/Therdstep.png";
import Attachone from "../../../src/assets/images/Attachone.png";

const NextStep = () => {
    const userInfo = useUserInfo();

    return (
        <div className="home-dashboard-main-container">
            <Container className="">

                <div className="d-flex align-items-center justify-content-between">

                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <Link to='/dashboard' className="link-dark" ><FaArrowLeft to='/dashboard/jobListing' className="fs-2 m-3" /></Link>
                        </div>
                        <div className="d-flex flex-column gap-2 ">

                            <span className="fw-bold fs-4">
                                Post Job{" "}
                                <span className="fw-bold fs-2 text-uppercase">
                                    {userInfo?.name}
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </Container>
            <Container className="mb-4">
                <div className="row">
                    <div className="total-jobs-applied-container d-flex justify-content-between gap-3">
                        <div className="col-md-4 gap-4 d-flex    ">
                            <div>
                                <img className=" image image-img " src={FirstStep} alt="new feature note " />
                            </div>
                            <div className=" d-flex flex-column gap-2 align-items-baseline">
                                <span className="fw-bold fs-6 text-primary">
                                    Step 1/3
                                </span>
                                <span >
                                    Job Information
                                </span>
                            </div>
                        </div>
                        <div className="col-md-4 gap-4 d-flex    ">
                            <div>
                                <img className=" image image-img " src={Second} alt="new feature note " />
                            </div>
                            <div className=" d-flex flex-column gap-2 align-items-baseline">
                                <span className="fw-bold fs-6 text-primary">
                                    Step 2/3
                                </span>
                                <span >
                                    Job Description
                                </span>
                            </div>
                        </div>
                        <div className="col-md-4 gap-4 d-flex    ">
                            <div>
                                <img className=" image image-img " src={Therdstep} alt="new feature note " />
                            </div>
                            <div className=" d-flex flex-column gap-2 align-items-baseline">
                                <span className="fw-bold fs-6 ">
                                    Step 3/3
                                </span>
                                <span >
                                    Perks & Benefit
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="mb-3 d-flex flex-column gap-2 align-items-baseline">
                <span className="fw-bold fs-6 ">
                    Details
                </span>
                <span >
                    Add the description of the job, responsibilities, who you are, and nice-to-haves.                </span>
            </div>
            <hr />
            <div className="d-flex align-items-center">
                <div className=" col-md-4 mb-3 d-flex flex-column">
                    <span className=" mb-1 fw-bold fs-6">Job Descriptions</span>
                    <span >Job titles must be describe one position</span>
                </div>
                <div className="col-md-6 d-flex flex-column ">
                    <FloatingLabel controlId="floatingTextarea2" label="Enter job description">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                    <img
                        src={Attachone}
                        alt="main-content-graph"
                        className="mb-2 main-content-graph"
                        style={{ height: '30px' }}
                        

                    />
                    <div className=" d-flex align-items-center justify-content-between">
                    <span >Maximum 500 characters</span>
                    <span >0/500</span>
                    </div>
                </div>
            </div>
            <hr />
            <div className="d-flex align-items-center">
                <div className=" col-md-4 mb-3 d-flex flex-column">
                    <span className=" mb-1 fw-bold fs-6">Responsibilities</span>
                    <span >Outline the core responsibilities of the position</span>
                </div>
                <div className="col-md-6 d-flex flex-column ">
                    <FloatingLabel controlId="floatingTextarea2" label="Enter job responsibilities">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                    <img
                        src={Attachone}
                        alt="main-content-graph"
                        className="mb-2 main-content-graph"
                        style={{ height: '30px' }}
                        

                    />
                    <div className=" d-flex align-items-center justify-content-between">
                    <span >Maximum 500 characters</span>
                    <span >0/500</span>
                    </div>
                </div>
            </div>
            <hr />
            <div className="d-flex align-items-center">
                <div className=" col-md-4 mb-3 d-flex flex-column">
                    <span className=" mb-1 fw-bold fs-6">Who You Are</span>
                    <span >Add your preferred candidates qualifications</span>
                </div>
                <div className="col-md-3 d-flex flex-column ">
                    <FloatingLabel controlId="floatingTextarea2" label="Enter qualifications">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                    <img
                        src={Attachone}
                        alt="main-content-graph"
                        className="mb-2 main-content-graph"
                        style={{ height: '30px' }}
                        

                    />
                    <div className=" d-flex align-items-center justify-content-between">
                    <span >Maximum 500 characters</span>
                    <span >0/500</span>
                    </div>
                </div>
            </div>
            <hr />
            <div className="d-flex align-items-center">
                <div className=" col-md-4 mb-3 d-flex flex-column">
                    <span className=" mb-1 fw-bold fs-6">Nice-To-Haves</span>
                    <span >Add nice-to-have skills and qualifications for the role to encourage a more diverse set of candidates to apply</span>
                </div>
                <div className="col-md-3 d-flex flex-column ">
                    <FloatingLabel controlId="floatingTextarea2" label="Enter nice-to-haves">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                    <img
                        src={Attachone}
                        alt="main-content-graph"
                        className="mb-2 main-content-graph"
                        style={{ height: '30px' }}
                        

                    />
                    <div className=" d-flex align-items-center justify-content-between">
                    <span >Maximum 500 characters</span>
                    <span >0/500</span>
                    </div>
                </div>
            </div>
            <Container className=" mb-4 mt-4 home-dashboard-main-container">
                <div className="col-md-9 d-flex align-items-center justify-content-between">
                    <h1 className="dashboard-text col-md-4">To Next Step</h1>
                    <Link to="/dashboard/thirdStep ">
                        <button className=" text-white fw-bold bg-primary-color border-0 custom-padding mt-2">
                            Next Step
                        </button>
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default NextStep;

