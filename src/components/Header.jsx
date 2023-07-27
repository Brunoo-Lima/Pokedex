import Input from './forms/Input';

const Header = () => {
  return (
    <header className="bg-dark p-4 px-0">
      <div className="container d-flex flex-column flex-sm-row justify-content-sm-between align-items-center ">
        <a className="h1 text-decoration-none text-white fs-1" href="">
          Pokédex
        </a>

        <div>
          <Input />
        </div>
      </div>
    </header>
  );
};

export default Header;
