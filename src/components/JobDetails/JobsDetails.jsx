import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import jobTitleIcon from '../../assets/icons/calendar.png';
import emailIcon from '../../assets/icons/email.png';
import loactionIcon from '../../assets/icons/location2.png';
import salaryIcon from '../../assets/icons/money.png';
import phoneIcon from '../../assets/icons/phone.png';
import { saveJobApplication } from '../../utilities/fakedb';

const JobsDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt);
    const { logo, job_title, company_name, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information } = job;
    const handleApplyJob = () =>{
        saveJobApplication(idInt);
        toast('You have applied successfully');
    }

    return (
        <>
            <div className=" py-12 text-center bg-gradient-to-r from-my-light-blue1 to-my-light-blue2">
                <h1 className="text-my-black text-3xl font-bold sm:text-4xl">
                    Job Detalils
                </h1>
            </div>
            <section className="mt-12 mb-8 mx-auto px-4 max-w-screen-xl md:px-8 grid grid-flow-row-dense grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <div className="col-span-2">
                    <p className='mt-3 text-my-black'><span className='font-bold'>Job Description:</span> {job_description}</p>
                    <p className='mt-3 text-my-black'><span className='font-bold'>Job Responsibility:</span> {job_responsibility}</p>
                    <p className='mt-2 text-my-black'><span className='font-bold block'>Educational Requirements:</span >{educational_requirements} <span></span></p>
                    <p className='mt-2 text-my-black'><span className='font-bold block'>Experiences:</span> <span>{experiences}</span></p>
                </div>
                <div>
                    <div className='p-8 rounded-lg bg-gradient-to-r from-my-light-blue1 to-my-light-blue2 w-96'>
                        <h5 className='font-bold  text-my-black text-lg'>Job Details</h5>
                        <hr className='my-4  text-my-light-blue4' />
                        <div className='flex mt-2'>
                            <img src={salaryIcon} className='mr-2 h-6 w-6' alt="" />
                            <span className='text-my-black'><strong>Salary:</strong> {salary}</span>
                        </div>
                        <div className='flex mt-2'>
                            <img src={jobTitleIcon} className='mr-2 h-6 w-6' alt="" />
                            <span className='text-my-black'><strong>Job Title:</strong> {job_title}</span>
                        </div>

                        <div>
                            <h5 className='font-bold mt-8 text-my-black text-lg'>Contact Information</h5>
                            <hr className='my-4  text-my-light-blue4' />
                            <div className='flex mt-2'>
                                <img src={phoneIcon} className='mr-2 h-6 w-6' alt="" />
                                <span className='text-my-black'><strong>Phone:</strong> {contact_information.phone}</span>
                            </div>
                            <div className='flex mt-2'>
                                <img src={emailIcon} className='mr-2 h-6 w-6' alt="" />
                                <span className='text-my-black'><strong>Email:</strong> {contact_information.email}</span>
                            </div>
                            <div className='flex mt-2'>
                                <img src={loactionIcon} className='mr-2 h-6 w-6' alt="" />
                                <span className='text-my-black'><strong>Address:</strong> {contact_information.address}</span>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 w-96'>
                    <button onClick={handleApplyJob} className="py-3 text-center font-bold w-full text-my-white  bg-gradient-to-r from-my-blue1 to-my-blue2 rounded-md shadow">
                    Apply Now
                    </button>
                    </div>
                    <ToastContainer />
                </div>
            </section></>
    );
};

export default JobsDetails;