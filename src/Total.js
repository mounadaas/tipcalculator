import React from "react";

const Total = ({ bill, service, friend }) => {
  let tip = bill * ((service + friend) / 2 / 100);
  let totalBill = bill + tip;
  return (
    <div style={{ padding: "10px" }}>
      {bill > 0 && (
        <h3>
          You pay ${totalBill} (${bill} + ${tip} tip)
        </h3>
      )}
    </div>
  );
};

export default Total;
