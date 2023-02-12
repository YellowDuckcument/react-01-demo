
const DataRow = (props) => {
  const { dataCode, dataName, onClickEdit, onClickDelete, key } = props;

  return (
    <tr key={key}>
      <td>{dataCode}</td>
      <td>{dataName}</td>
      <td>
        <a href="/#" onClick={onClickEdit} className="me-1">
          <i className="bi-pencil-square text-primary" />
        </a>
        <a href="/#" onClick={onClickDelete}>
          <i className="bi-trash text-danger" />
        </a>
      </td>
    </tr>
  );
};

export default DataRow;
