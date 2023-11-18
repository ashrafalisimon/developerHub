import React from 'react';
import Jobs from '../AllJobs/Jobs/Jobs';
import HeroSection from '../HeroSection/HeroSection';
import JobCategorySection from '../JobCategorySection/JobCategorySection';

const HomePage = () => {
    return (
        <>
         <HeroSection/>  
         <JobCategorySection/>
         <Jobs/>
        </>
    );
};

export default HomePage;