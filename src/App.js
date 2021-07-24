import './App.css';
import ReduxProvider from './redux';
import Posts from './posts';
function App() {
  return (
    <ReduxProvider>
      <div className="App">
        <Posts />
      </div>
    </ReduxProvider>
  );
}

export default App;
