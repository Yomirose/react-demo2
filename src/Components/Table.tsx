import DataTable, { TableColumn } from "react-data-table-component";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";


const colums = [
    {
        name: "Id",
        selector: (row: { id: number; }) => row.id,    
    },
    {
        name: "Email",
        selector: (row: { email: string; }) => row.email,
    },
    {
        name: "First Name",
        selector: (row: { first_name: string; }) => row.first_name,
    },
    {
        name: "Last Name",
        selector: (row: { last_name: string; }) => row.last_name,
    },
    {
        name: "Avatar",
        selector: (row: {avatar: string;}) => row.avatar
    }
] as TableColumn<{ id: number }>[]


function Table(){
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const handleRowClick = (row: {id: number}) => {
        navigate(`/userpage/${row.id}`, {state: {rowData: row}})
    }

    useEffect(() =>{
        const fetchUsers = async () =>{
            setLoading(true)
            try {
                const response = await fetch("https://reqres.in/api/users?page=1");
                const data = await response.json();
                setUser(data.data)
            } catch (error) {
                
            }finally {
                setLoading(false)
            }

        }
        fetchUsers();
    }, [])
    return (
        <div>
            {loading? <ClipLoader/> : <DataTable
            columns={colums}
            data={user}
             pagination
             highlightOnHover
             onRowClicked={handleRowClick}          
            />}
        </div>
    )
}

export default Table