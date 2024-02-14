import React from "react";
import { Search, Users} from "../../../../assets/react-icons";

const index = () => {
  return (
    <div className="admin__header">
      <label className="admin__label" htmlFor="tel">
        <input className="admin__search" type="tel" id="tel" placeholder="User" />
        <Search />
      </label>
      <div className="admin__name">
        <div className="admin__icon">
          <Users/>
        </div>
          <span>John Doe</span>
      </div>
    </div>
  );
};
export default index;
