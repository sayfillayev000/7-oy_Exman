import React from "react";

const index = () => {
  return (
    <div className="admin__section">
      <table className="buyurtmalar__table table">
        <tr className="buyurtmalar__shapka shapka">
          <td>ID</td>
          <td>ismi</td>
          <td>telefon raqami</td>
          <td>mahsulot nomlari</td>
          <td>miqdor</td>
          <td>Qayta aloqa</td>
        </tr>
        <tr className="JennyWilson">
          <td>6</td>
          <td>Jenny Wilson</td>
          <td>+998 90 123 45 67</td>
          <td>Ortopedik Eko matras</td>
          <td>4</td>
          <td className="qayta__aloqa__checkbox">
            <input type="checkbox" />
          </td>
        </tr>
        <tr>
          <td>7</td>
          <td>Robert Fox</td>
          <td>+998 90 123 45 67</td>
          <td>Ortopedik Eko matras</td>
          <td>4</td>
          <td className="qayta__aloqa__checkbox">  <input type="checkbox" /></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Wade Warren</td>
          <td>+998 90 123 45 67</td>
          <td>Ortopedik Eko matras</td>
          <td>4</td>
          <td className="qayta__aloqa__checkbox">  <input type="checkbox" /></td>

        </tr>
        <tr>
          <td>3</td>
          <td>Jane Cooper</td>
          <td>+998 90 123 45 67</td>
          <td>Ortopedik Eko matras</td>
          <td>4</td>
          <td className="qayta__aloqa__checkbox">  <input type="checkbox" /></td>

        </tr>
      </table>
    </div>
  );
};

export default index;