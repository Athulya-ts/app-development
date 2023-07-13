import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Todolist from "../Todo-components/Todolist/Todo-index";
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Performance.css'

function Performance() {
  return (
    <>
    <div className="performance-background">
    <p className = "projects-assigned">PROJECTS ASSIGNED : 3</p>
        <div class="row d-flex justify-content-center mt-100">
<div className='pie-chart'>
    <center><h3>PERFORMANCE</h3></center>
<div class="col-md-6">
    <div class="progress blue">
    <h2 className='completion'>COMPLETION STATUS</h2>
      <span class="progress-left">
            <span class="progress-bar"></span>
      </span>
      <span class="progress-right">
            <span class="progress-bar"></span>
      </span>
      <div class="progress-value">90%</div>
    </div>

    
      <div class="progress yellow">
      <h2 className='training'>TRAINING STATUS</h2>
        <span class="progress-left">
            <span class="progress-bar"></span>
        </span>
        <span class="progress-right">
            <span class="progress-bar"></span>
        </span>
        <div class="progress-value">37.5%</div>
      </div>
      </div></div>
    <div className="App">
      <Container fluid>
        <Todolist />
      </Container>
    </div>
      </div>
      </div>
      </>
  )
}

export default Performance


