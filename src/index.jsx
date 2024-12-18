import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from "react-router-dom";

//components
import Home from './components/home';
import Header from './components/header';
import Day1 from './components/day1';
import Day2 from './components/day2';
import Day3 from './components/day3';
import Footer from './components/footer';
import Register from './components/register';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

//styles
import './styles/index.css';
import OrganizingCommittee from './components/OrganizingCommittee';
import AdvisoryComittee from './components/AdvisoryComittee';
import ProfessorGrid from './components/ProfessorGrid';
import CallForPapers from './components/CallForPapers';


export default function App(){
  return(
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/organizing-committee" element={<OrganizingCommittee/>}/>
        <Route path="/Advisory-comittee" element={<AdvisoryComittee/>}/>
        <Route path="/Papers-call" element={<CallForPapers/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}



ReactDOM.render(<App/>,document.getElementById("root"));

