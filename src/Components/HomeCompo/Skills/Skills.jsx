import React from 'react';
import SectionTitle from '../../Hooks/SectionTitle';
import SkillCards from './SkillCards';


const Skills = () => {
    
    return (
        <div className='m-10'>
            <SectionTitle heading='My Skills' subHeading='My Speciality'></SectionTitle>

            <div>
                <p className='text-slate-500'>
                The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.
                </p>
            </div>

            {/* Skills cards */}

            <SkillCards></SkillCards>

        </div>
    );
};

export default Skills;