import './App.css';
import boring from "./boring.jpg";
import dude from "./dude.jpg";
import girl from "./girl.jpg";
import yong from "./yong.jpg";
import brush from "./brush.jpg";
import API from './API';

export default function App() {
  return(
    <div className="App">

    <div className="container">
      <h1>WHAT I NEED DO IF I DON'T KNOW?</h1>
      <img  className='brush' src={brush} alt="brush" width="800px" height="200px"/>
      </div>
      <div className="images">
      <img src={boring} alt="boring" width="300px" className='boring'/>
      <img src={yong} alt="yong" width="300px" className='boring'/>
      <h4>Sometimes if you feel bored it can mean that you need a break. You should save your power  and think about what you want eventually? After that you will be clear minded and you will be able to think about your activities or even the general future.
      If you tried this method and it didn't work I have an excellent present for you. Believe me you will not regret it. Just try to push button ...</h4>
      </div>

      <div className="images">
      <img src={dude} alt="dude" width="300px" className='boring'/>
      <img src={girl} alt="girl" width="300px" className='boring'/>
      <div className='apiBlock'>
      <API/>
      </div>
    </div>
    </div>
  )
}
