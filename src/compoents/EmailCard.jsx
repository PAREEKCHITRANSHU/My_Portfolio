import React from 'react';
import { FaTimes, FaCopy } from 'react-icons/fa';

const EmailCard = ({ onClose }) => {
  const email = 'chitranshupareek@gmail.com';
  const linkedin = 'https://linkedin.com/in/chitranshu-pareek-aa8a8b220';

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-900 rounded-lg shadow-lg p-6 w-80 relative">
        <p1 className="font-serif text-white">""I am always eager to collaborate on exciting projects and new opportunities. Whether you're looking for a skilled developer or just want to chat about tech, feel free to reach out!""</p1>
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          <FaTimes size={20} />
        </button>
        <div className="mt-4">
          <p className="mb-2 text-white">Email:  <a href={email} target="_blank" rel="noopener noreferrer" className="text-blue-500">{email}</a></p>
          <button
            onClick={() => copyToClipboard(email)}
            className="flex items-center bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700 transition-colors"
          >
            <FaCopy className="mr-2" /> Copy Email
          </button>
          <p className="mt-4 mb-2 text-white">LinkedIn: <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500">{linkedin}</a></p>
          <button
            onClick={() => copyToClipboard(linkedin)}
            className="flex items-center bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700 transition-colors"
          >
            <FaCopy className="mr-2" /> Copy LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailCard;
