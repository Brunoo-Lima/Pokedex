import { Provider } from './UserContext';
import Footer from './components/Footer';
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
        <Footer />
      </Provider>
    </>
  );
};

export default App;
