import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useUserInfo } from "../../customHooks/userInfo";
import ArowChart from "../../assets/images/ArowChart.png";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { HiOutlineClipboardList } from "react-icons/hi";
import Chart from "../../assets/images/Chart.png";
import CountryChart from "../../assets/images/CountryChart.png";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FaArrowLeft } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import "./Dashboard.css";




const Analytics = () => {
    const userInfo = useUserInfo();

    return (
        <div className="home-dashboard-main-container">
            <Container className="mb-4 mt-4 home-dashboard-main-container">
                <div className="d-flex align-items-center justify-content-between">
                    <h1 className="dashboard-text">CompanyHarizon</h1>
                    <Link >
                        {/* to="/" */}
                        <HiOutlineDocumentText className="fs-4 m-3" />
                        <button className="text-white fw-bold bg-primary-color border-0 custom-padding mt-2">
                            <BsPlusLg className="fs-5 m-2" /> post job
                        </button>
                    </Link>
                </div>
            </Container>
            <hr />
            <Container className="py-3">

                <div className="d-flex align-items-center justify-content-between">

                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <Link to='/dashboard/jobListing' className="link-dark" ><FaArrowLeft to='/dashboard/jobListing' className="fs-2 m-3" /></Link>
                        </div>
                        <div className="d-flex flex-column gap-2 ">

                            <span className="fw-bold fs-4">
                                Social Media Assistant{" "}
                                <span className="fw-bold fs-2 text-uppercase">
                                    {userInfo?.name}
                                </span>
                            </span>
                            <span>
                                Design.Full-time.4/11 Hired
                            </span>
                        </div>
                    </div>
                    <Link >
                        {/* to="/" */}
                        <button className="dashboard-back-to-home-btn  ">
                            <BsChevronDown className="fs-5 m-2" /> More Action
                        </button>
                    </Link>
                </div>
            </Container>
            <div class=" col-md-2 d-flex align-items-center justify-content-around btn-group me-2" role="group" aria-label="First group">
                <Link to="/dashboard/socialMedia" class=" link-underline-opacity-0  link-dark   ">Applicants</Link>
                <Link class=" link-underline-opacity-0 link-dark border-bottom border-primary border-3">Analytics</Link>
            </div>
            <Container>
                <div className="row">
                    <div className="col-md-8 mt-4">
                        <div className="mb-3 d-flex  gap-3">
                            <div className=" col-md-6  total-jobs-applied-container d-flex flex-column gap-1">
                                <div className="d-flex align-items-center justify-content-between">
                                    <span className="fw-bold fs-5">Total Views</span>
                                    <IoEyeOutline className=" fs-4 text-primary" />
                                </div>
                                <div className=" fs-5">
                                    <span className="fw-bolder fs-1">23,564</span>
                                    <span className="ps-2 fs-5 text-success">6.4% <FaCaretUp /> </span>
                                </div>
                                <span>vs last day</span>
                            </div>
                            <div className=" col-md-6  total-jobs-applied-container d-flex flex-column gap-1">
                                <div className="d-flex align-items-center justify-content-between">
                                    <span className="fw-bold fs-5">Total Applied</span>
                                    <HiOutlineClipboardList className=" fs-4 text-dark" />
                                </div>
                                <div className=" fs-5">
                                    <span className="fw-bolder fs-1">132</span>
                                    <span className="ps-2 fs-5 text-danger">0.5% <FaCaretDown /> </span>
                                </div>
                                <span>vs last day</span>
                            </div>
                        </div>
                        <div >
                            <div className="row">
                                <div className="mt-4">
                                    <div className="d-flex flex-column gap-4">
                                        <div className=" d-flex flex-column gap-3">
                                            <img
                                                src={ArowChart}
                                                alt="main-content-graph"
                                                className="main-content-graph"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-4">
                        <div className="d-flex flex-column gap-4">
                            <div className="w-100  d-flex flex-column gap-3">
                                <img
                                    src={Chart}
                                    alt="main-content-graph"
                                    className="  main-content-graph"
                                />
                            </div>
                            <div className=" d-flex flex-column gap-3">
                                <img
                                    src={CountryChart}
                                    alt="main-content-graph"
                                    className="  main-content-graph"
                                />
                            </div>
                        </div>
                    </div>


                </div>
            </Container>
        </div>
    );
};

export default Analytics;
