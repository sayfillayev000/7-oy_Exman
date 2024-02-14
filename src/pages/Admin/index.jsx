import { memo } from "react";
import { Outlet } from "react-router-dom";
import { AdminHeader, AdminSideber } from "../../components/layouts/admin";

const index = memo(() => {
  return (
    <>
      <div className="admin">
      <AdminSideber />
      <div className="admin__right">
        <AdminHeader />
        <Outlet/>
      </div>
    </div>
    </>
  );
});

export default index;
