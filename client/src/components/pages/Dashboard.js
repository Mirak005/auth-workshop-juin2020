import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const user = useSelector((state) => state.authReducer.user);
  if (!user) {
    return <h1>Spinner.....</h1>;
  }
  return (
    <div>
      <h1>
        {user.name} {user.lastName} : {user.email}
      </h1>
    </div>
  );
};

export default Dashboard;
