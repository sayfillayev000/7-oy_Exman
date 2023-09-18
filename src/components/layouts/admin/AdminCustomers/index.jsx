import React from "react";
import { Delete } from "../../../../assets/react-icons";

const index = () => {
  return (
    <div className="admin__section">
      <table className="customers__table table">
        <tr className="customers__shapka shapka">
          <td>ID</td>
          <td>sana</td>
          <td>telefon raqami</td>
          <td>Qayta aloqa</td>
          <td></td>
        </tr>
        <tr>
          <td>6</td>
          <td>12:13-12.05.2021</td>
          <td>+998 90 123 45 67</td>
          <td className="qayta__aloqa__checkbox">  <input type="checkbox" /></td>
          <td><div id="delete"><Delete/></div></td>
        </tr>
        <tr>
        <td>7</td>
          <td>12:13-12.05.2021</td>
          <td>+998 90 123 45 67</td>
          <td className="qayta__aloqa__checkbox">  <input type="checkbox" /></td>
          <td><div id="delete"><Delete/></div></td>
        </tr>
        <tr>
          <td>3</td>
          <td>12:13-12.05.2021</td>
          <td>+998 90 123 45 67</td>
          <td className="qayta__aloqa__checkbox">  <input type="checkbox" /></td>
          <td><div id="delete"><Delete/></div></td>
        </tr>
        <tr>
          <td>3</td>
          <td>12:13-12.05.2021</td>
          <td>+998 90 123 45 67</td>
          <td className="qayta__aloqa__checkbox">  <input type="checkbox" /></td>
          <td><div id="delete"><Delete/></div></td>
        </tr>
      </table>
    </div>
  );
};

export default index;