# reactJS 스터디

- create-react-app 을 사용하여 초기 설정과 리액트에서 제공하는 문법들을 학습한다.

---

## useState

- 리액트에서 공식적으로 지원하는 Hooks 중 하나

```javascript
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const onCount = () => {
    setState(current => current + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onCount}>Count Up!</button>
    </div>
  );
}
export default App;
```

위와 같은 방법으로 사용하며 `[count, setCount]` 에서 `count`는 읽기만 가능하며 `setCount`로 `count`에 저장할 값을 넣어 `count`의 값을 바꿀 수 있다.

`useState(0);` 은 `count`의 초기값으로 사용되며 `setCount`로 값을 바꿔주기 전까지 사용된다.

`setState(current => current + 1);` 와 같은 방식으로 `setState`를 사용할 수 있으며 `current`는 기존의 `count` 값을 가리킨다.

---

## useEffect

- 리액트에서 공식적으로 지원하는 Hooks 중 하나
- 기본적으로 첫 렌더링 시 한 번만 실행되며 두 번째 매개변수`[]`에 값을 넣으면 첫 렌더때 실행 후 해당 값이 변경 될 때마다 실행된다.

```javascript
import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const onCount = () => {
    setState(current => current + 1);
  };
  console.log('리렌더 될 때마다 매 번 실행된다');

  useEffect(() => {
    console.log('첫 렌더링 시 한 번만 실행된다.');
  }, []);

  useEffect(() => {
    console.log('첫 렌더링 시 실행되고, count가 변경될 때마다 실행된다.');
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onCount}>Count Up!</button>
    </div>
  );
}
export default App;
```

---

## cleanup Function

- 자주 쓰이지는 않지만 필요할 때가 있다.
