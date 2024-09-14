import { Provider } from "react-redux"
import { Counter } from "./counter"
import { Inc } from "./increment"
import { DvClr } from "./coloredDiv"
import { store } from "./store"


function App() {
  

  return (
    <>
    <Provider store={store}>
        <Counter/>
        <Inc/>
        <DvClr/>
    </Provider>
      </>
  )
}

export default App
