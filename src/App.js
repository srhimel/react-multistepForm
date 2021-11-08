import { useEffect, useState } from 'react';
import './App.css';
import PartOne from './components/PartOne/PartOne';
import PartTwo from './components/PartTwo/PartTwo';

function App() {
  const [parts, setParts] = useState('part1');
  const [data, setData] = useState({});
  const [localdata, setlocalData] = useState({});
  const handleChange = e => {
    const field = e.target.name;
    const value = e.target.value;

    const newData = { ...data };
    newData[field] = value;
    localStorage.setItem('info', JSON.stringify(newData));
    setData(newData);
  }
  useEffect(() => {
    const localData = localStorage.getItem("info");
    const parses = JSON.parse(localData);
    setlocalData(parses);
  }, [data])


  const handleStore = e => {
    e.target.reset();
    console.log('local not ', data);
    console.log(localdata);
    e.preventDefault();
  }


  return (
    <div className="App">
      <header>
        <form onSubmit={handleStore}>
          {parts === "part1" ? <PartOne setParts={setParts} handleChange={handleChange} localdata={localdata}></PartOne> : <PartTwo setParts={setParts} handleChange={handleChange} localdata={localdata}></PartTwo>}
        </form>
      </header>
    </div>
  );
}

export default App;
