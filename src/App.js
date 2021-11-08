import { useEffect, useState } from 'react';
import './App.css';
import PartOne from './components/PartOne/PartOne';
import PartTwo from './components/PartTwo/PartTwo';

function App() {
  const [parts, setParts] = useState('part1');
  const [data, setData] = useState({});
  const [localData, setLocalData] = useState({});
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
    setLocalData(parses);
  }, [data])


  const handleStore = e => {
    console.log('local not ', data);
    console.log(localData);
    localStorage.removeItem("info");
    setData({})
    e.preventDefault();
  }


  return (
    <div className="App">
      <header>
        <form onSubmit={handleStore}>
          {parts === "part1" ? <PartOne setParts={setParts} handleChange={handleChange} localData={localData}></PartOne> : <PartTwo setParts={setParts} handleChange={handleChange} localData={localData}></PartTwo>}
        </form>
      </header>
    </div>
  );
}

export default App;
