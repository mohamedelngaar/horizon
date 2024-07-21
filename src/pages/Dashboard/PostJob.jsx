import React from "react";
import { Container, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useUserInfo } from "../../customHooks/userInfo";
import { BsPlusLg } from "react-icons/bs";
import "./Dashboard.css";
import { FaArrowLeft } from "react-icons/fa";
import FirstStep from "../../../src/assets/images/FirstStep.png";
import SecondStep from "../../../src/assets/images/SecondStep.png";
import Therdstep from "../../../src/assets/images/Therdstep.png";
import ProgressBar from "../../../src/assets/images/ProgressBar.png";
import Graph from "../../../src/assets/images/Graph.png";
import com from "../../../src/assets/images/com.png";
import ilus from "../../../src/assets/images/ilus.png";

const PostJob = () => {
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
                                <img className=" image image-img " src={SecondStep} alt="new feature note " />
                            </div>
                            <div className=" d-flex flex-column gap-2 align-items-baseline">
                                <span className="fw-bold fs-6 ">
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
                    Basic Information
                </span>
                <span >
                    This information will be displayed publicly
                </span>
            </div>
            <hr />
            <div className="d-flex align-items-center">
                <div className=" col-md-4 mb-3 d-flex flex-column">
                    <span className=" m-1 fw-bold fs-6">Job Title</span>
                    <span >Job titles must be describe one position</span>
                </div>
                <div className="col-md-8 mb-3 d-flex flex-column">

                    <Form.Control className=" mb-1" type="email" placeholder="e.g. Software Engineer" />
                    <span >At least 80 characters</span>
                </div>
            </div>
            <hr />
            <div className="d-flex align-items-center">
                <div className=" col-md-4 mb-3 d-flex flex-column">
                    <span className=" fw-bold fs-6">Type of Employment</span>
                    <span >You can select multiple type of employment</span>
                </div>
                <div className="col-md-8 mb-3 d-flex flex-column">

                    <div className="d-flex flex-column gap-2 mt-3">
                        <div
                            class="form-check
                  "
                        >
                            <input
                                class="form-check-input custom-checkbox-filter"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                            />
                            <label
                                class="form-check
                    -label"
                                for="flexCheckDefault"
                            >
                                Full-time
                            </label>
                        </div>
                        <div class="form-check">
                            <input
                                class="form-check-input custom-checkbox-filter"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                            />
                            <label
                                class="form-check
                    -label"
                                for="flexCheckDefault"
                            >
                                Part-time
                            </label>
                        </div>
                        <div
                            class="form-check
                  "
                        >
                            <input
                                class="form-check-input custom-checkbox-filter"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                            />
                            <label
                                class="form-check
                    -label"
                                for="flexCheckDefault"
                            >
                                Remote
                            </label>
                        </div>
                        <div
                            class="form-check
                  "
                        >
                            <input
                                class="form-check-input custom-checkbox-filter"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                            />
                            <label
                                class="form-check
                    -label"
                                for="flexCheckDefault"
                            >
                                Internship
                            </label>
                        </div>
                        <div
                            class="form-check
                  "
                        >
                            <input
                                class="form-check-input custom-checkbox-filter"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                            />
                            <label
                                class="form-check
                    -label"
                                for="flexCheckDefault"
                            >
                                Contract
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="d-flex align-items-center">
                <div className=" col-md-4 mb-3 d-flex flex-column">
                    <span className=" fw-bold fs-6">Salary</span>
                    <span >Please specify the estimated salary range for the role. *You can leave this blank</span>
                </div>
                <div className="col-md-8 mb-3 d-flex flex-column">

                    <div className=" col-md-7  ">
                        <div className=" d-flex align-items-center justify-content-between ">
                            <InputGroup size="lg" className="w-25 mb-3">
                                <InputGroup.Text id="inputGroup-sizing-sm">$</InputGroup.Text>
                                <Form.Control
                                    placeholder="5,000"
                                    aria-label="Small"
                                    aria-describedby="inputGroup-sizing-sm"
                                />
                            </InputGroup>
                            <span>to</span>
                            <InputGroup size="lg" className="w-25 mb-3">
                                <InputGroup.Text id="inputGroup-sizing-sm">$</InputGroup.Text>
                                <Form.Control
                                    placeholder="22,000"
                                    aria-label="Small"
                                    aria-describedby="inputGroup-sizing-sm"
                                />
                            </InputGroup>
                        </div>

                        <div className="d-flex flex-column gap-4">
                            <div className=" d-flex flex-column gap-3">
                                <img
                                    src={ProgressBar}
                                    alt="main-content-graph"
                                    className="main-content-graph"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <hr />
            <div className="d-flex align-items-center">
                <div className="  col-md-4 mb-3 d-flex flex-column">
                    <span className="mb-2 fw-bold fs-6">Categories</span>
                    <span >You can select multiple job categories</span>
                </div>
                <div className="col-md-8 mb-3 d-flex flex-column">

                    <div className=" col-md-4">
                        <span className="  fw-bold fs-6">Select Job Categories</span>

                        <Form.Select className=" mt-2 py-3" aria-label="Floating label select example">
                            <option>Select Job Categories</option>
                            <option value="1">Software</option>
                            <option value="2">Mobile Aplication</option>
                            <option value="3">Web</option>
                            <option value="3">Game</option>
                        </Form.Select>
                    </div>
                </div>
            </div>
            <hr />

            <div className="d-flex align-items-center">
                <div className="  col-md-4 mb-3 d-flex flex-column">
                    <span className="mb-2 fw-bold fs-6">Required Skills</span>
                    <span >Add required skills for the job</span>
                </div>
                <div className="col-md-8 mb-3 d-flex flex-column">
                    <Link >
                        {/* to="/" */}
                        <button className="mb-2 dashboard-back-to-home-btn  ">
                            <BsPlusLg className="fs-5 me-2" /> Add Skills
                        </button>
                    </Link>
                    <div className=" col-md-6 d-flex flex-column gap-4">
                        <div className="col-md-4 d-flex flex-row gap-3">
                            <img
                                src={Graph}
                                alt="main-content-graph"
                                className="main-content-graph"
                            />
                            <img
                                src={com}
                                alt="main-content-graph"
                                className="main-content-graph"
                            />
                            <img
                                src={ilus}
                                alt="main-content-graph"
                                className="main-content-graph"
                            />
                        </div>
                    </div>

                </div>
            </div>
            <Container className=" mb-4 mt-4 home-dashboard-main-container">
                <div className="col-md-9 d-flex align-items-center justify-content-between">
                    <h1 className="dashboard-text col-md-4">To Next Step</h1>
                    <Link to="/dashboard/nextStep ">
                        <button className=" text-white fw-bold bg-primary-color border-0 custom-padding mt-2">
                            Next Step
                        </button>
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default PostJob;

