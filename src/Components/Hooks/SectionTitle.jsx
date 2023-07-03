import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='text-center mx-auto md:w-3/5 md:mt-8'>
            <p className='text-yellow-700 py-3 font-mono'>---{subHeading}---</p>
            <h2 className='md:text-5xl uppercase'>{heading}</h2>
        </div>
    );
};

export default SectionTitle;