import {
	Container,
	DeleteButton,
	DeleteIcon,
	EditButton,
	Image,
	UserInfoContainer,
} from "../styles/users.sc";
import { DataGrid } from "@mui/x-data-grid";
import { userRows } from "../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

const Users = () => {
	const [data, setData] = useState(userRows);

	const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    };

	const columns = [
		{ field: "id", headerName: "ID", width: 90 },
		{
			field: "user",
			headerName: "User",
			width: 200,
			renderCell: (params) => {
				return (
					<UserInfoContainer>
						<Image
							src={params.row.avatar}
							alt=""
						/>
						{params.row.username}
					</UserInfoContainer>
				);
			},
		},
		{ field: "email", headerName: "Email", width: 200 },
		{
			field: "status",
			headerName: "Status",
			width: 120,
		},
		{
			field: "transaction",
			headerName: "Transaction",
			width: 160,
		},
		{
			field: "action",
			headerName: "Action",
			width: 150,
			renderCell: (params) => {
				return (
					<>
						<Link to={`${params.row.id}`}>
							<EditButton variant="text">Edit</EditButton>
						</Link>
						<DeleteButton
							variant="text"
							startIcon={<DeleteIcon />}
							onClick={() => handleDelete(params.row.id)}
						></DeleteButton>
					</>
				);
			},
		},
	];

	return (
		<Container>
			<DataGrid
				rows={data}
				columns={columns}
				disableRowSelectionOnClick
				initialState={{
					pagination: {
						paginationModel: { page: 0, pageSize: 8 },
					},
				}}
				pageSizeOptions={[5, 10]}
				checkboxSelection
			/>
		</Container>
	);
};

export default Users;
