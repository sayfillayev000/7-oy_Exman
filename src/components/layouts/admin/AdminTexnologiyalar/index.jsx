import React from "react";
import { Delete, Edit } from "../../../../assets/react-icons";

const index = () => {
  return (
    <div className="admin__section">
      <table className="customers__table table">
        <tr className="customers__shapka shapka">
          <td>Nomlari</td>
          <td>Matn</td>
          <td>Video</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Menory foam</td>
          <td>Enim urna... </td>
          <td>youtube.com...</td>
          <td><div id="edit"><Edit/></div></td>
          <td><div id="delete"><Delete/></div></td>
        </tr>
        <tr>
          <td>Menory foam</td>
          <td>Enim urna... </td>
          <td>youtube.com...</td>
          <td><div id="edit"><Edit/></div></td>
          <td><div id="delete"><Delete/></div></td>
        </tr>
        <tr>
          <td>Menory foam</td>
          <td>Enim urna... </td>
          <td>youtube.com...</td>
          <td><div id="edit"><Edit/></div></td>
          <td><div id="delete"><Delete/></div></td>
        </tr>
        <tr>
          <td>Menory foam</td>
          <td>Enim urna... </td>
          <td>youtube.com...</td>
          <td><div id="edit"><Edit/></div></td>
          <td><div id="delete"><Delete/></div></td>
        </tr>
      </table>
      <button type="button" className="qoshish__btn">Qo'shish</button>
    </div>
  );
};

export default index;