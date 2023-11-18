import React from 'react';
import { Link } from 'react-router-dom';
import UserImage from '../../assets/images/user.png';

const HeroSection = () => {

    return (
        <section className='bg-gradient-to-r from-my-light-blue1 to-my-light-blue2' >
            <div className=" mx-auto max-w-screen-xl px-4 items-center lg:flex md:px-8">
                <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                    <h1 className="text-my-black font-bold text-4xl xl:text-5xl">
                        One Step Closer
                        <span className='block py-4'>To Your </span>
                        <span className="text-my-blue2"> Dream Job</span>
                    </h1>
                    <p className="text-my-black2 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                        Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                    </p>
                    <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                        <Link to='/jobs' className="py-3 px-4 text-my-white  bg-gradient-to-r from-my-blue1 to-my-blue2 rounded-md shadow">
                            Get started
                        </Link>
                    </div>
                </div>
                <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
                    <img src={UserImage} className="w-full mx-auto sm:w-10/12  lg:w-full" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;