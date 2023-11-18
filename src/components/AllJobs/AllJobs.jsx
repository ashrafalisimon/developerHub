import React, { useEffect, useState } from 'react';
import Job from './Job/Job';

const AllJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])
    return (
        <section className="mt-12 mb-8 mx-auto px-4 max-w-screen-xl md:px-8">
        <div className="text-center">
            <h1 className="text-my-black text-3xl font-bold sm:text-4xl">
            All Jobs
            </h1>
        </div>
        <div className="mt-12 grid grid-cols-1">
            {
                jobs.map(job=> <Job key={job.id} job={job}></Job> )
            }
        </div>
    </section>
    );
};

export default AllJobs;