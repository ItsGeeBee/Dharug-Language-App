import React, { useState, useEffect } from "react";
import { getMe } from '../../utils/API';
import Auth from '../../utils/auth';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';
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
    <>
    <Jumbotron fluid className='text-light bg-dark'>
      <Container>
        <h1>Dashboard</h1>
      </Container>
    </Jumbotron>

    {/* User saved words from dictionary to show */}
    <Container>
      <h4>
        {userData.savedWords.length
          ? `Viewing ${userData.savedWords.length} saved ${userData.savedWords.length === 1 ? 'word' : 'words'}:`
          : 'You have no saved words!'}
      </h4>
      <CardColumns>
        {userData.savedWords.map((word) => {
          return (
            <Card key={word.wordId} border='dark'>
              <Card.Body>
                <Card.Title>{word.word}</Card.Title>
                <Card.Text>{word.definition}</Card.Text>
                <Button>
                  Delete this Word!
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </CardColumns>
    </Container>
    
{/* User added words to dictionary to show */}
<Container>
      <h4>
        {userData.savedWords.length
          ? `Viewing ${userData.savedWords.length} saved ${userData.savedWords.length === 1 ? 'word' : 'words'}:`
          : 'You have no saved words!'}
      </h4>
      <CardColumns>
        {userData.savedWords.map((word) => {
          return (
            <Card key={word.wordId} border='dark'>
              <Card.Body>
                <Card.Title>{word.word}</Card.Title>
                <Card.Text>{word.definition}</Card.Text>
                <Button>
                  Delete this Word!
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </CardColumns>
    </Container>
  </>
  );
}
// exports file
export default Dashboard;
