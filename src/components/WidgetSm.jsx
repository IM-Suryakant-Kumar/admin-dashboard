import {
	Container,
	Image,
	SList,
	SListItem,
	Name,
	SButton,
	Title,
	UserInfoConatiner,
	UserTitle,
	VisibilityIcon,
} from "../styles/widgetSm.sc";
import UserImage from "../data/avatar2.jpg";

const WidgetSm = () => {
	return (
		<Container elevation={2}>
			<Title
				variant="subtitle1"
				component="h2"
			>
				New Join Members
			</Title>
			<SList>
				<SListItem>
					<Image
						src={UserImage}
						alt="S"
					/>
					<UserInfoConatiner>
						<Name component="span">Anna Keller</Name>
						<UserTitle component="span">
							Software Engineer
						</UserTitle>
					</UserInfoConatiner>
					<SButton
						variant="text"
						startIcon={<VisibilityIcon />}
					>
						Dispaly
					</SButton>
				</SListItem>
				<SListItem>
					<Image
						src={UserImage}
						alt="S"
					/>
					<UserInfoConatiner>
						<Name component="span">Anna Keller</Name>
						<UserTitle component="span">
							Software Engineer
						</UserTitle>
					</UserInfoConatiner>
					<SButton
						variant="text"
						startIcon={<VisibilityIcon />}
					>
						Dispaly
					</SButton>
				</SListItem>
				<SListItem>
					<Image
						src={UserImage}
						alt="S"
					/>
					<UserInfoConatiner>
						<Name component="span">Anna Keller</Name>
						<UserTitle component="span">
							Software Engineer
						</UserTitle>
					</UserInfoConatiner>
					<SButton
						variant="text"
						startIcon={<VisibilityIcon />}
					>
						Dispaly
					</SButton>
				</SListItem>
				<SListItem>
					<Image
						src={UserImage}
						alt="S"
					/>
					<UserInfoConatiner>
						<Name component="span">Anna Keller</Name>
						<UserTitle component="span">
							Software Engineer
						</UserTitle>
					</UserInfoConatiner>
					<SButton
						variant="text"
						startIcon={<VisibilityIcon />}
					>
						Dispaly
					</SButton>
				</SListItem>
				<SListItem>
					<Image
						src={UserImage}
						alt="S"
					/>
					<UserInfoConatiner>
						<Name component="span">Anna Keller</Name>
						<UserTitle component="span">
							Software Engineer
						</UserTitle>
					</UserInfoConatiner>
					<SButton
						variant="text"
						startIcon={<VisibilityIcon />}
					>
						Dispaly
					</SButton>
				</SListItem>
				<SListItem>
					<Image
						src={UserImage}
						alt="S"
					/>
					<UserInfoConatiner>
						<Name component="span">Anna Keller</Name>
						<UserTitle component="span">
							Software Engineer
						</UserTitle>
					</UserInfoConatiner>
					<SButton
						variant="text"
						startIcon={<VisibilityIcon />}
					>
						Dispaly
					</SButton>
				</SListItem>
			</SList>
		</Container>
	);
};

export default WidgetSm;
