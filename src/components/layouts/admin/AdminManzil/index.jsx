import React from "react";
import { Delete, Edit, Location } from "../../../../assets/react-icons";

const index = () => {
  return (
    <div className="admin__section">
      <table className="customers__table table">
        <tr className="customers__shapka shapka">
          <td>Manzil</td>
          <td>Matn</td>
          <td>Location</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Toshkent, Parken...</td>
          <td>Mo’ljal: Qoraqamish... </td>
          <td><Location/></td>
          <td><div id="edit"><Edit/></div></td>
          <td><div id="delete"><Delete/></div></td>
        </tr>
      </table>
      <button type="button" className="qoshish__btn">Qo'shish</button>
    </div>
  );
};

export default index;