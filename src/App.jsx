import { Provider } from './UserContext';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';

const App = () => {
  return (
    <div className="body">
      <Provider>
        <Header />
        <main className="main">
          <Home />
        </main>
        <Footer />
      </Provider>
    </div>
  );
};

export default App;
