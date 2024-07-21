import React from "react";
import { Container, Form, InputGroup } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Link } from "react-router-dom";
import { useUserInfo } from "../../customHooks/userInfo";
import "./Dashboard.css";
import { FaArrowLeft } from "react-icons/fa";
import FirstStep from "../../../src/assets/images/FirstStep.png";
import Second from "../../../src/assets/images/Second.png";
import Third from "../../../src/assets/images/Third.png";
import Attachone from "../../../src/assets/images/Attachone.png";
import { BsPlusLg } from "react-icons/bs";
import Full from "../../../src/assets/images/Full.png";
import Un from "../../../src/assets/images/Un.png";
import skill from "../../../src/assets/images/skill.png";
import { IoMdClose } from "react-icons/io";


const ThirdStep = () => {
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
                <img className=" image image-img " src={Third} alt="new feature note " />
              </div>
              <div className=" d-flex flex-column gap-2 align-items-baseline">
                <span className="fw-bold fs-6 text-primary">
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
          List out your top perks and benefits.
        </span>
      </div>
      <hr />
      <div className="d-flex align-items-center">
        <div className=" col-md-4 mb-3 d-flex flex-column">
          <span className=" mb-1 fw-bold fs-6">Perks and Benefits</span>
          <span className=" col-md-6" >
            Encourage more people to apply by sharing the attractive rewards and benefits you offer your employees
          </span>
        </div>
        <div className="col-md-6 d-flex flex-column ">
          <Link >
            {/* to="/" */}
            <button className="mb-2 dashboard-back-to-home-btn  ">
              <BsPlusLg className="fs-5 me-2" /> Add Skills
            </button>
          </Link>
          <div className=" d-flex flex-row">
            <Container className=" me-2 mb-2 total-jobs-applied-container ">
              <div className=" d-flex flex-row justify-content-between ">
                <img
                  src={Full}
                  alt="main-content-graph"
                  className="mb-2 col-md-2  main-content-graph"
                 
                />
                <IoMdClose className=" fs-4"></IoMdClose>
              </div>
              <div className=" mb-3 d-flex flex-column">
                <span className=" mb-1 fw-bold fs-6">Full Healthcare</span>
                <span className=" col-md-6" >
                We believe in thriving communities and that starts with our team being happy and healthy.                </span>
              </div>
            </Container>
              <Container className="mb-2 total-jobs-applied-container ">
                <div className=" d-flex flex-row justify-content-between ">
                  <img
                    src={Un}
                    alt="main-content-graph"
                    className="mb-2 col-md-2  main-content-graph"
                  />
                  <IoMdClose className=" fs-4"></IoMdClose>
                </div>
                <div className=" mb-3 d-flex flex-column">
                  <span className=" mb-1 fw-bold fs-6">Unlimited Vacation</span>
                  <span className=" col-md-6" >
                  We believe you should have a flexible schedule that makes space for family, wellness, and fun.                  </span>
                </div>
              </Container>
            
          </div>
          <div className="col-md-6">
            <Container className=" total-jobs-applied-container ">
              <div className=" d-flex flex-row justify-content-between ">
                <img
                  src={skill}
                  alt="main-content-graph"
                  className="mb-2 col-md-2  main-content-graph"
                />
                <IoMdClose className=" fs-4"></IoMdClose>
              </div>
              <div className=" mb-3 d-flex flex-column">
                <span className=" mb-1 fw-bold fs-6">Skill Development</span>
                <span className=" col-md-6" >
                We believe in always learning and leveling up our skills. Whether it's a conference or online course.                </span>
              </div>
            </Container>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ThirdStep;


