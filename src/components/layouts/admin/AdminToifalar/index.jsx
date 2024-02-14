import React from "react";
import { Delete, Edit } from "../../../../assets/react-icons";

const index = () => {
  return (
    <div className="admin__section">
      <table className="buyurtmalar__table table">
        <tr className="buyurtmalar__shapka shapka">
          <td>Toifalar</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr className="JennyWilson">
          <td>Model C</td>
          <td><div id="edit"><Edit/></div></td>
          <td><div id="delete"><Delete/></div></td>
        </tr>
        <tr>
        <td>Model C</td>
          <td><div id="edit"><Edit/></div></td>
          <td><div id="delete"><Delete/></div></td>
        </tr>
        <tr>
        <td>Model C</td>
          <td><div id="edit"><Edit/></div></td>
          <td><div id="delete"><Delete/></div></td>
        </tr>
        <tr>
        <td>Model C</td>
          <td><div id="edit"><Edit/></div></td> 
          <td><div id="delete"><Delete/></div></td>
        </tr>
      </table>
      <button type="button" className="qoshish__btn">Qo'shish</button>
    </div>
  );
};

export default index;