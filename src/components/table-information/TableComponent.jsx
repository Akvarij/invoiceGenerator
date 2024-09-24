import "./TableComponent.css";
import React from "react";

export const TableComponent = ({ services }) => {
  const totalAmount = services.reduce(
    (sum, service) => sum + parseFloat(service.amount || 0),
    0
  );

  return (
    <table className="table-information">
      <tbody>
        <tr>
          <th>DESCRIPTION</th>
          <th>AMOUNT</th>
        </tr>
        {services.map((service, index) => (
          <tr key={index}>
            <td className="with-border">{service.service}</td>
            <td className="with-border">{service.amount} EUR</td>
          </tr>
        ))}
        <tr>
          <td className="total">TOTAL:</td>
          <td className="with-border-total-amount">{totalAmount} EUR</td>
        </tr>
      </tbody>
    </table>
  );
};
