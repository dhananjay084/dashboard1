import React, { useState } from "react";
import BillDetailModal from "./BilledDetailModal";
import Bill from "../assests/bill.png"; 
import Invoice from './Invoice';
import ReceiptModalButton from "./Modal";

const bills = [
  { id: 1, name: "Bill 1", date: "March 25, 2025", amount: "₤ 50.59" },
  { id: 2, name: "Bill 2", date: "March 24, 2025", amount: "₤ 50.59" },
  { id: 3, name: "Bill 3", date: "March 23, 2025", amount: "₤ 50.59" },
];

const MiddleSection = () => {
  const [selectedBill, setSelectedBill] = useState(null);
  const [selectedTab, setSelectedTab] = useState("Bills"); 

  return (
    <div className="flex-1 bg-gray-100 p-4">
      {/* Bill List */}
      <div className="bg-white p-4 rounded-lg shadow">
        {/* Add to Expenses Button */}
        <div className="flex justify-end">
          {/* <button className="bg-[#603AE5] text-white rounded-lg px-4 py-2">
            Add to Expenses Report
          </button> */}
          <ReceiptModalButton />
        </div>
<div className="flex justify-between mt-4">
    <div className="w-[40%]">
    <ul className="flex gap-4 items-center mt-4">
          {["All Documents", "Bills", "Receipts"].map((tab) => (
            <li
              key={tab}
              className={`cursor-pointer px-4 py-2 rounded-lg ${
                selectedTab === tab ? "border border-[#ECECF2] text-black" : ""
              }`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </li>
          ))}
        </ul>

          <ul className=" border border-[#ECECF2] rounded-lg mt-4">
            {bills.map((bill) => (
              <li
                key={bill.id}
                className={`flex justify-between border-b p-4 cursor-pointer ${
                  selectedBill?.id === bill.id ? "bg-[#F3F1FD] border-l-4 border-[#603AE5]" : ""
                }`}
                onClick={() => setSelectedBill(bill)}
              >
                <div className="flex gap-2">
                  <img
                    className="max-w-[40px] rounded-lg border border-[#EEEEEE]"
                    src={Bill}
                    alt="Bill"
                  />
                  <div>
                    <p className={`text-[14px] ${selectedBill?.id === bill.id ? "text-[#603AE5] font-semibold" : "text-black"}`}>
                      {bill.name}
                    </p>
                    <p className="text-[#8181A5] text-[12px]">Date: {bill.date}</p>
                    <p className="text-[#8181A5] text-[12px]">{bill.amount}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
    </div>
    <div className="bg-[#F6DEBA] h-full w-1/2">
    <Invoice/>
    </div>
</div>
       
      </div>

      {/* Bill Details Modal */}
      {selectedBill && <BillDetailModal bill={selectedBill} onClose={() => setSelectedBill(null)} />}
    </div>
  );
};

export default MiddleSection;
