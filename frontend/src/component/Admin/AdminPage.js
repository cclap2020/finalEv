import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import AdminItem from "./AdminItem";

export default function AdminPage() {
  const isAuth = useSelector((state) => {
    return state.isAuth.isAuth;
  });

  const history = useHistory();
  if (isAuth !== true) {
    history.push("/admin");
  }

  const userData = useSelector((state) => {
    return state.admin_userData.admin_userData.fetchResult;
  });

  const userEmails = useSelector((state) => {
    return state.admin_userData.admin_userData.userEmails;
  });

  return (
    <div>
      <header>
        <h1>Admin Page</h1>
      </header>
      {userEmails.map((userEmail, index) => {
        //console.log("userData " + userEmail + index + userData);
        console.log(userData);
        return (
          <AdminItem
            userEmail={userEmail}
            userData={userData[index]}
            index={index}
          />
        );
      })}
    </div>
  );
}
