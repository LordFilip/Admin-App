import { Outlet } from "react-router-dom";

export default function GuestLayout() {
  return (
    <div>
      <div>
        Guest users only
        <br />
        <Outlet />
      </div>
    </div>
  );
}
