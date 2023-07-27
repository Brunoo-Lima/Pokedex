import Input from './forms/Input';
import pokedex from '../assets/pokedex_logo.png';

const Header = () => {
  return (
    <header className="bg-dark p-4 px-0">
      <div className="container d-flex flex-column flex-sm-row justify-content-sm-between align-items-center">
        <a href="/">
          <img className="logo" src={pokedex} alt="" />
        </a>

        <div>
          <Input />
        </div>
      </div>
    </header>
  );
};

export default Header;
