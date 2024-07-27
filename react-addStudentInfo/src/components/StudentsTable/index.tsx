import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';


interface Student {
    id: number;
    name: string;
    email: string;
    gpa: number;
}

interface StudentsTableProps {
    rows: Student[];
    handleDelete: (id: number) => void;
}

const StudentsTable = ({ rows, handleDelete }: StudentsTableProps) => {
  return (

    <table className="table table-stripped table-hover table-bordered">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>GPA</th>
                <th>Action</th>
                
            </tr>
        </thead>
        <tbody>
            {rows.map((row) => (
                <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.name}</td>
                    <td>{row.email}</td>
                    <td>{row.gpa}</td>
                    <td><FontAwesomeIcon onClick={()=> handleDelete(row.id)} icon={faTrash} /></td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default StudentsTable