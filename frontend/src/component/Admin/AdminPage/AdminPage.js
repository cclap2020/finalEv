import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import AdminItem from "./AdminItem/AdminItem";
import "./AdminPage.css";

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
    <div className="admin-page">
      <header className="admin-page__header">
        <h1>Admin Page</h1>
      </header>
      <section className="admin-page__section">
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
      </section>
    </div>
  );
}
