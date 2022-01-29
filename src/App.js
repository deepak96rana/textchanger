
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';

function App() {
  return (
    <>
 
<Navbar  title="TextEdit"/>
<div className="container my-3">
<Textarea  heading="Enter Text below"></Textarea>
{/* <About/> */}
{/* <Textarea /> */}
</div>

    </>
  );
}

export default App;
