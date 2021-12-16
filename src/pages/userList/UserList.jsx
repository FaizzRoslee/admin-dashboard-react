import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { 
    DeleteOutline,
 } from "@material-ui/icons";

export default function UserList() {

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'Name', width: 200, renderCell: (params) => {
            return (
                <div className="userListUser">
                    <img className="userListImg" src={params.row.avatar} alt=""/>
                    {params.row.username}
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 130,
        },
        {
          field: 'transaction',
          headerName: 'Transaction',
          width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return(
                    <>
                    <button className="userListEdit">Edit</button>
                    <DeleteOutline/>
                    </>
                )
            }
        }
      ];
      
      const rows = [
        { 
            id: 1, 
            username: 'Faizz Roslee', 
            avatar: 'https://thumbs.dreamstime.com/z/muslim-man-flat-avatar-icon-you-can-use-illustration-business-websites-company-others-140436092.jpg', 
            email: 'faizz@email.com' ,
            status: 'active',
            transaction: 'RM 2400.00'
        },
        { 
            id: 2, 
            username: 'Mohd Amiruddin', 
            avatar: 'https://cdn3.vectorstock.com/i/1000x1000/43/87/muslim-avatar-people-flat-icon-vector-28504387.jpg', 
            email: 'amir@email.com' ,
            status: 'active',
            transaction: 'RM 4200.00'
        },        { 
            id: 3, 
            username: 'Muaz Ahmad', 
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHnv8LCaD8_7urrpxxT9AswgonrU3VqSfIFA&usqp=CAU', 
            email: 'muaz@email.com' ,
            status: 'active',
            transaction: 'RM 4500.00'
        },
        { 
            id: 4, 
            username: 'Fairul Rizal', 
            avatar: 'data:image/png;base64,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', 
            email: 'fairul@email.com' ,
            status: 'active',
            transaction: 'RM 1700.00'
        },

      ];

    return (
        <div className="userList">
                  <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
        </div>
    ) 
}
