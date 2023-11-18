import React from 'react';
import AccountIcon from '../../assets/icons/accounts.png';
import ChipIcon from '../../assets/icons/chip.png';
import CrativeIcon from '../../assets/icons/creative.png';
import MarketingIcon from '../../assets/icons/marketing.png';

const JobCategorySection = () => {
    const features = [
        {
            icon:`${AccountIcon}`,
            title: "Account & Finance",
            desc: "300 Jobs Available"
        },
        {
            icon:`${CrativeIcon}`,
            title: "Creative Design",
            desc: "100+ Jobs Available"
        },
        {
            icon:`${MarketingIcon}`,
            title: "Marketing & Sales",
            desc: "150 Jobs Available"
        },
        {
            icon:`${ChipIcon}`,
            title: "Engineering Job",
            desc: "224 Jobs Available"
        }
    ]
    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="relative max-w-2xl mx-auto sm:text-center">
                    <div className="relative z-10">
                        <h3 className="text-my-black text-3xl font-bold sm:text-4xl">
                        Job Category List
                        </h3>
                        <p className="mt-3 text-my-black2">
                        Explore thousands of job opportunities with all the information you need. Its your future
                        </p>
                    </div>
                </div>
                <div className="relative mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="bg-gradient-to-r from-my-light-blue1 to-my-light-blue2 space-y-3 p-4 border border-my-light-blue1 rounded-lg">
                                    <div className="bg-gradient-to-r from-my-light-blue3 to-my-light-blue4 p-2 rounded-lg inline-block">
                                       <img className='w-8 h-8' src= {item.icon} alt="" />
                                    </div>
                                    <h4 className="text-lg text-my-black font-semibold">
                                        {item.title}
                                    </h4>
                                    <p className='text-my-black2'>
                                        {item.desc}
                                    </p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default JobCategorySection;