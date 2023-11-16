import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogo from '../../assets/icons/social.png';

const Footer = () => {
    const footerNavs = [
       {
            label: "Company",
            items: [
                {
                    to: '',
                    name: 'About Us'
                },
                {
                    to: '',
                    name: 'Work'
                },
                {
                    to: '',
                    name: 'Latest News'
                },
                {
                    to: '',
                    name: 'Careers'
                },
            ],
        },
        {
            label: "Product",
            items: [
                {
                    to: '',
                    name: 'Prototype'
                },
                {
                    to: '',
                    name: 'Plans & Pricing'
                },
                {
                    to: '',
                    name: 'Customers'
                },
                {
                    to: '',
                    name: 'Integrations'
                },
            ]
        },
        {
            label: "Support",
            items: [
                {
                    to: '',
                    name: 'Help Desk'
                },
                {
                    to: '',
                    name: 'Sales'
                },
                {
                    to: '',
                    name: 'Become a Partner'
                },
                {
                    to: '',
                    name: 'Developers'
                },
            ]
        },
        {
            label: "Contact",
            items: [
                {
                    name: '524 Broadway , NYC'
                },
                {
                    name: '+1 777 - 978 - 5570'
                }
            ],
        }
    ]
    return (
        <footer className="pt-10 bg-my-black">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="flex-1 mt-16 space-y-6 justify-between items-start md:flex md:space-y-0">
                    <div className='space-y-4 text-my-light-white'>
                        <h4 className='text-3xl font-bold text-my-white'>developerHub</h4>
                        <p className=' md:w-52 text-md'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                        <img src={SocialLogo} alt="" />
                    </div>
                    {
                        footerNavs.map((item, idx) => (
                            <ul
                                className="space-y-4 text-my-light-white"
                                key={idx}
                            >
                                <h4 className="text-my-white text-xl font-semibold sm:pb-2">
                                    {item.label}
                                </h4>
                                {
                                    item.items.map(((el, idx) => (
                                        <li key={idx}>
                                            <Link
                                                to={el.to}
                                                className="text-md font-extralight"

                                            >
                                                {el.name}
                                            </Link>
                                        </li>
                                    )))
                                }
                            </ul>
                        ))
                    }
                </div>
                <div className="mt-10 py-10 border-t border-gray-700 items-center justify-between sm:flex">
                    <p className="text-my-light-white40">© 2023 <span className='text-my-light-white'>developerHub</span>. All Rights Reserved.</p>
                    <div className="flex items-center gap-x-6 text-my-light-white40 mt-6">
                        <p>Powered by <span className='text-my-light-white'>developerHub</span></p>
                    </div>
                </div>
            </div>
        </footer>    );
};

export default Footer;