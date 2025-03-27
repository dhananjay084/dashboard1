import React from "react";

const Invoice = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F4E6CC] p-12 ">
      <div className="bg-white w-[400px] md:w-[500px] lg:w-[600px] shadow-lg rounded-lg ">
        <div className="p-6">
        {/* Header Section */}
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-bold text-[#1F3B35]">INVOICE</h2>
          <div className="text-right">
            <p className="text-sm font-semibold text-[#1F3B35]">Marble</p>
            <p className="text-xs text-[#1F3B35]">BEAUTY & SPA</p>
          </div>
        </div>

        {/* Bill To & Invoice Details */}
        <div className="mt-6">
          <p className="text-sm font-semibold text-[#1F3B35]">Bill to</p>
          <p className="text-xs text-gray-600">
            Business Company 123 <br />
            Grand Avenue, 29102 <br />
            Country: +00 000 000 <br />
            000 CIF: 0000000ABC
          </p>
        </div>

        <div className="mt-4 flex justify-between text-xs text-gray-600">
          <p>
            <span className="font-semibold">Invoice #:</span> 12345
          </p>
          <p>
            <span className="font-semibold">Date:</span> 00/00/00
          </p>
        </div>

        {/* Table */}
        <div className="mt-6">
          <table className="w-full text-sm">
            <thead className="border-b">
              <tr className="text-left text-gray-600">
                <th className="pb-2">Description</th>
                <th className="pb-2 text-right">Price</th>
                <th className="pb-2 text-right">Qty</th>
                <th className="pb-2 text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(5)].map((_, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2">Service description</td>
                  <td className="py-2 text-right">00,00€</td>
                  <td className="py-2 text-right">1</td>
                  <td className="py-2 text-right">00,00€</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Payment & Terms */}
        <div className="mt-6 text-xs text-gray-600">
          <p className="font-semibold">Payment method</p>
          <p>By Bank London State Bank UK-00</p>
          <p>123 59 1976 15897</p>

          <p className="font-semibold mt-4">Terms & conditions</p>
          <p>
            The origins of the first consultations date back to their tools,
            expressions, creation, or anything. The requirement of consultations
            has changed over time.
          </p>
        </div>

        {/* Subtotal & Footer */}
        <div className="mt-6 flex justify-between text-sm font-semibold text-[#1F3B35]">
          <p>Subtotal</p>
          <p>00,00€</p>
        </div>
        <div className="flex justify-between text-sm font-semibold text-[#1F3B35]">
          <p>Tax</p>
          <p>00,00€</p>
        </div>
        <div className="flex justify-between text-lg font-bold text-[#1F3B35] border-t pt-2 mt-2">
          <p>Total</p>
          <p>00,00€</p>
        </div>
        </div>
        {/* Footer */}
        <div className="mt-6 bg-[#1F3B35] text-white text-center py-3 text-sm flex  justify-between p-4">
          <p>info@marblespa.com</p>
          <p>www.marblespa.com</p>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
