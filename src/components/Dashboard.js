import React from 'react';
import { Card } from 'react-bootstrap';

const Dashboard = ({ jobs }) => {
    const totalJobs = jobs.length;
    const appliedJobs = jobs.filter(job => job.status === 'Applied').length;
    const interviews = jobs.filter(job => job.status === 'Interview Scheduled').length;
    const offers = jobs.filter(job => job.status === 'Offer Received').length;
    const rejections = jobs.filter(job => job.status === 'Rejected').length;

    return (
        <div className="d-flex justify-content-around">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Total Applications</Card.Title>
                    <Card.Text>{totalJobs}</Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Applied</Card.Title>
                    <Card.Text>{appliedJobs}</Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Interviews Scheduled</Card.Title>
                    <Card.Text>{interviews}</Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Offers Received</Card.Title>
                    <Card.Text>{offers}</Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Rejections</Card.Title>
                    <Card.Text>{rejections}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Dashboard;
