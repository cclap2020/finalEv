import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

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
      <header>Admin Page</header>
      {userEmails.forEach((user) => {
        console.log(user);
      })}
    </div>
  );
}
