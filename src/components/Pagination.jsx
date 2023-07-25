const Pagination = (props) => {
  const { page, totalPages, onLeftClick, onRightClick } = props;

  return (
    <div className="d-flex align-items-center justify-content-end">
      <button onClick={onLeftClick}>Voltar</button>
      <div className="p-2">
        {page} de {totalPages}
      </div>
      <button onClick={onRightClick}>Avançar</button>
    </div>
  );
};

export default Pagination;
