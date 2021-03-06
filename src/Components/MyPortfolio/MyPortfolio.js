import React from 'react';
import profilePic from '../../images/main_copy.jpeg';

const MyPortfolio = () => {
    return (
        <>
        <h1 className='text-3xl mt-8 font-bold'>PORTFOLIO</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mx-4 md:mx-16 my-8'>
            <div className='bg-gray-200 p-12 rounded-xl'>
                <img src={profilePic} alt="" className='w-[250px] mx-auto rounded-lg mb-4'/>
                <h2 className='text-2xl'>Md. Mahiuddin Habib</h2>
                <a href="mailto:mh.habib137@gmail.com">mh.habib137@gmail.com</a>
            </div>
            <div className='bg-gray-200 md:text-left p-12 rounded-xl'>
                <h3 className='text-2xl font-semibold'>Educational Info</h3>
                <p>studying BSC Engg. in Computer Science and Engineering </p>
                <p className='mb-4'>Mawlana Bhasani Science and Technology University</p>

                <h3 className='text-2xl font-semibold'>Skills</h3>
                <p>1. Learned ReactJs, Javascript, Tailwind css, Bootstrap, vanilla css and so on</p>
                <p className='mb-4'>2. Fluent in English</p>

                <h3 className='text-2xl font-semibold'>Projects I've done</h3>
                <ul>
                    <li><a href="https://books-warehouse-e0226.web.app/">1. Books Warehouse</a></li>
                    <li><a href="https://health-corner-a79d1.web.app/">2. Health Corner</a></li>
                    <li><a href="https://product-analysis-car.netlify.app/">3. Car Mania</a></li>
                </ul>
            </div>
        </div>
        </>
    );
};

export default MyPortfolio;