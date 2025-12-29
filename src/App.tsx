import Hello from './Hello';

// 디폴트가 아닌 이름 있는 내보내기(named export)이기 때문에 import 할 때 중괄호를 사용해야 한다.
// import { Hello } from './Hello2';

function App() {
  return <Hello name='동호' color='blue' />;
}

export default App;
