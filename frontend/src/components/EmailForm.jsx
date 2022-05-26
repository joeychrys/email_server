import React from "react";
import Button from "./Button";
import { emailAction } from "../features/email/actions";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "./Spinner";
import Message from "./Message";

const EmailForm = () => {
  const loading = useSelector((state) => state.email.loading);

  const initalFormData = Object.freeze({
    address: "",
  });

  const [formData, setFormData] = useState(initalFormData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(emailAction(formData.address));
  };

  return (
    <form className="mb-6 space-y-3">
      <label
        htmlFor="email-input"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Email
      </label>
      <input
        type="email"
        name="address"
        id="email-input"
        value={formData.address}
        onChange={handleChange}
        required
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <Message/>
      {loading == true? (
        <div className="flex justify-start mt-3">
          <Spinner />
        </div>
      ) : (
        <Button onClick={handleSubmit} />
      )}
    </form>
  );
};

export default EmailForm;
