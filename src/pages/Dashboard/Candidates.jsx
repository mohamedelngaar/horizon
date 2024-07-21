import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUserInfo } from "../../customHooks/userInfo";
import { Container, Table, Form, Button, Pagination } from "react-bootstrap";
import { HiOutlineCalendar } from "react-icons/hi";
import { HiOutlineDocumentText } from "react-icons/hi";
import jakeGyll from "../../../src/assets/images/Jake Gyll.png";
import GuyHawkins from "../../../src/assets/images/Guy Hawkins.png";
import CyndyLillibridge from "../../../src/assets/images/Cyndy Lillibridge.png";
import RodolfoGoode from "../../../src/assets/images/Rodolfo Goode.png";
import LeifFloyd from "../../../src/assets/images/Leif Floyd.png";
import JennyWilson from "../../../src/assets/images/Jenny Wilson.png";
import JeromeBell from "../../../src/assets/images/Jerome Bell.png";
import EleanorPena from "../../../src/assets/images/Eleanor Pena.png";
import DarrellSteward from "../../../src/assets/images/Darrell Steward.png";
import FloydMiles from "../../../src/assets/images/Floyd Miles.png";
import { FaRegStar } from "react-icons/fa";
import { HiOutlineChevronUpDown } from "react-icons/hi2";
import "./Dashboard.css";
import { FaArrowLeft } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai";


