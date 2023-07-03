import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye } from 'react-icons/fa';

const EmailForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <input className='border border-slate-500 w-full px-3 py-2 rounded-md' type="text" placeholder="Your Name" {...register("Name", { required: true})} />
                {errors.Name && <p className='text-red-500'>Name field cant not be empty</p>}
            </div>

            <div className="mb-3">
                <input className='border border-slate-500 w-full px-3 py-2 rounded-md' type="email" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                {errors.Email && <p className='text-red-500'>Email field cant not be empty</p>}
            </div>

            <div className="mb-3">
                <input className='border border-slate-500 w-full px-3 py-2 rounded-md' type="text" placeholder="Subjects" {...register("Subjects", { required: true})} />
                {errors.Subjects && <p className='text-red-500'>Subjects field cant not be empty</p>}
            </div>

            
            <div className="mb-3">
                <textarea className='border border-slate-500 w-full px-3 py-2 rounded-md' type="text" placeholder="Message" {...register("Message", { required: true})} />
                {errors.Message && <p className='text-red-500'>Message field cant not be empty</p>}
            </div>

            
            <div className='text-center'>
                <input className='btn btn-danger' type="submit" value="Submit" />

            </div>
        </form>
    );
}

export default EmailForm;