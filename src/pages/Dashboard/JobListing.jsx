import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUserInfo } from "../../customHooks/userInfo";
import { Container, Table, Form, Button, Pagination } from "react-bootstrap";
import { HiOutlineCalendar } from "react-icons/hi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { BsPlusLg } from "react-icons/bs";


const JobListing = ({ data = [
    { Role: <Link className="link-underline-opacity-0 link-dark" to="/dashboard/socialMedia">
        Social Media Assistant
    </Link>, Status: <Button className="w-75 rounded-pill"  variant="outline-success">live</Button>, DatePosted: '20 May 2024', DueDate: '24 May 2024', JobType: <Button className="w-75 rounded-pill" variant="outline-primary">Fulltime</Button>, Applicants: '19', Needs: '4/11' },
    { Role: 'Senior Designer', Status: <Button className="w-75 rounded-pill" variant="outline-success">live</Button>, DatePosted: '16 May 2024', DueDate: '24 May 2024', JobType: <Button className="w-75 rounded-pill" variant="outline-primary">Fulltime</Button>, Applicants: '1,234', Needs: '0/20' },
    { Role: 'Visual Designer', Status: <Button className="w-75 rounded-pill" variant="outline-success">live</Button>, DatePosted: '15 May 2024', DueDate: '24 May 2024', JobType: <Button className="w-75 rounded-pill" variant="outline-warning">Freelance</Button>, Applicants: '2,534', Needs: '1/5' },
    { Role: 'Data Sience', Status: <Button className="w-75 rounded-pill" variant="outline-danger">Closed</Button>, DatePosted: '13 May 2024', DueDate: '24 May 2024', JobType: <Button className="w-75 rounded-pill" variant="outline-warning">Freelance</Button>, Applicants: '6,234', Needs: '10/10' },
    { Role: 'Kotlin Developer', Status: <Button className="w-75 rounded-pill" variant="outline-danger">Closed</Button>, DatePosted: '11 May 2024', DueDate: '24 May 2024', JobType: <Button className="w-75 rounded-pill" variant="outline-primary">Fulltime</Button>, Applicants: '12', Needs: '20/20' },
    { Role: 'React Developer', Status: <Button className="w-75 rounded-pill" variant="outline-danger">Closed</Button>, DatePosted: '9 May 2024', DueDate: '24 May 2024', JobType: <Button className="w-75 rounded-pill" variant="outline-primary">Fulltime</Button>, Applicants: '14', Needs: '10/10' },
    { Role: 'Kotlin Developer', Status: <Button className="w-75 rounded-pill" variant="outline-danger">Closed</Button>, DatePosted: '6 May 2024', DueDate: '24 May 2024', JobType: <Button className="w-75 rounded-pill" variant="outline-primary">Fulltime</Button>, Applicants: '12', Needs: '20/20' },
    { Role: 'Visual Designer', Status: <Button className="w-75 rounded-pill" variant="outline-danger">Closed</Button>, DatePosted: '5 May 2024', DueDate: '24 May 2024', JobType: <Button className="w-75 rounded-pill" variant="outline-primary">Fulltime</Button>, Applicants: '5,234', Needs: '2/6' },
    { Role: 'Data Sience', Status: <Button className="w-75 rounded-pill" variant="outline-danger">Closed</Button>, DatePosted: '13 May 2024', DueDate: '24 May 2024', JobType: <Button className="w-75 rounded-pill" variant="outline-warning">Freelance</Button>, Applicants: '1,834', Needs: '7/11' },
    { Role: 'Kotlin Developer', Status: <Button className="w-75 rounded-pill" variant="outline-danger">Closed</Button>, DatePosted: '11 May 2024', DueDate: '24 May 2024', JobType: <Button className="w-75 rounded-pill" variant="outline-primary">Fulltime</Button>, Applicants: '18', Needs: '2/10' }
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
      item.DueDate.toLowerCase().includes(search.toLowerCase())
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
                        <Link to="/dashboard/postJob" >
                            <HiOutlineDocumentText className="fs-4 m-3"/>
                            <button className="text-white fw-bold bg-primary-color border-0 custom-padding mt-2">
                            <BsPlusLg className="fs-5 m-2"/> post job
                            </button>
                        </Link>
                    </div>
                </Container>
                <hr />
                <Container className="py-3">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex flex-column gap-2 ">
                            <span className="fw-bold fs-4">
                                Job Listing{" "}
                                <span className="fw-bold fs-2 text-uppercase">
                                    {userInfo?.name}
                                </span>
                            </span>
                            <span>
                                Here is your jobs listing status from July 19 - July 25.
                            </span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                            <Button  variant="outline-secondary">Jul 19 - Jul 25 <HiOutlineCalendar className="fs-4 mb-1"  /></Button>
                        </div>
                    </div>
                </Container>
                <div >
                    <Container className="mb-4 mt-4 home-dashboard-main-container">
                        <div className="d-flex align-items-center justify-content-between">
                            <h1 className="fw-bold fs-4" >CompanyHarizon</h1>
                            <Form>
                                <Form.Group controlId="search">
                                    <Form.Control
                                        type="text"
                                        placeholder="Filters by Role"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                    />
                                </Form.Group>
                            </Form>
                        </div>
                    </Container>
                    <Table striped bordered hover  >
                        <thead >
                            <tr>
                                {/* <th>#</th> */}
                                <th>Role</th>
                                <th>Status</th>
                                <th>Date Posted</th>
                                <th>Due Date</th>
                                <th>Job Type</th>
                                <th>Applicants</th>
                                <th>Needs</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredItems.map((item, index) => (
                                <tr key={index}>
                                    {/* <td>{indexOfFirstItem + index + 1}</td> */}
                                    <td>{item.Role}</td>
                                    <td>{item.Status}</td>
                                    <td>{item.DatePosted}</td>
                                    <td>{item.DueDate}</td>
                                    <td>{item.JobType}</td>
                                    <td>{item.Applicants}</td>
                                    <td>{item.Needs}  </td>
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


export default JobListing;