const Candidates = ({ data = [
    {
        FullName: <Container>
            <div className="gap-4 d-flex align-items-center    ">
                <div>
                    <img className="image image-img d-flex align-items-center justify-content-center " src={jakeGyll} alt="new feature note " />
                </div>
                <div className="d-flex flex-column gap-2">
                    <span className="fw-bold ">
                        Jake Gyll
                    </span>

                </div>
            </div>
        </Container>, Score: <><FaRegStar className="w-50" /> 0.0</>, HiringStage: <Button className="w-75 rounded-pill" variant="outline-warning">In Review</Button>, AppliedDate: '20 July 2024', Action: <Link to="/dashboard/applicant" >
           
            <button className="dashboard-back-to-home-btn ">
                See Application
            </button>
        </Link>

    },
    {
        FullName: <Container>
            <div className="gap-4 d-flex align-items-center    ">
                <div>
                    <img className="image image-img d-flex align-items-center justify-content-center " src={GuyHawkins} alt="new feature note " />
                </div>
                <div className="d-flex flex-column gap-2">
                    <span className="fw-bold ">
                        Guy Hawkins
                    </span>

                </div>
            </div>
        </Container>, Score: <><FaRegStar className="w-50" /> 0.0 </>, HiringStage: <Button className="w-75 rounded-pill" variant="outline-warning">In Review</Button>, AppliedDate: '16 July 2024', Action: <Link to="/dashboard/applicant" >
           
            <button className="dashboard-back-to-home-btn ">
                See Application
            </button>
        </Link>
    },
    {
        FullName: <Container>
            <div className="gap-4 d-flex align-items-center ">
                <div>
                    <img className="image image-img d-flex align-items-center justify-content-center " src={CyndyLillibridge} alt="new feature note " />
                </div>
                <div className="d-flex flex-column gap-2">
                    <span className="fw-bold ">
                        Cyndy Lillibridge
                    </span>

                </div>
            </div>
        </Container>, Score: <><FaRegStar className="w-50 text-warning " /> 4.5 </>, HiringStage: <Button className="w-75 rounded-pill" variant="outline-primary">Shortlisted</Button>, AppliedDate: '15 July 2024', Action: <Link to="/dashboard/applicant">
            
            <button className="dashboard-back-to-home-btn ">
                See Application
            </button>
        </Link>
    },
    {
        FullName: <Container>
            <div className="gap-4 d-flex align-items-center    ">
                <div>
                    <img className="image image-img d-flex align-items-center justify-content-center " src={RodolfoGoode} alt="new feature note " />
                </div>
                <div className="d-flex flex-column gap-2">
                    <span className="fw-bold ">
                        Rodolfo Goode
                    </span>

                </div>
            </div>
        </Container>, Score: <><FaRegStar className="w-50 text-warning " /> 3.75 </>, HiringStage: <Button className="w-75 rounded-pill" variant="outline-danger">Declined</Button>, AppliedDate: '13 July 2024', Action: <Link to="/dashboard/applicant">
            
            <button className="dashboard-back-to-home-btn ">
                See Application
            </button>
        </Link>
    },
    {
        FullName: <Container>
            <div className="gap-4 d-flex align-items-center    ">
                <div>
                    <img className="image image-img d-flex align-items-center justify-content-center " src={LeifFloyd} alt="new feature note " />
                </div>
                <div className="d-flex flex-column gap-2">
                    <span className="fw-bold ">
                        Leif Floyd
                    </span>

                </div>
            </div>
        </Container>, Score: <><FaRegStar className="w-50 text-warning " /> 4.8 </>, HiringStage: <Button className="w-75 rounded-pill" variant="outline-success">Hired</Button>, AppliedDate: '11 July 2024', Action: <Link to="/dashboard/applicant">
            
            <button className="dashboard-back-to-home-btn ">
                See Application
            </button>
        </Link>
    },
    {
        FullName: <Container>
            <div className="gap-4 d-flex align-items-center    ">
                <div>
                    <img className="image image-img d-flex align-items-center justify-content-center " src={JennyWilson} alt="new feature note " />
                </div>
                <div className="d-flex flex-column gap-2">
                    <span className="fw-bold ">
                        Jenny Wilson
                    </span>

                </div>
            </div>
        </Container>, Score: <><FaRegStar className="w-50 text-warning " /> 4.6 </>, HiringStage: <Button className="w-75 rounded-pill" variant="outline-success">Hired</Button>, AppliedDate: '9 July 2024', Action: <Link to="/dashboard/applicant" >
           
            <button className="dashboard-back-to-home-btn ">
                See Application
            </button>
        </Link>
    },
    {
        FullName: <Container>
            <div className="gap-4 d-flex align-items-center    ">
                <div>
                    <img className="image image-img d-flex align-items-center justify-content-center " src={JeromeBell} alt="new feature note " />
                </div>
                <div className="d-flex flex-column gap-2">
                    <span className="fw-bold ">
                        Jerome Bell
                    </span>

                </div>
            </div>
        </Container>, Score: <><FaRegStar className="w-50 text-warning " /> 4.0 </>, HiringStage: <Button className="w-75 rounded-pill" variant="outline-info">Interview</Button>, AppliedDate: '6 July 2024', Action: <Link to="/dashboard/applicant">
           
            <button className="dashboard-back-to-home-btn ">
                See Application
            </button>
        </Link>
    },
    {
        FullName: <Container>
            <div className="gap-4 d-flex align-items-center    ">
                <div>
                    <img className="image image-img d-flex align-items-center justify-content-center " src={EleanorPena} alt="new feature note " />
                </div>
                <div className="d-flex flex-column gap-2">
                    <span className="fw-bold ">
                        Eleanor Pena
                    </span>

                </div>
            </div>
        </Container>, Score: <><FaRegStar className="w-50 text-warning " /> 3.90 </>, HiringStage: <Button className="w-75 rounded-pill" variant="outline-danger">Declined</Button>, AppliedDate: '5 July 2024', Action: <Link to="/dashboard/applicant">
            
            <button className="dashboard-back-to-home-btn ">
                See Application
            </button>
        </Link>
    },
    {
        FullName: <Container>
            <div className="gap-4 d-flex align-items-center    ">
                <div>
                    <img className="image image-img d-flex align-items-center justify-content-center " src={DarrellSteward} alt="new feature note " />
                </div>
                <div className="d-flex flex-column gap-2">
                    <span className="fw-bold ">
                        Darrell Steward
                    </span>

                </div>
            </div>
        </Container>, Score: <><FaRegStar className="w-50 text-warning " /> 4.20 </>, HiringStage: <Button className="w-75 rounded-pill" variant="outline-primary">Shortlisted</Button>, AppliedDate: '13 July 2024', Action: <Link to="/dashboard/applicant" >
            
            <button className="dashboard-back-to-home-btn ">
                See Application
            </button>
        </Link>
    },
    {
        FullName: <Container>
            <div className="gap-4 d-flex align-items-center    ">
                <div>
                    <img className="image image-img d-flex align-items-center justify-content-center " src={FloydMiles} alt="new feature note " />
                </div>
                <div className="d-flex flex-column gap-2">
                    <span className="fw-bold ">
                        Floyd Miles
                    </span>

                </div>
            </div>
        </Container>, Score: <><FaRegStar className="w-50 text-warning " /> 4.10 </>, HiringStage: <Button className="w-75 rounded-pill" variant="outline-info">Interview</Button>, AppliedDate: '11 July 2024', Action: <Link to="/dashboard/applicant">
            
            <button className="dashboard-back-to-home-btn ">See Application</button>
        </Link>
    }
] }) => {

    const userInfo = useUserInfo();

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(7);
    const [search, setSearch] = useState('');

    // Get current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Filter items
    const filteredItems = currentItems.filter((item) =>
        item.AppliedDate.toLowerCase().includes(search.toLowerCase())
    );

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

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
                <div >
                    <Container className="mb-4 mt-4 home-dashboard-main-container">
                        <div className="d-flex align-items-center justify-content-between">
                            <h1 className="fw-bold fs-4" >Total Applicants : 19</h1>
                            <Form className="d-flex align-items-center justify-content-between">
                                <Form.Group controlId="search">
                                    {/* <Form.Label className="fs-4">Filters</Form.Label> */}
                                    <Form.Control
                                        type="text"
                                        placeholder="Search Applicants"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                    />
                                </Form.Group>
                                <div className="d-flex align-items-center justify-content-between"><AiOutlineBars className="fs-3 m-3"/> <span className="fw-bold fs-4">Filters</span></div>
                            </Form>
                            
                            <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                <button type="button" class="btn btn-primary">Pipeline View</button>
                                <button type="button" class="btn btn-outline-primary">Table View</button>
                            </div>
                        </div>
                    </Container>
                    <Table striped bordered hover >
                        <thead >
                            <tr>
                                <th> <input
                                    class="form-check-input custom-checkbox-filter"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                /></th>
                                <th>Full Name <HiOutlineChevronUpDown className="fs-5" /> </th>
                                <th>Score <HiOutlineChevronUpDown className="fs-5" /></th>
                                <th>Hiring Stage <HiOutlineChevronUpDown className="fs-5" /></th>
                                <th>Applied Date <HiOutlineChevronUpDown className="fs-5" /></th>
                                <th>Action <HiOutlineChevronUpDown className="fs-5" /></th>
                            </tr>
                        </thead>
                        <tbody className="py-5 ">
                            {filteredItems.map((item, index) => (
                                <tr key={index}>
                                    <td> <input
                                        class="form-check-input custom-checkbox-filter"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                    /></td>
                                    <td>{item.FullName}</td>
                                    <td>{item.Score}</td>
                                    <td>{item.HiringStage}</td>
                                    <td>{item.AppliedDate}</td>
                                    <td>{item.Action} </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <div className="d-flex align-items-center justify-content-between">
                        <h1 className="fw-bold fs-5" >Applicants per page</h1>
                        <Pagination>
                            {pageNumbers.map((number) => (
                                <Pagination.Item key={number} onClick={() => paginate(number)}>
                                    {number}
                                </Pagination.Item>
                            ))}
                        </Pagination>
                    </div>

                </div>
            </div>



        </>
    );
};


export default Candidates;
