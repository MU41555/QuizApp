import logo from './logo.svg';
import React from 'react'
import { useState } from 'react';
import './App.css';
import MenuAppBar from './myComponents/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

function App() {

  const [val, setval] = useState([
    {
      q: "HTML Stand for ?",
      option: ["Hypertext Markup Language", "Hyper Markup", "hsjjjd", "shshsh"],
      answer: "Hypertext Markup Language"
    },
    {
      q: "CSS Stand for?",
      option: ["cascading Style Sheet", "hvhchc", "bcbcj", "cbbcc"],
      answer: "cascading Style Sheet"
    },
    {
      q: "HTML Stand for ?",
      option: ["Hypertext Markup Language", "Hyper Markup", "hsjjjd", "shshsh"],
      answer: "Hypertext Markup Language"
    },
    {
      q: "CSS Stand for?",
      option: ["cascading Style Sheet", "hvhchc", "bcbcj", "cbbcc"],
      answer: "cascading Style Sheet"
    }
  ])
  const [questionInd, setQuestionInd] = useState(0);
  const [score, setscore] = useState(0)
  const [result, setresult] = useState(false)

  const nextQuestion = () => {
    if (val.length - 1 == questionInd) {
      setresult(true);
    } else {
      setQuestionInd(questionInd + 1);
    }
  };
  const correctAnswer = (cor, e) => {
    console.log(e);
    if (cor.toUpperCase() == e.target.innerText) {
      setscore(score + 1);
      console.log("good");
    }else{
      console.log("nogood");

    }
    nextQuestion()
  }


  return (
    <div className="App">
      <header className="App-header">
        <MenuAppBar />
      </header>
      {result ? (
        <Grid>
        <h1>{score}</h1>
      </Grid>
      ) : (
      <section>
        <Grid className="container d-flex justify-content-start">
          <h1>{val[questionInd].q}</h1>
        </Grid>
        <Grid container className="d-flex justify-content-center">
          <Grid className="m-2" item xs={12} md={5}>
            <Button variant="contained" fullWidth={true} onClick={(e) => {
              correctAnswer(val[questionInd].answer,e)
            }}>{val[questionInd].option[0]}</Button>
          </Grid>
          <Grid className="m-2" item xs={12} md={5}>
            <Button variant="contained" fullWidth={true} onClick={(e) => correctAnswer(val[questionInd].answer,e)}>{val[questionInd].option[1]}</Button>
          </Grid>
          <Grid className="m-2" item xs={12} md={5}>
            <Button variant="contained" fullWidth={true} onClick={(e) => correctAnswer(val[questionInd].answer,e)}>{val[questionInd].option[2]}</Button>
          </Grid>
          <Grid className="m-2" item xs={12} md={5}>
            <Button variant="contained" fullWidth={true} onClick={(e) => correctAnswer(val[questionInd].answer,e)}>{val[questionInd].option[3]}</Button>
          </Grid>

        </Grid>
      </section>
      )}
        
    </div>
  );
}

export default App;
