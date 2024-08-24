import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const JobForm = ({ onAddJob }) => {
    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    const [dateApplied, setDateApplied] = useState('');
    const [status, setStatus] = useState('Applied');
    const [notes, setNotes] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddJob({ company, position, dateApplied, status, notes });
        setCompany('');
        setPosition('');
        setDateApplied('');
        setStatus('Applied');
        setNotes('');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formCompany">
                <Form.Label>Company</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter company name" 
                    value={company}
                    onChange={(e) => setCompany(e.target.value)} 
                    required 
                />
            </Form.Group>

            <Form.Group controlId="formPosition">
                <Form.Label>Position</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter position title" 
                    value={position}
                    onChange={(e) => setPosition(e.target.value)} 
                    required 
                />
            </Form.Group>

            <Form.Group controlId="formDateApplied">
                <Form.Label>Date Applied</Form.Label>
                <Form.Control 
                    type="date" 
                    value={dateApplied}
                    onChange={(e) => setDateApplied(e.target.value)} 
                    required 
                />
            </Form.Group>

            <Form.Group controlId="formStatus">
                <Form.Label>Status</Form.Label>
                <Form.Control 
                    as="select" 
                    value={status}
                    onChange={(e) => setStatus(e.target.value)} 
                >
                    <option>Applied</option>
                    <option>Interview Scheduled</option>
                    <option>Offer Received</option>
                    <option>Rejected</option>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="formNotes">
                <Form.Label>Notes</Form.Label>
                <Form.Control 
                    as="textarea" 
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)} 
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Add Job
            </Button>
        </Form>
    );
}

export default JobForm;
