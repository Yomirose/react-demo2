import { useLocation, useNavigate } from "react-router-dom";


function UserPage(){
    const location = useLocation()
    const navigate = useNavigate()
    const row = location.state.rowData
    const goBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <p>{row.id}</p>
            <p>{row.email}</p>
            <p>{row.first_name}</p>
            <p>{row.last_name}</p>
            <p>{row.avatar}</p>
            <button onClick={goBack}>Go back</button>
        </div>
    )
}

export default UserPage