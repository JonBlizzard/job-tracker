import React, { useState } from 'react';
import { ListGroup, Button, Badge, Modal, Form } from 'react-bootstrap';

const JobList = ({ jobs, onUpdateStatus, onDeleteJob, onEditJob }) => {
    const [showModal, setShowModal] = useState(false);
    const [currentJob, setCurrentJob] = useState(null);
    const [updatedJob, setUpdatedJob] = useState({});

    const handleEditClick = (job, index) => {
        setCurrentJob({ ...job, index });
        setUpdatedJob(job);
        setShowModal(true);
    };

    const handleSave = () => {
        onEditJob(currentJob.index, updatedJob);
        setShowModal(false);
    };

    return (
        <>
            <ListGroup>
                {jobs.map((job, index) => (
                    <ListGroup.Item key={index}>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <h5>{job.position} at {job.company}</h5>
                                <p>Date Applied: {job.dateApplied}</p>
                                <p>Status: <Badge variant="secondary">{job.status}</Badge></p>
                                <p>Notes: {job.notes}</p>
                            </div>
                            <div>
                                <Button variant="info" onClick={() => handleEditClick(job, index)}>Edit</Button>{' '}
                                <Button variant="danger" onClick={() => onDeleteJob(index)}>Delete</Button>
                            </div>
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Job</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Company</Form.Label>
                            <Form.Control
                                type="text"
                                value={updatedJob.company}
                                onChange={(e) => setUpdatedJob({ ...updatedJob, company: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Position</Form.Label>
                            <Form.Control
                                type="text"
                                value={updatedJob.position}
                                onChange={(e) => setUpdatedJob({ ...updatedJob, position: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Date Applied</Form.Label>
                            <Form.Control
                                type="date"
                                value={updatedJob.dateApplied}
                                onChange={(e) => setUpdatedJob({ ...updatedJob, dateApplied: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Status</Form.Label>
                            <Form.Control
                                as="select"
                                value={updatedJob.status}
                                onChange={(e) => setUpdatedJob({ ...updatedJob, status: e.target.value })}
                            >
                                <option>Applied</option>
                                <option>Interview Scheduled</option>
                                <option>Offer Received</option>
                                <option>Rejected</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Notes</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={updatedJob.notes}
                                onChange={(e) => setUpdatedJob({ ...updatedJob, notes: e.target.value })}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default JobList;
