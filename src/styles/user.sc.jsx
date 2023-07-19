import styled from "@emotion/styled";
import {
	CalendarToday,
	LocationSearching,
	MailOutline,
	PermIdentity,
	PhoneAndroid,
	Publish,
} from "@mui/icons-material";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";

export const Container = styled(Box)`
	flex: 4;
	padding: 1.25em;
`;

export const TitleContainer = styled(Stack)`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const Title = styled(Typography)``;

export const SButton = styled(Button)`
	padding: 0.3125em 2em;
    border-radius: 0.3125em;
	background-color: #ea7602;
	color: #f9f6ff;
	text-transform: capitalize;
	font-size: 1rem;
	&:hover {
		background-color: #ea7602;
	}
    &.update-btn {
        background-color: darkblue;
        font-weight: 600;
    }
`;

export const UserContainer = styled(Stack)`
	flex-direction: row;
	margin-top: 1.25em;
`;

export const UserInfo = styled(Paper)`
	flex: 1;
	padding: 1.25em;
`;

export const UserTop = styled(Stack)`
	flex-direction: row;
	align-items: center;
`;

export const Image = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	object-fit: cover;
	&.right-img {
		width: 100px;
		height: 100px;
		border-radius: 0.625em;
		margin-right: 1.25em;
	}
`;

export const UserTopTitleContainer = styled(Stack)`
	margin-left: 1.25em;
`;

export const UserTopName = styled(Box)`
	font-weight: 600;
`;

export const UserTopTitle = styled(Box)`
	font-weight: 300;
`;

export const UserBottom = styled(Box)`
	margin-top: 1.25em;
`;

export const UserBottomTitle = styled(Box)`
	font-size: 0.875rem;
	font-weight: 600;
	color: #8e8787;
`;

export const UserBottomInfoConatiner = styled(Stack)`
	flex-direction: row;
	align-items: center;
	margin: 1.25em 0;
	color: #444;
	& > .info-icon {
		font-size: 1rem;
	}
`;

export const UserBottomInfoTitle = styled(Box)`
	margin-left: 0.625em;
`;

// Icon
export const PermIdentityIcon = styled(PermIdentity)``;
export const CalendarTodayIcon = styled(CalendarToday)``;
export const PhoneAndroidIcon = styled(PhoneAndroid)``;
export const MailOutlineIcon = styled(MailOutline)``;
export const LocationSearchingIcon = styled(LocationSearching)``;
// User Update
export const UserUpdate = styled(Paper)`
	flex: 2;
	padding: 1.25em;
	margin-left: 1.25em;
`;

export const UpdateTitle = styled(Typography)`
	font-size: 1.5rem;
	font-weight: 600;
`;

export const UpdateForm = styled.form`
	display: flex;
	justify-content: space-between;
	margin-top: 1.25em;
`;

export const FormLeft = styled(Box)``;

export const FormLeftItem = styled(Stack)`
	margin-top: 0.625em;
`;

export const Label = styled.label`
	margin-bottom: 0.4em;
	font-size: 0.785rem;
`;

export const Input = styled.input`
	border: none;
	width: 250px;
	height: 30px;
	border-bottom: 1px solid gray;
	&.hidden {
		display: none;
	}
`;

export const FormRight = styled(Stack)`
	justify-content: space-between;
`;

export const FormRightItem = styled(Stack)`
	flex-direction: row;
    align-items: center;
`;

// Icon
export const PublishIcon = styled(Publish)`
    cursor: pointer;
`;
