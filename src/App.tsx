import './App.css'
import {coursesTitleArray} from "./data/courseTitleArray.ts";

function App() {


  return (
    <>
        <ul>
            {
                coursesTitleArray.map((value, index) => <li key={index}>{value}</li>)
            }
        </ul>
    </>
  )
}

export default App


