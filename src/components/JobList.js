import React from 'react';
import { ListGroup, Button, Badge } from 'react-bootstrap';

const JobList = ({ jobs, onUpdateStatus }) => {
    return (
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
                            <Button variant="info" onClick={() => onUpdateStatus(index, 'Interview Scheduled')}>
                                Schedule Interview
                            </Button>{' '}
                            <Button variant="success" onClick={() => onUpdateStatus(index, 'Offer Received')}>
                                Mark as Offer
                            </Button>{' '}
                            <Button variant="danger" onClick={() => onUpdateStatus(index, 'Rejected')}>
                                Mark as Rejected
                            </Button>
                        </div>
                    </div>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}

export default JobList;
