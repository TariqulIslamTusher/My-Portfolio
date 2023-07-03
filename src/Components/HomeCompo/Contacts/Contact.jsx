import React from 'react';
import SectionTitle from '../../Hooks/SectionTitle';
import EmailForm from './EmailForm';

const Contact = () => {
    return (
        <div>
            <SectionTitle heading={'contacts'} subHeading={'My credentials here to help you connect me'}></SectionTitle>


            <div className='flex gap-6'>
                {/* address part */}
                <div>
                    Detail address
                </div>

                {/* form part */}
                <div>
                    <EmailForm></EmailForm>
                </div>
            </div>

        </div>
    );
};

export default Contact;