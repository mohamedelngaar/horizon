import { useState } from "react";
import { Button, Collapse, Container, Nav } from "react-bootstrap";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FiHelpCircle } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineClipboardList } from "react-icons/hi";
import { IoBusinessOutline } from "react-icons/io5";
import { HiOutlineCalendar } from "react-icons/hi";


// import firstSidebarShape from "../../assets/images/sidebar-first-shape.png";
// import secondSidebarShape from "../../assets/images/sidebar-second-shape.png";

import "./Dashboard.css";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="d-flex">
      <div className={`sidebar ${open ? "open" : "closed"}`}>
        <Nav className="flex-column gap-2 mt-5">
          <Nav.Link
            as={Link}
            to="/dashboard"
            className="d-flex align-items-center gap-3"
          >
            <IoHomeOutline className="fs-4" />
            {open && "Dashboard"}
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="messages"
            className="d-flex align-items-center gap-3"
          >
            <MdOutlineMessage className="fs-4 text-primary" />
            {open && "Messages"}
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="candidates"
            className="d-flex align-items-center gap-3"
          >
            <IoBusinessOutline className="fs-4" />
            {open && "Candidates"}
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="jobListing"
            className="d-flex align-items-center gap-3"
          >
            <HiOutlineClipboardList className="fs-4 text-primary " />
            {open && "Job Listing"}
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="profile"
            className="d-flex align-items-center gap-3"
          >
            <HiOutlineClipboardList className="fs-4 " />
            {open && "Tools"}
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="interviewsDash"
            className="d-flex align-items-center gap-3"
          >
            <HiOutlineCalendar className="fs-4" />
            {open && "Interviews"}
          </Nav.Link>
          <hr className="sidebar-hr" />
          {open && <span className="sidebar-settings-text">Settings</span>}
          <Nav.Link
            as={Link}
            to="settings"
            className="d-flex align-items-center gap-3"
          >
            <IoSettingsOutline className="fs-4 " />
            {open && "Settings"}
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="help"
            className="d-flex align-items-center gap-3 "
          >
            <FiHelpCircle className="fs-4" />
            {open && "Help Center"}
          </Nav.Link>
        </Nav>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="sidebar"
          aria-expanded={open}
          className="mb-3 sidebar-collapse-btn"
        >
          {open ? (
            <FaArrowLeft className="left-arrow-sidebar" />
          ) : (
            <FaArrowRight className="right-arrow-sidebar" />
          )}
        </Button>
        {/* <img
          src={firstSidebarShape}
          className="first-sidebar-shape"
          alt="first-sidebar-shape"
        />
        <img
          src={secondSidebarShape}
          className="second-sidebar-shape"
          alt="second-sidebar-shape"
        /> */}
      </div>
      <div className="content">
        <Container className="mb-4">
          <Outlet />
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
