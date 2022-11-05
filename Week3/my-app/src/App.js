import './App.css';
import Ex0 from './Ex0/Ex0';
import * as React from "react"
import Ex01 from './Ex0/Ex01';
import Ex02 from './Ex0/Ex02';
import Ex04 from './Ex0/Ex04';
import MySection from './Ex0/MySection';
import MyButton from './Ex0/MyButton';
import MyComponent from './Ex1/Ex1';
import MyComponent1 from './Ex1/Ex11';
import Ex21 from './Ex2/Ex21';
import Ex22 from './Ex2/Ex22';
import Ex3 from './Ex3/Ex3';
import Ex41 from './Ex4/Ex41';
import Ex46 from './Ex4/Ex46';
import Ex42 from './Ex4/Ex42';
import Ex43 from './Ex4/Ex43';
import Ex44 from './Ex4/Ex44';
import Ex45 from './Ex4/Ex45';
import Ex47 from './Ex4/Ex47';


function App() {
  return (
    <div>
      <Ex0/>
      <Ex01/>
      <Ex02/>
      <MySection>
      <MyButton>My Button Text</MyButton>
      </MySection>
      <Ex04/>
      <MyComponent/>
      <MyComponent1/>
      <Ex21/>
      <Ex22/>
      <h1 style={{color: "red"}}>Ex3</h1>
      <Ex3/>
      <Ex41/>
      <Ex42/>
      <Ex43/>
      <Ex44/>
      <Ex45/>
      <Ex46/>
      <Ex47/>
    </div>
  );
}

export default App;
