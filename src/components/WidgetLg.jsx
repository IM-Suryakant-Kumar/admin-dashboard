import {
	Container,
	Image,
	Name,
	SButton,
	Table,
	Td,
	Th,
	Title,
	Tr,
} from "../styles/widgetLg.sc";
import Avatar from "../data/avatar3.png";

const WidgetLg = () => {
	const Button = ({ type }) => <SButton className={type}>{type}</SButton>;

	return (
		<Container elevation={2}>
			<Title
				variant="subtitle1"
				component="h2"
			>
				Latest Transactions
			</Title>
			<Table>
				<Tr>
					<Th>Customer</Th>
					<Th>Date</Th>
					<Th>Amout</Th>
					<Th>Status</Th>
				</Tr>
				<Tr>
					<Td className="user">
						<Image
							src={Avatar}
							alt=""
						/>
						<Name component="span">Susan carol</Name>
					</Td>
					<Td className="date">18 Jul 2023</Td>
					<Td className="amount">₹ 122.00</Td>
					<Td className="status">
						<Button type="approved"></Button>
					</Td>
				</Tr>
				<Tr>
					<Td className="user">
						<Image
							src={Avatar}
							alt=""
						/>
						<Name component="span">Susan carol</Name>
					</Td>
					<Td className="date">18 Jul 2023</Td>
					<Td className="amount">₹ 122.00</Td>
					<Td className="status">
						<Button type="pending"></Button>
					</Td>
				</Tr>
				<Tr>
					<Td className="user">
						<Image
							src={Avatar}
							alt=""
						/>
						<Name component="span">Susan carol</Name>
					</Td>
					<Td className="date">18 Jul 2023</Td>
					<Td className="amount">₹ 122.00</Td>
					<Td className="status">
						<Button type="declined"></Button>
					</Td>
				</Tr>
				<Tr>
					<Td className="user">
						<Image
							src={Avatar}
							alt=""
						/>
						<Name component="span">Susan carol</Name>
					</Td>
					<Td className="date">18 Jul 2023</Td>
					<Td className="amount">₹ 122.00</Td>
					<Td className="status">
						<Button type="pending"></Button>
					</Td>
				</Tr>
				<Tr>
					<Td className="user">
						<Image
							src={Avatar}
							alt=""
						/>
						<Name component="span">Susan carol</Name>
					</Td>
					<Td className="date">18 Jul 2023</Td>
					<Td className="amount">₹ 122.00</Td>
					<Td className="status">
						<Button type="approved"></Button>
					</Td>
				</Tr>
			</Table>
		</Container>
	);
};

export default WidgetLg;
