import React from 'react';
import { Link } from 'react-router-dom';
import LocationIcon from '../../../assets/icons/location2.png';
import SalaryIcon from '../../../assets/icons/money.png';


const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job;
    return (
        <div className="w-full mx-auto mt-4 border border-my-light-blue4 p-4 rounded-md duration-300 hover:shadow-md">
            <img src={logo} alt={job_title} className=" h-12 rounded-t-md" />
            <div>
                <h3 className='text-2xl text-my-black font-semibold'>{job_title}</h3>
                <p className='text-sm text-my-black2'>{company_name}</p>
            </div>
            <div className='my-2'>
                <button className='border border-my-blue2 text-sm mr-2 rounded-md px-2 text-my-blue2'>{remote_or_onsite}</button>
                <button className='border border-my-blue2 text-sm rounded-md px-2 text-my-blue2'>{job_type}</button>
            </div>
            <div className='flex'>
                <p className='flex mr-4'><img src={LocationIcon} alt="" /> <span className='text-my-black2 ms-2'>{location}</span></p>
                <p className='flex'><img src={SalaryIcon} alt="" /> <span className='text-my-black2 ms-2'>{salary}</span></p>
            </div>
            <Link to='' className="py-2 px-4 inline-block my-4 text-my-white  bg-gradient-to-r from-my-blue1 to-my-blue2 rounded-md shadow">
                View Details
            </Link>

        </div>
    );
};

export default Job;