import React from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";

const Message = () => {
  const messages = useSelector((state) => state.email.messages);
  return (
    <>
      {messages.length != 0 ? (
        <div
          className={classNames("p-4 text-sm rounded-lg", {
            "text-red-700 bg-red-100 dark:bg-red-200 dark:text-red-800":
              messages !== "Success!",
            "text-green-700 bg-green-100 dark:bg-green-200 dark:text-green-800":
              messages === "Success!",
          })}
          role="alert"
        >
          {messages}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Message;
