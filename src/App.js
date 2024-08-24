import React, { useState, useEffect } from 'react';
import NavigationBar from './components/Navbar';
import JobForm from './components/JobForm';
import JobList from './components/JobList';
import Dashboard from './components/Dashboard';
import { Container } from 'react-bootstrap';

const App = () => {
    const [jobs, setJobs] = useState([]);

    // Load jobs from local storage when the component mounts
    useEffect(() => {
        const savedJobs = localStorage.getItem('jobs');
        if (savedJobs) {
            setJobs(JSON.parse(savedJobs));
        }
    }, []);

    // Function to save jobs to local storage
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

    return (
        <div>
            <NavigationBar />
            <Container className="mt-4">
                <h2 id="add-job">Add New Job</h2>
                <JobForm onAddJob={addJob} />
                <h2 className="mt-5" id="dashboard">Dashboard</h2>
                <Dashboard jobs={jobs} />
                <h2 className="mt-5">Job List</h2>
                <JobList jobs={jobs} onUpdateStatus={updateJobStatus} />
            </Container>
        </div>
    );
}

export default App;
