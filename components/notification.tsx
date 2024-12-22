"use client";
import React, { useEffect, useState } from "react";
import type { FC } from "react";

interface NotificationProps {
  messages: string[];
  delay: number; // in milliseconds
}

const Notification: FC<NotificationProps> = ({ messages, delay }) => {
  const [show, setShow] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(messages[0]);

  useEffect(() => {
    const loop = () => {
      const randomMessage =
        messages[Math.floor(Math.random() * messages.length)];
      setCurrentMessage(randomMessage);
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 4000); // Hide after 2 seconds
    };

    loop(); // Initial trigger

    const interval = setInterval(() => {
      loop();
    }, delay + 2000); // Re-trigger after delay + display time

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, [delay, messages]);

  return (
    <div
      className={`fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded shadow-md transition-transform duration-500 ease-in-out ${
        show ? "translate-x-0" : "translate-x-full"
      }`}
      style={{ transform: show ? "translateX(0)" : "translateX(100%)" }}
    >
      {currentMessage}
    </div>
  );
};

export default Notification;
