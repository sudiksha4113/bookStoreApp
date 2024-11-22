import React from 'react'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom';

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="flex h-screen items-center justify-center">
      <div  className=" w-[600px] ">
        <div className="modal-box">
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <Link to = "/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
        </Link>
        
        <h3 className="font-bold text-lg">Contact Us</h3>
        {/*Name*/}
        <div className="mt-4 space-y-2">
            <span> Name </span>
            <br/>
            <input type = "Name" Placeholder = "Enter your Fullname" 
            className="w-80 px-3 py-1 border rounded-md outline-none"
            {...register("Name", { required: true })}
            />
            <br/>
            {errors.Name && <span className="text-sm text-red-500">This field is required</span>}

            <br/>

        </div>
        {/*Email*/}
        <div className="mt-4 space-y-2">
            <span> Email </span>
            <br/>
            <input type = "Email" Placeholder = "Enter your email" 
            className="w-80 px-3 py-1 border rounded-md outline-none"
            {...register("Email", { required: true })}
            />
            <br/>
            {errors.Email && <span className="text-sm text-red-500">This field is required</span>}

            <br/>

        </div>
        {/*Message*/}
        <div className="mt-4 space-y-2">
            <span> Message </span>
            <br/>
            <input type = "Message" Placeholder = "write a message" 
            className="w-80 px-3 py-1 border rounded-md outline-none"
            {...register("Message", { required: true })}
            />
            <br/>
            {errors.Message && <span className="text-sm text-red-500">This field is required</span>}

            <br/>
            
        </div>
        {/* Button */}
        <div className="flex justify-around mt-4">
        <button className="bg-green-500 text-white rounded-md px-3 py-1 hover:bg-green-700 duration-200">
            Submit
        </button>
        </div>
        </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact