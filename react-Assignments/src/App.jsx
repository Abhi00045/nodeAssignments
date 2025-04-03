import Form from "./Form"
import List from "./List"
import { Data } from "./data"

function App() {
 
  // const data = []
  return (
    <>
    <div id="tab-updater">
    <Form/>
    <List dataArray={Data}/>
    </div>
    </>
  )
}

export default App
