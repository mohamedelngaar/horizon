import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUserInfo } from "../../customHooks/userInfo";
import { Container, ProgressBar } from "react-bootstrap";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FaArrowLeft } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import JeromeBell from "../../../src/assets/images/Jerome Bell.png";
import "./Dashboard.css";
import { FaStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { TbMessage2 } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { CiGlobe } from "react-icons/ci";
import jakeGyll from "../../../src/assets/images/Jake Gyll.png";
import RodolfoGoode from "../../../src/assets/images/Rodolfo Goode.png";
import JennyWilson from "../../../src/assets/images/Jenny Wilson.png";



export default function Hiring() {
    const userInfo = useUserInfo();
    return (
        <>
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
                                <Link to='/dashboard/socialMedia' className="link-dark" ><FaArrowLeft to='/dashboard/jobListing' className="fs-2 m-3" /></Link>
                            </div>
                            <div className="d-flex flex-column gap-2 ">

                                <span className="fw-bold fs-3">
                                    Applicant Details{" "}
                                    <span className="fw-bold fs-2 text-uppercase">
                                        {userInfo?.name}
                                    </span>
                                </span>
                            </div>
                        </div>
                        <Link >
                            {/* to="/" */}
                            <button className="dashboard-back-to-home-btn  ">
                                <BsChevronDown className="fs-5 me-2" /> More Action
                            </button>
                        </Link>
                    </div>
                </Container>
                <Container>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="total-jobs-applied-container d-flex flex-column gap-3">
                                <Container>
                                    <div className=" mb-3 gap-4 d-flex align-items-center   ">
                                        <div>
                                            <img className="image-applicant image-img-applicant  " src={JeromeBell} alt="new feature note " />
                                        </div>
                                        <div className="d-flex flex-column gap-2 align-items-baseline">
                                            <span className="fw-bold fs-4">
                                                Jerome Bell
                                            </span>
                                            <span >
                                                Product Designer
                                            </span>
                                            <div className=" d-flex  ">
                                                <FaStar className="m-1 fs-4 w-50 text-warning" />
                                                <span className=" m-1 fs-5">4.0</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" d-flex align-items-center justify-content-between">
                                        <span>Applied Jobs</span>
                                        <span>2 days ago</span>
                                    </div>
                                    <hr />
                                    <div className=" mb-3 d-flex flex-column">
                                        <span className=" fw-bold fs-5">Product Development</span>
                                        <span>Marketing . Full-Time</span>
                                    </div>
                                    <div className=" d-flex align-items-center justify-content-between">
                                        <span >Stage</span>
                                        <span className=" text-info" > <GoDotFill className="fs-4" />Interview</span>
                                    </div>
                                    <ProgressBar className=" mb-3">
                                        <ProgressBar variant="info" now={24} key={1} />
                                        <ProgressBar variant="light" now={1} key={2} />
                                        <ProgressBar variant="info" now={24} key={3} />
                                        <ProgressBar variant="light" now={1} key={2} />
                                        <ProgressBar variant="info" now={24} key={3} />
                                        <ProgressBar variant="light" now={1} key={2} />
                                        <ProgressBar variant="secondary-subtle " now={25} key={2} />
                                    </ProgressBar>
                                    <Link className="grid gap-3" >
                                        {/* to="/" */}
                                        <button className="dashboard-back-to-home-btn pe-5 ps-5 ">
                                            Schedule Interview
                                        </button>
                                    </Link>
                                    <Link className="grid gap-3 ps-2" >
                                        <button className="dashboard-back-to-home-btn ">
                                            <TbMessage2 className=" fs-4" />
                                        </button>
                                    </Link>
                                    <hr />
                                    <div className="mb-2">
                                        <span className="  fw-bold fs-5">
                                            Contact
                                        </span>
                                    </div>
                                    <div className="d-flex align-item-center ">
                                        <MdOutlineEmail className="me-1 fs-4" />
                                        <div className=" mb-3 d-flex flex-column">
                                            <span className=" fw-bold fs-6">Email</span>
                                            <span>jeromeBell45@email.com</span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-item-center ">
                                        <IoIosPhonePortrait className="me-1 fs-4" />
                                        <div className=" mb-3 d-flex flex-column">
                                            <span className=" fw-bold fs-6">Phone</span>
                                            <span>+44 1245 572 135</span>
                                        </div>
                                    </div>

                                    <div className="d-flex align-item-center">
                                        <FaInstagram className="me-1 fs-4" />
                                        <div className=" mb-3 d-flex flex-column">
                                            <span className=" fw-bold fs-6">Instagram</span>
                                            <span className=" text-primary">instagram.com/jeromebell</span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-item-center">
                                        <SlSocialTwitter className="me-1 fs-4" />
                                        <div className=" mb-3 d-flex flex-column">
                                            <span className=" fw-bold fs-6">Twitter</span>
                                            <span className=" text-primary">twitter.com/jeromebell</span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-item-center">
                                        <CiGlobe className="me-1 fs-4" />
                                        <div className=" mb-3 d-flex flex-column">
                                            <span className=" fw-bold fs-6">Website</span>
                                            <span className=" text-primary">www.jeromebell.com</span>
                                        </div>
                                    </div>

                                </Container>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="total-jobs-applied-container d-flex flex-column gap-3">
                                <Container>
                                    <div class=" d-flex align-items-center justify-content-around btn-group me-2" role="group" aria-label="First group">
                                        <Link to="/dashboard/applicant" class=" link-underline-opacity-0  link-dark  ">Applicant Profile</Link>
                                        <Link to="/dashboard/resume" class=" link-underline-opacity-0 link-dark">Resume</Link>
                                        <Link class=" link-underline-opacity-0 link-dark border-bottom border-primary border-3">Hiring Progress</Link>
                                        <Link to="/dashboard/interview" class=" link-underline-opacity-0 link-dark">Interview Schedule</Link>
                                    </div>
                                    <hr />
                                    <Container className=" py-3" >

                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex flex-column gap-2 ">
                                                <span className="fw-bold fs-5">
                                                    Current Stage{" "}
                                                    <span className="fw-bold fs-2 text-uppercase">
                                                        {userInfo?.name}
                                                    </span>
                                                </span>
                                            </div>

                                            <Link >
                                                {/* to="/" */}
                                                <button className="mb-3 dashboard-back-to-home-btn  ">
                                                    <BsChevronDown className="fs-5 me-2" /> Give Rating
                                                </button>
                                            </Link>
                                        </div>
                                    </Container>
                                    <div class="w-100 btn-group" role="group" aria-label="Basic mixed styles example">
                                        <button type="button" class="btn btn-outline-primary bg-info-subtle">In-Review</button>
                                        <button type="button" class="btn btn-outline-primary bg-info-subtle">Shortlisted</button>
                                        <button type="button" class="btn btn-outline-primary btn-info text-white">Interview</button>
                                        <button type="button" class="btn btn-outline-secondary bg-secondary-subtle">Hired / Declined</button>
                                    </div>
                                    <div className=" mb-3">
                                        <span className="  fw-bold fs-5">
                                            Stage Info
                                        </span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className=" col-md-5 mb-3 d-flex flex-column">
                                            <span className="mb-1">Interview Date</span>
                                            <span className=" fw-bold fs-6">10 - 13 July 2021</span>
                                        </div>
                                        <div className="col-md-7 mb-3 d-flex flex-column">
                                            <span className="mb-1">Interview Status</span>
                                            <span className=" w-25 tag text-warning bg-warning-subtle">Communcation</span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className=" col-md-4 mb-3 d-flex flex-column">
                                            <span className="mb-1">Interview Location</span>
                                            <span className=" fw-bold fs-6">Silver Crysta Room, Nomad Office
                                                3517 W. Gray St. Utica, Pennsylvania 57867</span>
                                        </div>

                                        <div className="col-md-1"></div>
                                        <div className="col-md-7 mb-3 d-flex flex-column">
                                            <span className="mb-1">Assigned to</span>
                                            <div className="col-md-4 d-flex align-items-center justify-content-between">
                                                <img className="image image-img d-flex align-items-center justify-content-center " src={jakeGyll} alt="new feature note " />
                                                <img className="image image-img d-flex align-items-center justify-content-center " src={RodolfoGoode} alt="new feature note " />
                                                <img className="image image-img d-flex align-items-center justify-content-center " src={JennyWilson} alt="new feature note " />
                                            </div>
                                        </div>
                                    </div>
                                    <button className="dashboard-back-to-home-btn fs-5  ">
                                        Move To Next Step
                                    </button>
                                    <hr />
                                    <div className="mb-3 mt-3 recent-apps-container d-flex align-items-center justify-content-between">
                                        <span className="fw-bold fs-4">Notes</span>
                                        <Link class="fs-5 link-offset-2 link-underline link-underline-opacity-0 ">
                                            <BsPlusLg className="fs-5 m-2" />Add Notes
                                        </Link>
                                    </div>
                                    <Container className="mb-4">
                                        <div className="row">
                                            <div className="total-jobs-applied-container d-flex flex-column gap-3">
                                                <div className=" mb-3 gap-4 d-flex    ">
                                                    <div>
                                                        <img className="image image-img " src={JennyWilson} alt="new feature note " />
                                                    </div>
                                                    <div className="d-flex flex-column gap-2 align-items-baseline">
                                                        <span className="fw-bold fs-6">
                                                            Jenny Wilson
                                                        </span>
                                                        <span >
                                                            Please, do an interview stage immediately. The design division needs more new employee now
                                                        </span>
                                                        <span className=" text-primary">2 Replies</span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </Container>
                                    <Container>
                                        <div className="row">
                                            <div className="total-jobs-applied-container d-flex flex-column gap-3">
                                                <div className=" mb-3 gap-4 d-flex    ">
                                                    <div>
                                                        <img className="image image-img " src={JennyWilson} alt="new feature note " />
                                                    </div>
                                                    <div className=" d-flex flex-column gap-2 align-items-baseline">
                                                        <span className="fw-bold fs-6">
                                                            Jenny Wilson
                                                        </span>
                                                        <span >
                                                            Please, do an interview stage immediately.
                                                        </span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </Container>

                                </Container>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}
