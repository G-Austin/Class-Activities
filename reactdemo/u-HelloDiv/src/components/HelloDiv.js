import React from 'react';

const name = "Glo";
const num1 = 1;
const num2 = 2;

const HelloDiv = () => (
<div>
  <div>
    <div className="jumbotron">
      
      <h1 className="display-4">Hello, world!</h1>
      <p className="lead">Because you sucky suck face</p>
      <hr className="my-4"></hr>
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <h2> I can reverse my name: {name.split("").reverse()}</h2>
    </div>
  </div>


  <div>
    <p>My name is Glo and I want to punch somebody</p>
    <p>I really like coding and I hope I get a job soon</p>
    <h4> Things I like</h4>
    <ul>
      <li>Biking</li>
      <li>Hiking</li>
      <li>Taking Vacation</li>
      <li>Citrus IPA</li>
    </ul>
  </div>
</div>

);

export default HelloDiv;
