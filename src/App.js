import ToDoPage from "./Pages/TodoPage";
import { Provider } from "react-redux";
import { store } from "./Store";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ToDoPage/>
        </Provider>
    </div>
  );
}

export default App;
