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
import LeifFloyd from "../../../src/assets/images/Leif Floyd.png";
import { GoPencil } from "react-icons/go";
import { PiDotsThreeOutlineFill } from "react-icons/pi";



export default function Interview() {
    const userInfo = useUserInfo();
    return (
        <>
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
                                        <Link to="/dashboard/hiring" class=" link-underline-opacity-0 link-dark ">Hiring Progress</Link>
                                        <Link class=" link-underline-opacity-0 link-dark border-bottom border-primary border-3">Interview Schedule</Link>
                                    </div>
                                    <hr />
                                    <div className="mb-3 mt-3 recent-apps-container d-flex align-items-center justify-content-between">
                                        <span className="fw-bold fs-5">Interview List</span>
                                        <Link class="fs-5 link-offset-2 link-underline link-underline-opacity-0 ">
                                            <BsPlusLg className="fs-5 m-2" />Add Schedule Interview
                                        </Link>
                                    </div>
                                    <span className="py-4">Tomorrow - 10 may, 2024</span>
                                    <Container className="mb-4">
                                        <div className="row">
                                            <div className="total-jobs-applied-container d-flex flex-column gap-3">
                                                <div className=" mb-3 gap-4 d-flex    ">
                                                    <div>
                                                        <img className=" image image-img " src={JennyWilson} alt="new feature note " />
                                                    </div>
                                                    <div className="col-md-3 d-flex flex-column gap-2 align-items-baseline">
                                                        <span className="fw-bold fs-6">
                                                            Kathryn Murphy
                                                        </span>
                                                        <span >
                                                            Written Test
                                                        </span>
                                                    </div>
                                                    <div className="col-md-3 d-flex flex-column gap-2 align-items-baseline">
                                                        <span className="fw-bold fs-6">
                                                            10:00 AM - 10:30 AM
                                                        </span>
                                                        <span >
                                                            Silver Crysta Room, Nomad
                                                        </span>
                                                    </div>
                                                    <div className="ps-5 ">
                                                        <Link  >
                                                            {/* to="/" */}
                                                            <button className=" dashboard-back-to-home-btn  ">
                                                                <GoPencil className="fs-5 me-2" /> More Action
                                                            </button>
                                                            <PiDotsThreeOutlineFill className="m-2"/>
                                                        </Link>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </Container>
                                    <span className="py-4">11 may, 2024</span>
                                    <Container className="mb-4">
                                        <div className="row">
                                            <div className="total-jobs-applied-container d-flex flex-column gap-3">
                                                <div className=" mb-3 gap-4 d-flex    ">
                                                    <div>
                                                        <img className=" image image-img " src={jakeGyll} alt="new feature note " />
                                                    </div>
                                                    <div className="col-md-3 d-flex flex-column gap-2 align-items-baseline">
                                                        <span className="fw-bold fs-6">
                                                        jake Gyll
                                                        </span>
                                                        <span >
                                                        Written Test 2
                                                        </span>
                                                    </div>
                                                    <div className="col-md-3 d-flex flex-column gap-2 align-items-baseline">
                                                        <span className="fw-bold fs-6">
                                                        10:00 AM - 11:00 AM
                                                        </span>
                                                        <span >
                                                            Silver Crysta Room, Nomad
                                                        </span>
                                                    </div>
                                                    <div className="ps-5 ">
                                                        <Link  >
                                                            {/* to="/" */}
                                                            <button className=" dashboard-back-to-home-btn  ">
                                                                <GoPencil className="fs-5 me-2" /> More Action
                                                            </button>
                                                            <PiDotsThreeOutlineFill className="m-2"/>
                                                        </Link>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </Container>
                                    <span className="py-4">12 may, 2024</span>
                                    <Container className="mb-4">
                                        <div className="row">
                                            <div className="total-jobs-applied-container d-flex flex-column gap-3">
                                                <div className=" mb-3 gap-4 d-flex    ">
                                                    <div>
                                                        <img className=" image image-img " src={RodolfoGoode} alt="new feature note " />
                                                    </div>
                                                    <div className="col-md-3 d-flex flex-column gap-2 align-items-baseline">
                                                        <span className="fw-bold fs-6">
                                                        Rodolfo Goode
                                                        </span>
                                                        <span >
                                                        Skill Test
                                                        </span>
                                                    </div>
                                                    <div className="col-md-3 d-flex flex-column gap-2 align-items-baseline">
                                                        <span className="fw-bold fs-6">
                                                            11:00 AM - 11:30 AM
                                                        </span>
                                                        <span >
                                                            Silver Crysta Room, Nomad
                                                        </span>
                                                    </div>
                                                    <div className="ps-5 ">
                                                        <Link  >
                                                            {/* to="/" */}
                                                            <button className=" dashboard-back-to-home-btn  ">
                                                                <GoPencil className="fs-5 me-2" /> More Action
                                                            </button>
                                                            <PiDotsThreeOutlineFill className="m-2"/>
                                                        </Link>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </Container>
                                    <span className="py-4">13 may, 2024</span>
                                    <Container className="mb-4">
                                        <div className="row">
                                            <div className="total-jobs-applied-container d-flex flex-column gap-3">
                                                <div className=" mb-3 gap-4 d-flex    ">
                                                    <div>
                                                        <img className=" image image-img " src={LeifFloyd} alt="new feature note " />
                                                    </div>
                                                    <div className="col-md-3 d-flex flex-column gap-2 align-items-baseline">
                                                        <span className="fw-bold fs-6">
                                                        Leif Floyd
                                                        </span>
                                                        <span >
                                                        Final Test
                                                        </span>
                                                    </div>
                                                    <div className="col-md-3 d-flex flex-column gap-2 align-items-baseline">
                                                        <span className="fw-bold fs-6">
                                                            11:30 AM - 12:00 AM
                                                        </span>
                                                        <span >
                                                            Silver Crysta Room, Nomad
                                                        </span>
                                                    </div>
                                                    <div className="ps-5 ">
                                                        <Link  >
                                                            {/* to="/" */}
                                                            <button className=" dashboard-back-to-home-btn  ">
                                                                <GoPencil className="fs-5 me-2" /> More Action
                                                            </button>
                                                            <PiDotsThreeOutlineFill className="m-2"/>
                                                        </Link>
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
