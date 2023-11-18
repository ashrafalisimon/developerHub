import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobsDetails = () => {
    const jobs = useLoaderData();
    console.log(jobs);
    return (
        <div>
            <h1>This jobs Details page</h1>
        </div>
    );
};

export default JobsDetails;