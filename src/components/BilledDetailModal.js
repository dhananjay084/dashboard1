import React, { useState } from "react";
import { XIcon } from "@heroicons/react/solid";
import Logo from "../assests/quickbooks.png";
import { FaAngleDown, FaAngleLeft, FaAngleUp } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const BillDetailModal = ({ bill, onClose }) => {
  const [activeTab, setActiveTab] = useState("comment");
  const [comment, setComment] = useState("");
  const [isDescExpanded, setIsDescExpanded] = useState(true);

  return (
    <div className="fixed top-0 right-0 h-full w-96 bg-white shadow-lg p-6 transform transition-transform duration-300 overflow-y-auto">
      {/* Close Button */}
      <button onClick={onClose} className="absolute top-4 right-4">
        <XIcon className="h-6 w-6 text-gray-500" />
      </button>

      <div className="w-full max-w-md">
        {/* Header Section */}
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div className="flex gap-3">
              <img src={Logo} alt="Quickbooks" className="w-10 h-10" />
              <div>
                <h2 className="font-bold text-lg">Quickbooks</h2>
                <p className="text-sm text-gray-500">
                  16 June, 2024
                  <br />
                  8:15 PM
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400">Publishing...</p>
              <p className="text-sm text-gray-500 font-medium">Jimmy Jason</p>
            </div>
          </div>

          {/* Checkboxes */}
          <div className="flex gap-4 mt-4 justify-between">
            <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox text-purple-600 border-purple-600 rounded focus:ring-purple-500"
                checked
                readOnly
              />
              <span>Auto-sync</span>
            </label>
            <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox text-purple-600 border-purple-600 rounded focus:ring-purple-500"
                checked
                readOnly
              />
              <span>Save Config</span>
            </label>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex mt-4 justify-between  pb-2">
          <button
            onClick={() => setActiveTab("comment")}
            className={`px-4 py-2 rounded-lg ${
              activeTab === "comment"
                ? "font-medium text-black border border-[#ECECF2]"
                : "text-gray-500"
            }`}
          >
            Comment
          </button>
          <button
            onClick={() => setActiveTab("query")}
            className={`px-4 py-2 rounded-lg ${
              activeTab === "query"
                ? "font-medium text-black border border-[#ECECF2]"
                : "text-gray-500"
            }`}
          >
            Query
          </button>
        </div>

        {/* Comment Input */}
        <div className="mt-4">
          <p className="text-sm font-bold text-gray-600">Type Comment</p>
          <textarea
            placeholder="Start typing..."
            className="w-full mt-1 p-2  rounded-lg min-h-[80px] text-gray-500"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>

        {/* Buttons */}
        <div className="mt-4">
          <button
            className="w-full py-2 bg-gray-100 text-gray-400 rounded-lg cursor-not-allowed"
            disabled
          >
            Add Comment
          </button>
          <button className="w-full py-2 mt-4 bg-[#603AE5] text-white rounded-lg">
            View Line Items
          </button>
        </div>

        {/* Payment Details Section */}
        <div className="mt-6  p-4 ">
          <div className="flex justify-between items-center text-gray-500  pb-4">
            <button className="px-2 py-1 rounded-lg text-xl bg-[#E7E7EE]"><FaAngleLeft/></button>
            <h2 className="font-semibold">Payment Details</h2>
            <button className="px-2 py-1 rounded-lg text-xl bg-[#E7E7EE]"><FaAngleRight/></button>
          </div>

          <div className="mt-4">
            <div className="flex justify-between  pb-2">
            <p className="font-semibold ">Payment Details </p>
            <button className="px-2 py-1 rounded-lg text-xl bg-[#603AE51A] text-[#603AE5]"><FaAngleUp/></button>

            </div>
            <div className="flex gap-6 mt-2 border-b border-[#f1f1f1] pb-2">
              <label className="flex items-center gap-2 text-gray-700">
                <input type="radio" name="status" className="text-purple-600" defaultChecked />
                Paid
              </label>
              <label className="flex items-center gap-2 text-gray-700">
                <input type="radio" name="status" className="text-purple-600" />
                Unpaid
              </label>
            </div>
          </div>

          {/* Payment Fields */}
          {[
            "Bill Number",
            "Bill Date",
            "Paid Amount (£ 1900.00)",
            "Paid Date",
            "Due Date",
            "Bank Transaction Ref",
            "Total Amount",
            "Tax Amount",
            "Total Amount (GBP)",
            "Tax Amount (GBP)",
            "FX Rate",
          ].map((label, index) => (
            <div key={index} className="mt-3 border-b border-[#f1f1f1]">
              <p className="text-[#8181A5] text-[14px]  ">{label}</p>
              <input
                type="text"
                placeholder="Start Typing"
                className="w-full p-2   text-gray-500 mt-1"
              />
            </div>
          ))}

          {/* Dropdown Fields */}
          <div className="mt-3 border-b border-[#f1f1f1]">
            <p className="text-sm font-semibold text-gray-600">Payment Mode</p>
            <select className="w-full p-2 rounded-lg text-gray-500 mt-1">
              <option>Select Payment Mode</option>
            </select>
          </div>

          <div className="mt-3">
            <p className="text-sm font-semibold text-gray-600">Currency</p>
            <select className="w-full p-2  rounded-lg text-gray-500 mt-1">
              <option>Select Currency</option>
            </select>
          </div>

          {/* Expandable Description Section */}
          <div className="mt-4 border-t pt-3">
            <div className="flex justify-between items-center cursor-pointer mb-4" onClick={() => setIsDescExpanded(!isDescExpanded)}>
              <p className="font-semibold text-gray-700">Description</p>
              <span className="px-2 py-1 rounded-lg text-xl bg-[#603AE51A] text-[#603AE5]">{isDescExpanded ? <FaAngleUp/> : <FaAngleDown/>}</span>
            </div>
            {isDescExpanded && (
                <>
                <p className="text-[#8181A5] text-[14px]">List Item</p>

                <div className="flex gap-6 mt-2 border-b border-[#f1f1f1] pb-2">
                <label className="flex items-center gap-2 text-gray-700">
                  <input type="radio" name="status" className="text-purple-600" defaultChecked />
                  Paid
                </label>
                <label className="flex items-center gap-2 text-gray-700">
                  <input type="radio" name="status" className="text-purple-600" />
                  Unpaid
                </label>
              </div>
              <p className="text-[#8181A5] text-[14px] mt-4">Description</p>

              <textarea
                placeholder="Enter Description"
                className="w-full p-2 border-b border-gray-300  text-gray-500 mt-2 h-20"
              />
              </>
            )}
          </div>
          <div className="flex justify-between items-center text-gray-500 py-4">
  <button className="px-2 py-1 rounded-lg text-xl bg-[#E7E7EE]">
    <FaAngleLeft />
  </button>

  {/* Dots for Slider */}
  <div className="flex space-x-2">
    <span className="w-2 h-2 bg-purple-600 rounded-full"></span> {/* Active */}
    <span className="w-2 h-2 bg-gray-300 rounded-full"></span> {/* Inactive */}
  </div>

  <button className="px-2 py-1 rounded-lg text-xl bg-[#E7E7EE]">
    <FaAngleRight />
  </button>
</div>
          {/* Save & Publish Buttons */}
          <div className="mt-4">
            <button className="w-full py-2 bg-[#603AE51A] text-[#603AE5] rounded-lg">
              Save
            </button>
            <button className="w-full py-2 mt-3 bg-[#603AE5] text-white rounded-lg flex justify-center items-center">
              <span className="flex gap-2 items-center">Publish <FaAngleDown/></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillDetailModal;
