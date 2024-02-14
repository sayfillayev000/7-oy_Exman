import React from "react";
import { Delete, Edit } from "../../../../assets/react-icons";

const index = () => {
  return (
    <div className="admin__section">
      <table className="customers__table table">
        <tr className="customers__shapka shapka">
          <td>Mahsulot nomlari</td>
          <td>Toifalar</td>
          <td>Narxi</td>
          <td>Yuklama</td>
          <td>Razmeri</td>
          <td>Status</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Lux Soft Memory</td>
          <td>Model C</td>
          <td>1 600 000 so'm</td>
          <td>150 kg</td>
          <td>200 x 134 x 40</td>
          <td>button</td>
          <td><div id="edit"><Edit/></div></td>
          <td><div id="delete"><Delete/></div></td>
        </tr>
        <tr>
          <td>Lux Soft Memory</td>
          <td>Model C</td>
          <td>1 600 000 so'm</td>
          <td>150 kg</td>
          <td>200 x 134 x 40</td>
          <td>button</td>
          <td><div id="edit"><Edit/></div></td>
          <td><div id="delete"><Delete/></div></td>
        </tr>
        <tr>
          <td>Lux Soft Memory</td>
          <td>Model C</td>
          <td>1 600 000 so'm</td>
          <td>150 kg</td>
          <td>200 x 134 x 40</td>
          <td>button</td>
          <td><div className="edit"><Edit/></div></td>
          <td><div className="delete"><Delete/></div></td>
        </tr>
        <tr>
          <td>Lux Soft Memory</td>
          <td>Model C</td>
          <td>1 600 000 so'm</td>
          <td>150 kg</td>
          <td>200 x 134 x 40</td>
          <td>button</td>
          <td><div className="edit"><Edit/></div></td>
          <td><div className="delete"><Delete/></div></td>
        </tr>
      </table>
      <button type="button" className="qoshish__btn">Qo'shish</button>
    </div>
  );
};

export default index;