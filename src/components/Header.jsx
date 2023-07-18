import Avatar from "../data/avatar.jpg";
import {
	Container,
	IconBadge,
	IconContainer,
	LanguageIcon,
	Left,
	Logo,
	NotifyIcon,
	ProfileImage,
	Right,
	SettingsIcon,
	Wrapper,
} from "../styles/header.sc";

const Header = () => {
	return (
		<Container component="header">
			<Wrapper
				direction="row"
				alignItems="center"
				justifyContent="space-between"
				px={2.5}
			>
				<Left>
					<Logo
						variant="h5"
						component="h1"
					>
						ClenchCartAdmin
					</Logo>
				</Left>
				<Right
					direction="row"
					alignItems="center"
				>
					<IconContainer>
						<NotifyIcon />
						<IconBadge>2</IconBadge>
					</IconContainer>
					<IconContainer>
						<LanguageIcon />
						<IconBadge>2</IconBadge>
					</IconContainer>
					<IconContainer>
						<SettingsIcon />
					</IconContainer>
					<IconContainer>
						<ProfileImage
							alt="Remy Sharp"
							src={Avatar}
						/>
					</IconContainer>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Header;
