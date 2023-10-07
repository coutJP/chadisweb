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
   
    <div>
      <img src={img1} alt='testimg' className='myimg'/>
    </div>
    <div>
      <img src={img2} alt='testimg' className='myimg'/>
    </div>
    <p className='copyR'>Copyright © JeanPaul Mansour, we did it in 1 min 	&#128513; </p>
    </div>
  );
}

export default App;
