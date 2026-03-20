import './App.css'
import MyComponent from "./components/MyComponent.tsx";

function App() {


  return (
    <>
      <MyComponent text={'Hello 1'}/>
      {/*{ //JSX , тобто як інтерполяція, длозволяє викликати змінні*/}
      {/*  MyComponent({text: 'Hello 2'})*/}
      {/*}*/}
    </>
  )
}

export default App
