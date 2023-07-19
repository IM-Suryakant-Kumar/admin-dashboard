import {
	Container,
	Form,
	FormItem,
	Input,
	Label,
	Option,
	Options,
	Title,
	SButton as Button,
} from "../styles/newProduct.sc";

const NewProduct = () => {
	return (
		<Container>
			<Title
				variant="h6"
				component="h1"
			>
				New Product
			</Title>
			<Form>
				<FormItem>
					<Label>Image</Label>
					<Input
						type="file"
						id="file"
					/>
				</FormItem>
				<FormItem>
					<Label>Name</Label>
					<Input
						type="text"
						placeholder="Apple Airpods"
					/>
				</FormItem>
				<FormItem>
					<Label>Stock</Label>
					<Input
						type="text"
						placeholder="123"
					/>
				</FormItem>
				<FormItem>
					<Label>Active</Label>
					<Options
						name="active"
						id="active"
					>
						<Option value="yes">Yes</Option>
						<Option value="no">No</Option>
					</Options>
				</FormItem>
				<Button variant="contained">Create</Button>
			</Form>
		</Container>
	);
};

export default NewProduct;
