import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
const Pagination = (props) => {
  const { page, totalPages, onLeftClick, onRightClick } = props;

  return (
    <div className="col-11 d-flex align-items-center justify-content-end">
      <button className="btn btn-primary" onClick={onLeftClick}>
        <IoIosArrowBack />
      </button>
      <div className="p-2">
        {page} de {totalPages}
      </div>
      <button className="btn btn-primary" onClick={onRightClick}>
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Pagination;
