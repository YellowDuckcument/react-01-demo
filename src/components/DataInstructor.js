import { faChild, faChildDress } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DataRowIns = (props) => {
  const {
    key,
    dataCode,
    insId,
    fullName,
    gender,
    phone,
    email,
    onClickEdit,
    onClickDelete,
  } = props;

  return (
    <tr key={key}>
      <td className="text-center fw-bold">{dataCode}</td>
      <td>{insId}</td>
      <td>{fullName}</td>
      <td className="text-center">
        {gender === 0 ? (
          <FontAwesomeIcon className="fs-4 text-primary" icon={faChild} />
        ) : (
          <FontAwesomeIcon className="fs-4" style={{ color: 'E90064' }} icon={faChildDress} />
        )}
      </td>
      <td>{phone}</td>
      <td>{email}</td>
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

export default DataRowIns;
