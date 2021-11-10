import logo from './logo.svg';
import './App.css';

function getNum(){

}

function App() {
  return (
    <div className="App">
      <div id="buttons" class="grid grid-cols-4 gap-4 lg:text-xl">
        <button onClick={getNum} class="bg-purple-500 bg-opacity-50 rounded-lg" >7</button>
        <button onClick={getNum} class="bg-purple-500 bg-opacity-50 rounded-lg">8</button>
        <button onClick={getNum} class="bg-purple-500 bg-opacity-50 rounded-lg">9</button>
        <button onClick={getNum} class="bg-purple-500 bg-opacity-50 rounded-lg">divide</button>
        <button onClick={getNum} class="bg-purple-500 bg-opacity-50 rounded-lg">4</button>
        <button onClick={getNum} class="bg-purple-500 bg-opacity-50 rounded-lg">5</button>
        <button onClick={getNum} class="bg-purple-500 bg-opacity-50 rounded-lg">6</button>
        <button onClick={getNum} class="bg-purple-500 bg-opacity-50 rounded-lg">multiply</button>
        <button onClick={getNum} class="bg-purple-500 bg-opacity-50 rounded-lg">3</button>
        <button onClick={getNum} class="bg-purple-500 bg-opacity-50 rounded-lg">2</button>
        <button onClick={getNum} class="bg-purple-500 bg-opacity-50 rounded-lg">1</button>
        <button onClick={getNum} class="bg-purple-500 bg-opacity-50 rounded-lg">subtract</button>
        <button onClick={getNum} class="bg-purple-500 bg-opacity-50 rounded-lg">.</button>
        <button onClick={getNum} class="bg-purple-500 bg-opacity-50 rounded-lg">0</button>
        <button onClick={getNum} class="bg-purple-500 bg-opacity-50 rounded-lg">=</button>
        <button onClick={getNum} class="bg-purple-500 bg-opacity-50 rounded-lg">add</button>
      </div>

    </div>
  );
}

export default App;
