import React, { useState, useEffect } from "react";
import { getMe } from '../../utils/API';
import Auth from '../../utils/auth';
// import { removeBookId } from '../utils/localStorage';
import "./style.css";



const Dashboard = () => {
  // create state for holding returned google api data
  const [userData, setUserData] = useState({});
  // use this to determine if `useEffect()` hook needs to run again
  const userDataLength = Object.keys(userData).length;

  useEffect(() => {
    const getUserData = async () => {
      try {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
          return false;
        }

        const response = await getMe(token);

        if (!response.ok) {
          throw new Error('something went wrong!');
        }

        const user = await response.json();
        setUserData(user);
      } catch (err) {
        console.error(err);
      }
    };

    getUserData();
  }, [userDataLength]);

  if (!userDataLength) {
    return <h2>LOADING...</h2>;
  }

  return (
    <section className="resume-top" id="dashboard">
      <h1>YOUR DASHBOARD</h1>
    </section>
  );
}
// exports file
export default Dashboard;
