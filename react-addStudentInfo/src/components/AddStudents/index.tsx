import { useState } from "react";
import StudentsTable from '../StudentsTable'
import './index.css'

interface Student {
    id: number;
    name: string;
    email: string;
    gpa: number;
}

const AddStudent = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [gpa, setGpa] = useState<number>(0)
    const [rows, setRows] = useState<Student[]>([]);
    const [id, setId] = useState<number>(1);
    const [search, setSearch] = useState<string>('');

    const isValidEmail = (email: string) => {
        return email.includes('@');
    };

    const handleStudent = () => {
        if (name.trim() === '' || email.trim() === '') {
            alert('Enter your name and email!');
            return;
        }
        else{
                setRows([...rows, { id, name, email, gpa }]);
                setId(id + 1);
                setName('');
                setEmail('');
                setGpa(0);      
        }
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address!');
            return;
        }
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const filteredRows = rows.filter(row =>
        row.name.toLowerCase().includes(search.toLowerCase()) || row.email.toLowerCase().includes(search.toLowerCase())
    )
    const handleDelete = (id: number) => {
        const updRows = rows.filter(row => row.id !== id);
        setRows(updRows)
    }

    const handleSort = () => {
        const sortedRows = [...rows].sort((a, b) => b.gpa - a.gpa);
        setRows(sortedRows);
    }

    return (
        <div> <h3>Add Student Info</h3>
            <input type="text" className="mt-4" name="name" id="studentName" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /><br />
            <input type="email" className="mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
            <input type="number" className="mt-2" min="0" max="100" step="0.1" placeholder="GPA" value={gpa} onChange={(e) => setGpa(parseFloat(e.target.value))} /><br />
            <button type="submit" className="mt-2" onClick={handleStudent}>Add</button>
            <hr />
            <input type="text" value={search} onChange={handleSearch} placeholder="Search here" />
            <button type="submit" onClick={handleSort} className="m-1">Sort Asc</button>
            <hr />
            <StudentsTable
                rows={filteredRows}
                handleDelete={handleDelete}
            />
        </div>
    )
}

export default AddStudent