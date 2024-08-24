import React from 'react';
import { Card } from 'react-bootstrap';

const Dashboard = ({ jobs }) => {
    const totalJobs = jobs.length;
    const appliedJobs = jobs.filter(job => job.status === 'Applied').length;
    const interviews = jobs.filter(job => job.status === 'Interview Scheduled').length;
    const offers = jobs.filter(job => job.status === 'Offer Received').length;
    const rejections = jobs.filter(job => job.status === 'Rejected').length;

    return (
        <div className="d-flex justify-content-between">
            <Card style={{ width: '14rem' }}>
                <Card.Body>
                    <Card.Title className="custom-card-title">Total Applications</Card.Title>
                    <Card.Text>{totalJobs}</Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '14rem' }}>
                <Card.Body>
                    <Card.Title className="custom-card-title">Applied</Card.Title>
                    <Card.Text>{appliedJobs}</Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '14rem' }}>
                <Card.Body>
                    <Card.Title className="custom-card-title">Interviews Scheduled</Card.Title>
                    <Card.Text>{interviews}</Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '14rem' }}>
                <Card.Body>
                    <Card.Title className="custom-card-title">Offers Received</Card.Title>
                    <Card.Text>{offers}</Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '14rem' }}>
                <Card.Body>
                    <Card.Title className="custom-card-title">Rejections</Card.Title>
                    <Card.Text>{rejections}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Dashboard;
