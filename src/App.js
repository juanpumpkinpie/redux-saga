import "./App.css";
import store from "./store";

import { bugAdded } from "./actions";

function App() {
  const unsubscribe = store.subscribe(() => {
    console.log("store changed", store.getState());
  });

  store.dispatch(bugAdded("bug 1"));
  unsubscribe();

  // store.dispatch();

  console.log(store.getState());
  return <div className="App">Hola Mundo</div>;
}

export default App;
