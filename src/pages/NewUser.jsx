import {
	Container,
	Form,
	FormItem,
	GenderCont,
	Input,
	Label,
	Option,
	Options,
	Title,
	SButton as Button,
} from "../styles/newUser.sc.jsx";

const NewUser = () => {
	return (
		<Container>
			<Title
				variant="h6"
				component="h1"
			>
				New User
			</Title>
			<Form>
				<FormItem>
					<Label>Username</Label>
					<Input
						type="text"
						placeholder="john"
					/>
				</FormItem>

				<FormItem>
					<Label>Full Name</Label>
					<Input
						type="text"
						placeholder="John Smith"
					/>
				</FormItem>

				<FormItem>
					<Label>Email</Label>
					<Input
						type="email"
						placeholder="john@gmail.com"
					/>
				</FormItem>

				<FormItem>
					<Label>Password</Label>
					<Input
						type="password"
						placeholder="password"
					/>
				</FormItem>

				<FormItem>
					<Label>Phone</Label>
					<Input
						type="text"
						placeholder="+1 123 456 67"
					/>
				</FormItem>

				<FormItem>
					<Label>Address</Label>
					<Input
						type="text"
						placeholder="New York | USA"
					/>
				</FormItem>

				<FormItem>
					<Label>Gender</Label>
					<GenderCont>
						<Input
							type="radio"
							name="gender"
							id="male"
							value="male"
						/>
						<Label htmlFor="male">Male</Label>
						<Input
							type="radio"
							name="gender"
							id="female"
							value="female"
						/>
						<Label htmlFor="female">Female</Label>
						<Input
							type="radio"
							name="gender"
							id="others"
							value="others"
						/>
						<Label htmlFor="others">Others</Label>
					</GenderCont>
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

export default NewUser;
