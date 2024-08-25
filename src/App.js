import React, { useState, useEffect } from 'react';
import NavigationBar from './components/Navbar';
import JobForm from './components/JobForm';
import JobList from './components/JobList';
import Dashboard from './components/Dashboard';
import { Container } from 'react-bootstrap';

const App = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const savedJobs = localStorage.getItem('jobs');
        if (savedJobs) {
            setJobs(JSON.parse(savedJobs));
        }
    }, []);

    const saveJobsToLocalStorage = (jobs) => {
        localStorage.setItem('jobs', JSON.stringify(jobs));
    };

    const addJob = (job) => {
        const updatedJobs = [...jobs, job];
        setJobs(updatedJobs);
        saveJobsToLocalStorage(updatedJobs);
    };

    const updateJobStatus = (index, newStatus) => {
        const updatedJobs = jobs.map((job, i) => (
            i === index ? { ...job, status: newStatus } : job
        ));
        setJobs(updatedJobs);
        saveJobsToLocalStorage(updatedJobs);
    };

    const deleteJob = (index) => {
        const updatedJobs = jobs.filter((_, i) => i !== index);
        setJobs(updatedJobs);
        saveJobsToLocalStorage(updatedJobs);
    };

    const editJob = (index, updatedJob) => {
        const updatedJobs = jobs.map((job, i) => (
            i === index ? updatedJob : job
        ));
        setJobs(updatedJobs);
        saveJobsToLocalStorage(updatedJobs);
    };

    return (
        <div>
            <NavigationBar />
            <Container className="mt-4">
                <h2 id="add-job">Add New Job</h2>
                <JobForm onAddJob={addJob} />
                <h2 className="mt-5" id="dashboard">Dashboard</h2>
                <Dashboard jobs={jobs} />
                <h2 className="mt-5">Job List</h2>
                <JobList jobs={jobs} onUpdateStatus={updateJobStatus} onDeleteJob={deleteJob} onEditJob={editJob} />
            </Container>
        </div>
    );
};

export default App;
