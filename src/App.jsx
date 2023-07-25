import { Provider } from './UserContext';
import Header from './components/Header';
import Home from './components/Home';

const App = () => {
  return (
    <>
      <Provider>
        <Header />
        <main>
          <Home />
        </main>
      </Provider>
    </>
  );
};

export default App;
