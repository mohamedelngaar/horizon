import React from "react";
import { Container, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useUserInfo } from "../../customHooks/userInfo";
import { HiOutlineCalendar } from "react-icons/hi";
import BarChart from "../../assets/images/Bar Cart.png";
import { RiCheckboxBlankFill } from "react-icons/ri";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { HiOutlineClipboardList } from "react-icons/hi";
import Nomad from "../../assets/images/Nomad.png";
import DropBox from "../../assets/images/Drop Box.png";
import Terraform from "../../assets/images/Terraform.png";
import ClasspassLogo from "../../assets/images/ClasspassLogo.png";
import { LuHelpCircle } from "react-icons/lu";
import { IoNotificationsOutline } from "react-icons/io5";
import { TbMessage2 } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { MdArrowForwardIos } from "react-icons/md";
import { IoArrowForward } from "react-icons/io5";
import "./Dashboard.css";




const Home = () => {
  const userInfo = useUserInfo();

  return (
    <div className="home-dashboard-main-container">
      <Container className="mb-4 mt-4 home-dashboard-main-container">
        <div className="d-flex align-items-center justify-content-between">

          <div className=" d-flex align-items-center justify-content-center">
            <div className=" m-4 fs-3"><LuHelpCircle />Help</div>
            <div className=" m-4 fs-3"><IoNotificationsOutline />Notifications</div>
            <div className=" m-4 fs-3"><TbMessage2 />Messages</div>
          </div>
          <hr />
          <div className=" fs-3"><BiUser />Company Name</div>
        </div>
      </Container>
      <hr />
      <Container className="py-3">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex flex-column gap-2 ">
            <span className="fw-bold fs-4">
              Good morning, Mostafa{" "}
              <span className="fw-bold fs-2 text-uppercase">
                {userInfo?.name}
              </span>
            </span>
            <span>
              Here is your job listings statistic report from July 19 - July 25.
            </span>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <Button variant="outline-secondary">Jul 19 - Jul 25 <HiOutlineCalendar className="fs-4 mb-1" /></Button>
          </div>
        </div>
      </Container>
      <Container>
        <div className=" m-3 row">
          <div className=" col-md-3 bg-primary py-3 text-white d-flex align-items-center justify-content-between">
            <div className=" d-flex align-items-center">
              <span className="fw-bolder fs-1">76</span>
              <span className=" m-3">New candidates to review </span>
            </div>
            <MdArrowForwardIos />
          </div>
          <div className=" col-md-1"></div>
          <div className=" col-md-3 bg-success py-3 text-white d-flex align-items-center justify-content-between">
            <div className=" d-flex align-items-center">
              <span className="fw-bolder fs-1">3</span>
              <span className=" m-3">Schedule for today </span>
            </div>
            <MdArrowForwardIos />
          </div>
          <div className=" col-md-1"></div>
          <div className=" col-md-3 bg-info py-3 text-white d-flex align-items-center justify-content-between">
            <div className=" d-flex align-items-center">
              <span className="fw-bolder fs-1">24</span>
              <span className=" m-3">Messages received </span>
            </div>
            <MdArrowForwardIos />
          </div>
        </div>
      </Container>
      <Container>
        <div className="row">
          <div className="col-md-8 mt-4">
            <div className="total-jobs-applied-container d-flex flex-column gap-3">
              <Container className="py-3">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex flex-column gap-2 ">
                    <span className="fw-bold fs-4">
                      Job statistics{" "}
                      <span className="fw-bold fs-2 text-uppercase">
                        {userInfo?.name}
                      </span>
                    </span>
                    <span>
                      Showing Jobstatistic Jul 19-25
                    </span>
                  </div>
                  <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button type="button" class="btn btn-primary">Week</button>
                    <button type="button" class="btn btn-outline-primary">Month</button>
                    <button type="button" class="btn btn-outline-primary">Year</button>
                  </div>
                </div>
              </Container>
              <div class="col-md-5 d-flex align-items-center justify-content-between btn-group me-2" role="group" aria-label="First group">
                <Link class=" link-offset-2 link-underline link-underline-opacity-0  ">Overview</Link>
                <Link class=" link-underline-opacity-0 link-dark">Jobs View</Link>
                <Link class=" link-underline-opacity-0 link-dark">Jobs Applied</Link>
              </div>
              <div className="row">
                <div className="col-md-7 mt-4">
                  <div className="d-flex flex-column gap-4">
                    <div className=" d-flex flex-column gap-3">
                      <img
                        src={BarChart}
                        alt="main-content-graph"
                        className="main-content-graph"
                      />
                     
                    </div>
                  </div>
                </div>
                <div className="col-md-5 mt-4">
                  <div className="d-flex flex-column gap-3">
                    <div className="total-jobs-applied-container d-flex flex-column gap-1">
                      <div className="d-flex align-items-center justify-content-between">
                        <span className="fw-bold fs-5">Job Views</span>
                        <IoEyeOutline className=" fs-4 text-primary" />
                      </div>
                      <span className="fw-bolder fs-1">2,342</span>
                      <div className=" fs-5">
                        <span >This Week </span>
                        <span className=" fs-5 text-success">6.4% <FaCaretUp /> </span>
                      </div>
                    </div>
                    <div className="total-jobs-applied-container d-flex flex-column gap-1">
                      <div className="d-flex align-items-center justify-content-between">
                        <span className="fw-bold fs-5">Job Applied</span>
                        <HiOutlineClipboardList className=" fs-4 text-dark" />
                      </div>
                      <span className="fw-bolder fs-1">654</span>
                      <div className=" fs-5">
                        <span >This Week </span>
                        <span className=" text-danger">0.5% <FaCaretDown /> </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-4">
            <div className="d-flex flex-column gap-4">
              <div className="total-jobs-applied-container d-flex flex-column gap-3">
                <span className="fw-bold fs-6">Job Open</span>
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <span className="fw-bolder fs-1">12</span>
                    <span>Job Opened</span>
                  </div>
                </div>
              </div>
              <div className="total-jobs-applied-container d-flex flex-column gap-3">
                <span className="fw-bold fs-6">Applicants Summary</span>
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <span className="fw-bolder fs-1">67</span>
                    <span>Applicants</span>
                  </div>
                </div>
                <ProgressBar>
                  <ProgressBar variant="success" now={25} key={1} />
                  <ProgressBar variant="warning" now={10} key={2} />
                  <ProgressBar variant="secondary" now={25} key={3} />
                  <ProgressBar variant="danger" now={15} key={4} />
                  <ProgressBar variant="info" now={25} key={5} />
                </ProgressBar>
                <div>
                  <RiCheckboxBlankFill className="m-3 text-success" />Full Time : 25
                  <RiCheckboxBlankFill className="m-3 text-warning" /> Remote : 10
                </div>
                <div>
                  <RiCheckboxBlankFill className="m-3 text-secondary" /> Part-Time : 25
                  <RiCheckboxBlankFill className="m-3 text-danger" /> Contract : 15
                </div>
                <div><RiCheckboxBlankFill className="m-3 text-info" />Internship : 25  </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container>
        <div className="mt-5 total-jobs-applied-container">
          <div className="recent-apps-container d-flex align-items-center justify-content-between">
            <span className="fw-bold fs-4">Job Updates</span>
            <Link class="fs-5 link-offset-2 link-underline link-underline-opacity-0 " >View All <IoArrowForward /></Link>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-3 mt-4">
              <div className="d-flex flex-column gap-3 ">
                <div className=" total-jobs-applied-container d-flex flex-column gap-1">
                  <div className="mb-2 d-flex align-items-center justify-content-between">
                    <img className="w-25 " src={Nomad} alt="Nomad" />
                    <button className=" mt-2 btn btn-outline-success rounded-pill">Full-Time</button>
                  </div>
                  <span className="fw-bold fs-6">Social Media Assistant</span>
                  <span >Nomad . Paris, France</span>
                  <div className=" mb-3 d-flex align-items-center justify-content-center">
                    <button className=" m-2 mt-2 btn btn-outline-warning rounded-pill">Marketing</button>
                    <button className="m-2 mt-2 btn btn-outline-primary rounded-pill">Design</button>
                  </div>
                  <div class="progress " role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="50">
                    <div class="progress-bar bg-success w-50" ></div>
                  </div>
                  <div className=" fs-6">
                    <span className=" fw-bold">5 applied </span>
                    <span > of 10 capacity </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-4">
              <div className=" d-flex flex-column gap-3 ">
                <div className="total-jobs-applied-container d-flex flex-column gap-1">
                  <div className="mb-2 d-flex align-items-center justify-content-between">
                    <img className="w-25 " src={DropBox} alt="DropBox" />
                    <button className=" mt-2 btn btn-outline-success rounded-pill">Full-Time</button>
                  </div>
                  <span className="fw-bold fs-6">Brand Designer</span>
                  <span >DropBox . Paris, France</span>
                  <div className=" mb-3 d-flex align-items-center justify-content-center">
                    <button className=" m-2 mt-2 btn btn-outline-success rounded-pill">Business</button>
                    <button className="m-2 mt-2 btn btn-outline-primary rounded-pill">Design</button>
                  </div>
                  <div class="progress " role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="50">
                    <div class="progress-bar bg-success w-50" ></div>
                  </div>
                  <div className=" fs-6">
                    <span className=" fw-bold">5 applied </span>
                    <span > of 10 capacity </span>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-md-3 mt-4">
              <div className=" d-flex flex-column gap-3 ">
                <div className="total-jobs-applied-container d-flex flex-column gap-1">
                  <div className="mb-2 d-flex align-items-center justify-content-between">
                    <img className="w-25 " src={Terraform} alt="Terraform" />
                    <button className=" mt-2 btn btn-outline-success rounded-pill">Full-Time</button>
                  </div>
                  <span className="fw-bold fs-6">Interactive Developer</span>
                  <span >Terraform . Berlin, Germany</span>
                  <div className=" mb-3 d-flex align-items-center justify-content-center">
                    <button className=" m-2 mt-2 btn btn-outline-warning rounded-pill">Marketing</button>
                    <button className="m-2 mt-2 btn btn-outline-primary rounded-pill">Design</button>
                  </div>
                  <div class="progress " role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="50">
                    <div class="progress-bar bg-success w-50" ></div>
                  </div>
                  <div className=" fs-6">
                    <span className=" fw-bold">5 applied </span>
                    <span > of 10 capacity </span>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-md-3 mt-4">
              <div className="d-flex flex-column gap-3 ">
                <div className="total-jobs-applied-container d-flex flex-column gap-1">
                  <div className="mb-2 d-flex align-items-center justify-content-between">
                    <img className="w-25 " src={ClasspassLogo} alt="ClasspassLogo" />
                    <button className=" mt-2 btn btn-outline-success rounded-pill">Full-Time</button>
                  </div>
                  <span className="fw-bold fs-6">Product Designer</span>
                  <span >ClassPass . Berlin, Germany</span>
                  <div className=" mb-3 d-flex align-items-center justify-content-center">
                    <button className=" m-2 mt-2 btn btn-outline-success rounded-pill">Business</button>
                    <button className="m-2 mt-2 btn btn-outline-primary rounded-pill">Design</button>
                  </div>
                  <div class="progress " role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="50">
                    <div class="progress-bar bg-success w-50" ></div>
                  </div>
                  <div className=" fs-6">
                    <span className=" fw-bold">5 applied </span>
                    <span > of 10 capacity </span>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
