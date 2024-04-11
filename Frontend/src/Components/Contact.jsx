import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="modal-box">
          <div className="mt-4 space-y-2">
            <h1 className="text-2xl font-bold">Contact Us</h1>
            <p>Name</p>
            <input
              className="w-80 border rounded-md outline-non"
              type="text"
              placeholder="Enter your name"
              {...register("name", { required: true })}
            />
            <br />
            {errors.name && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
            <p>Email</p>
            <input
              className="w-80 border rounded-md outline-non"
              type="email"
              placeholder="Email address"
              {...register("email", { required: true })}
            />
            <br />
            {errors.email && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
            <p>Message</p>
            <input
              className="w-80 h-20 border rounded-md outline-non "
              type="text"
              placeholder="Type your message"
            />
            <br />
            <button className="btn btn-primary"
              onClick={() => document.getElementById("my_modal_3").showModal()}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
