import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Directory.css'

function Directory() {
  return (
    <div className='directory-background'>
        <center>
            <h2>EMPLOYEE DIRECTORY</h2>
            <br/>
    <table class="table table-striped table-dark" >
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Department</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>Marketing</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>Project development</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>Thompson</td>
      <td>Advertising</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Ziya</td>
      <td>Martez</td>
      <td>Testing</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Amelia</td>
      <td>Clarke</td>
      <td>Logistics</td>
    </tr>
  </tbody>
</table>
</center>
</div>
  )
}

export default Directory