import React from "react";
import EmailForm from "../components/EmailForm";
import Button from "../components/Button";

const EmailCard = () => {
  return (
    <div class="w-[20rem] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 p-6">
      <h1 className="block mb-6 text-lg font-medium text-gray-900 dark:text-gray-300">
        Mailing List Sign Up
      </h1>
      <EmailForm />
      <Button />
    </div>
  );
};

export default EmailCard;
