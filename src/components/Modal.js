import { useState } from "react";
import { FaTimes, FaCopy } from "react-icons/fa";

const ReceiptModalButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Open Modal Button */}
      <button
        className="bg-[#603AE5] text-white px-6 py-2 rounded-lg font-medium"
        onClick={() => setIsOpen(true)}
      >
        Add to Expenses Report
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
          <div className="bg-white w-[600px] p-6 rounded-lg shadow-lg relative">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes size={18} />
            </button>

            {/* Tabs */}
            <div className="flex justify-between space-x-8 text-gray-500 font-medium mb-4 max-w-[80%] items-center rounded-xl">
              <span className="cursor-pointer">EasyUpload</span>
              <span className="cursor-pointer">Bills</span>
              <span className="border border-[#f1f1f1] px-4 py-2 text-[#603AE5] font-semibold">
                Receipts
              </span>
              <span className="cursor-pointer">Bank</span>
            </div>

            {/* Form Fields */}
            <div className="flex justify-between text-gray-500 mb-4">
              <div>
                <p className="text-sm">Document Owner</p>
                <p className="font-semibold text-black">Accountant 01</p>
              </div>
              <div className="w-1/2">
                <p className="text-sm">Client</p>
                <select className="w-full bg-transparent border-b border-gray-300 text-black focus:outline-none">
                  <option>Select Client</option>
                </select>
              </div>
            </div>

            {/* File Upload Box */}
            <div className="border-2 border-dashed border-gray-300 p-6 text-center rounded-lg mb-4">
              <div className="flex  items-center space-y-2 mx-auto w-[70%] justify-between">
                <div className="bg-gray-200 p-4 rounded-xl">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 12l1.793-1.793a4 4 0 015.656 0L12 12m0 0l.793-.793a4 4 0 015.656 0L20 12m-8 0v8"
                    ></path>
                  </svg>
                </div>
                <div>
                <p className="text-[#603AE5] font-semibold cursor-pointer">
                  Drag & Drop or Choose file to upload
                </p>
                <p className="text-gray-500 text-sm">JPG, PNG, PDF, CVS</p>
                </div>
              </div>
            </div>

            <div className="mx-auto flex items-center justify-center">
            <button className="w-[30%]  bg-[#603AE5] px-4 text-white py-2 rounded-lg font-semibold">
              Add Receipt
            </button>
            </div>

            {/* Email Section */}
            <div className="mt-6">
              <p className="font-semibold text-gray-800">Send Over Email</p>
              <div className="flex items-center mt-2 text-gray-700">
                <p className="font-semibold">Single :</p>
                <p className="ml-2 text-[#603AE5]">abc.single@gmail.com</p>
                <button className="ml-2 text-gray-400 hover:text-black">
                  <FaCopy />
                </button>
              </div>
              <div className="flex items-center mt-2 text-gray-700">
                <p className="font-semibold">Multiple :</p>
                <p className="ml-2 text-[#603AE5]">abc.multiple@gmail.com</p>
                <button className="ml-2 text-gray-400 hover:text-black">
                  <FaCopy />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReceiptModalButton;
