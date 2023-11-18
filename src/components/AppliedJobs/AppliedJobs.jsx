import React, { useEffect, useState } from 'react';
import { getStoredJobApplication } from '../../utilities/fakedb';
import Job from '../AllJobs/Job/Job';

const AppliedJobs = () => {

    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobsFilter = filter =>{
        if(filter === 'all'){
            setDisplayJobs(appliedJobs);
        }
        else if (filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if(filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {


            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));

            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
            // console.log(jobs, storedJobIds, jobsApplied)
        }
    }, [jobs])
    return (

        <>
            <div className=" py-12 text-center bg-gradient-to-r from-my-light-blue1 to-my-light-blue2">
                <h1 className="text-my-black text-3xl font-bold sm:text-4xl">
                    Applied Jobs
                </h1>
            </div>
            <section className="mt-12 mb-8 mx-auto px-4 max-w-screen-xl md:px-8">
            <details className="dropdown">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                    <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleJobsFilter('onsite')}><a>onsite</a></li>
                </ul>
            </details>
                <div className="mt-12 grid grid-cols-1">
                    {
                        displayJobs.map(job => <Job key={job.id} job={job}></Job>)
                    }
                </div>
            </section>
        </>

    );
};

export default AppliedJobs;