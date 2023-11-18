import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Job from '../Job/Job';

const Jobs = () => {
    const [jobs , setJobs] = useState([])
    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data =>setJobs(data))
    },[])
    return (
        <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
            <div className="text-center">
                <h1 className="text-my-black text-3xl font-bold sm:text-4xl">
                Featured Jobs
                </h1>
                <p className="mt-3 text-my-black2">
                Explore thousands of job opportunities with all the information you need. Its your future
                </p>
            </div>
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
                {
                    jobs.slice(0,4).map(job=> <Job key={job.id} job={job}></Job> )
                }
            </div>
           <div className='text-center'>
           <Link to='/jobs' className="py-2 px-4 inline-block my-4 text-my-white  bg-gradient-to-r from-my-blue1 to-my-blue2 rounded-md shadow">
                See All Jobs
            </Link>
           </div>
            
        </section>
    );
};

export default Jobs;