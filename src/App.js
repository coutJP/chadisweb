import logo from './logo.svg';
import './App.css';
import img1 from './images/img.jpg'
import img2 from './images/img2.jpg'
function App() {
  return (
    <div className="App">
      <p className='message'>
      Hello, my name is chadi and this 
      website is for tattoo barcode scan and jeanpaul did  it!
      </p>
      <div className='container'>
      <div class="flip-box">
        <div class="flip-box-inner">
        <div class="flip-box-front">
       <img src={img1} alt="Paris" className='myimg'/>
    </div>
    <div class="flip-box-back">
      <h2>We Plan For It</h2>
      <p>TRALALA</p>
    </div>
  </div>
  </div>
  </div>
  <div className='container'>

      <div class="flip-box">
        <div class="flip-box-inner">
        <div class="flip-box-front">
       <img src={img2} alt="Paris" className='myimg'/>
    </div>
    <div class="flip-box-back">
      <h2>I did it</h2>
      <p>WOHOO</p>
    </div>
  </div>
  </div>
  </div>


    <p className='copyR'>Copyright © JeanPaul Mansour, we did it in 1 min 	&#128513; </p>
    </div>
  );
}

export default App;
