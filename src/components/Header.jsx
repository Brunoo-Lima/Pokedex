import Input from './forms/Input';

const Header = () => {
  return (
    <header className="bg-dark p-4 px-0">
      <div className="container d-flex justify-content-between align-items-center flex-column">
        <a className="h2 text-decoration-none text-white" href="">
          Pokedex
        </a>

        <div>
          <Input />
        </div>
      </div>
    </header>
  );
};

export default Header;
