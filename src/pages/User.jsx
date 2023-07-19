import {
	Container,
	Title,
	TitleContainer,
	SButton as Button,
	UserContainer,
	UserInfo,
	UserUpdate,
	UserTop,
	Image,
	UserTopTitleContainer,
	UserTopName,
	UserTopTitle,
	UserBottom,
	UserBottomTitle,
	PermIdentityIcon,
	UserBottomInfoTitle,
	UserBottomInfoConatiner,
	PhoneAndroidIcon,
	MailOutlineIcon,
	CalendarTodayIcon,
	LocationSearchingIcon,
	UpdateTitle,
	UpdateForm,
	FormLeft,
	FormRight,
	FormLeftItem,
	Label,
	Input,
	PublishIcon,
	FormRightItem,
} from "../styles/user.sc";
import Avatar from "../data/avatar4.jpg";
import { Link } from "react-router-dom";

const User = () => {
	return (
		<Container>
			<TitleContainer>
				<Title variant="h6" component="h1">
					Edit User
				</Title>
				<Link to="/new-user">
					<Button variant="contained">Create</Button>
				</Link>
			</TitleContainer>
			<UserContainer>
				<UserInfo elevation={2}>
					<UserTop>
						<Image src={Avatar} alt="" />
						<UserTopTitleContainer>
							<UserTopName component="span">John Carl</UserTopName>
							<UserTopTitle component="span">Software Engineer</UserTopTitle>
						</UserTopTitleContainer>
					</UserTop>
					<UserBottom>
						<UserBottomTitle component="span">Account Details</UserBottomTitle>
						<UserBottomInfoConatiner>
							<PermIdentityIcon className="info-icon" />
							<UserBottomInfoTitle component="span">John32</UserBottomInfoTitle>
						</UserBottomInfoConatiner>
						<UserBottomInfoConatiner>
							<CalendarTodayIcon className="info-icon" />
							<UserBottomInfoTitle component="span">10.12.1999</UserBottomInfoTitle>
						</UserBottomInfoConatiner>
						<UserBottomTitle component="span">Contact Details</UserBottomTitle>
						<UserBottomInfoConatiner>
							<PhoneAndroidIcon className="info-icon" />
							<UserBottomInfoTitle component="span">+1 123 456 67</UserBottomInfoTitle>
						</UserBottomInfoConatiner>
						<UserBottomInfoConatiner>
							<MailOutlineIcon className="info-icon" />
							<UserBottomInfoTitle component="span">john@gmail.com</UserBottomInfoTitle>
						</UserBottomInfoConatiner>
						<UserBottomInfoConatiner>
							<LocationSearchingIcon className="info-icon" />
							<UserBottomInfoTitle component="span">New York | USA</UserBottomInfoTitle>
						</UserBottomInfoConatiner>
					</UserBottom>
				</UserInfo>
				<UserUpdate elevation={2}>
					<UpdateTitle variant="subtitle1" component="h3">
						Edit
					</UpdateTitle>
					<UpdateForm>
						<FormLeft>
							<FormLeftItem>
								<Label>Username</Label>
								<Input type="text" placeholder="John32" />
							</FormLeftItem>
							<FormLeftItem>
								<Label>Full Name</Label>
								<Input type="text" placeholder="John Carl" />
							</FormLeftItem>
							<FormLeftItem>
								<Label>Email</Label>
								<Input type="text" placeholder="john@gmail.com" />
							</FormLeftItem>
							<FormLeftItem>
								<Label>Phone</Label>
								<Input type="text" placeholder="+1 123 456 67" />
							</FormLeftItem>
							<FormLeftItem>
								<Label>Address</Label>
								<Input type="text" placeholder="New York | USA" />
							</FormLeftItem>
						</FormLeft>
						<FormRight>
							<FormRightItem>
								<Image src={Avatar} alt="" className="right-img" />
								<Label htmlFor="file">
									<PublishIcon />
								</Label>
								<Input type="file" id="file" className="hidden" />
							</FormRightItem>
							<Button className="update-btn">Update</Button>
						</FormRight>
					</UpdateForm>
				</UserUpdate>
			</UserContainer>
		</Container>
	);
};

export default User;
