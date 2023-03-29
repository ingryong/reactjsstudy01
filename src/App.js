import { useEffect, useState } from 'react';

function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);

  const onChange = e => {
    setToDo(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (toDo === '') {
      return;
    }
    setToDos(current => [...current, toDo]);
    setToDo('');
  };

  useEffect(() => {
    console.log(toDos);
  }, [toDos]);

  return (
    <div className="App">
      <h1>My ToDos({toDos.length})</h1>
      <form>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write Your to do..." />
        <button onClick={onSubmit}>Add To Do</button>
      </form>
      <hr />
      <table className="ToDos-Table">
        <thead>
          <tr>
            <th>No.</th>
            <th>할 일</th>
            <th>체 크</th>
          </tr>
        </thead>
        <tbody>
          {toDos.map((item, i) => {
            return (
              <tr>
                <td>{i + 1}</td>
                <td>{item}</td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
