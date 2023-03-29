import styles from './App.module.css';
import { useEffect, useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState('');

  const onClick = () => setCounter(current => current + 1);
  const onChange = e => setKeyword(e.target.value);

  console.log('I run all the time');

  useEffect(() => {
    console.log('called a api');
  }, []); // useEffect는 단 한번만 실행된다.

  useEffect(() => {
    console.log('keyword is :', keyword);
  }, [keyword]); // 두 번째 파라미터[] 안에 값을 넣으면 해당 값이 변경될 때마다 실행해준다.

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  return (
    <div className="App">
      <input type="text" placeholder="Search here..." onChange={onChange} value={keyword} />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
