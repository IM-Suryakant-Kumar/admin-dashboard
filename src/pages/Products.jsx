import {
	Container,
	DeleteButton,
	DeleteIcon,
	EditButton,
	Image,
	ProductInfoContainer,
} from "../styles/products.sc";
import { DataGrid } from "@mui/x-data-grid";
import { productRows } from "../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProductList = () => {
	const [data, setData] = useState(productRows);

	const handleDelete = (id) => {
		setData(data.filter((item) => item.id !== id));
	};

	const columns = [
		{ field: "id", headerName: "ID", width: 90 },
		{
			field: "product",
			headerName: "Product",
			width: 200,
			renderCell: (params) => {
				return (
					<ProductInfoContainer>
						<Image
							src={params.row.img}
							alt=""
						/>
						{params.row.name}
					</ProductInfoContainer>
				);
			},
		},
		{ field: "stock", headerName: "Stock", width: 200 },
		{
			field: "status",
			headerName: "Status",
			width: 120,
		},
		{
			field: "price",
			headerName: "Price",
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

export default ProductList;
