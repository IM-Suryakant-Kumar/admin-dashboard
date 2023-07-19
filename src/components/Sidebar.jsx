import { Link } from "react-router-dom";
import {
	BarChartIcon,
	ChatBubbleIcon,
	Container,
	CurrencyRupeeIcon,
	DynamicFeedIcon,
	LineStyleIcon,
	List,
	ListItem,
	MailIcon,
	PersonIcon,
	ReportIcon,
	SideMenu,
	StorefrontIcon,
	TimelineIcon,
	Title,
	TrendingUpIcon,
	WorkIcon,
	Wrapper,
} from "../styles/sidebar.sc";

const Sidebar = () => {
	return (
		<Container component="aside">
			<Wrapper p={2.5}>
				<SideMenu mb={1.5}>
					<Title
						variant="h6"
						component="h3"
					>
						Dashboard
					</Title>
					<List>
						<ListItem className="active">
							<LineStyleIcon className="icon" />
							Home
						</ListItem>
						<ListItem>
							<TimelineIcon className="icon" />
							Analytics
						</ListItem>
						<ListItem>
							<TrendingUpIcon className="icon" />
							Sales
						</ListItem>
					</List>
				</SideMenu>
				<SideMenu mb={1.5}>
					<Title>Quick Menu</Title>
					<List>
						<Link to="/users" className="link">
							<ListItem>
								<PersonIcon className="icon" />
								Users
							</ListItem>
						</Link>
						<Link to="/products" className="link">
							<ListItem>
								<StorefrontIcon className="icon" />
								Products
							</ListItem>
						</Link>
						<ListItem>
							<CurrencyRupeeIcon className="icon" />
							Transactions
						</ListItem>
						<ListItem>
							<BarChartIcon className="icon" />
							Reports
						</ListItem>
					</List>
				</SideMenu>
				<SideMenu mb={1.5}>
					<Title>Notification</Title>
					<List>
						<ListItem>
							<MailIcon className="icon" />
							Mail
						</ListItem>
						<ListItem>
							<DynamicFeedIcon className="icon" />
							Feedback
						</ListItem>
						<ListItem>
							<ChatBubbleIcon className="icon" />
							Messages
						</ListItem>
					</List>
				</SideMenu>
				<SideMenu mb={1.5}>
					<Title>Staff</Title>
					<List>
						<ListItem>
							<WorkIcon className="icon" />
							Manage
						</ListItem>
						<ListItem>
							<TimelineIcon className="icon" />
							Analytics
						</ListItem>
						<ListItem>
							<ReportIcon className="icon" />
							Reports
						</ListItem>
					</List>
				</SideMenu>
			</Wrapper>
		</Container>
	);
};

export default Sidebar;
