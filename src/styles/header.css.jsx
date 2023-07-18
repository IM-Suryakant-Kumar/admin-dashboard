import styled from "@emotion/styled";
import { Language, NotificationsNone, Settings } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";

export const Container = styled(Box)`
	width: 100%;
	height: 50px;
	background-color: white;
    position: sticky;
    top: 0;
    z-index: 5;
`;

export const Wrapper = styled(Stack)`
	height: 100%;
`;

export const Left = styled(Box)``;

export const Logo = styled(Typography)`
	font-weight: 700;
	color: darkblue;
`;

export const Right = styled(Stack)``;

export const IconContainer = styled(Box)`
	position: relative;
	margin-right: 0.635rem;
	color: #555;
`;

const Icon = `
    cursor: pointer;
`;

export const NotifyIcon = styled(NotificationsNone)`
	${Icon}
`;

export const SettingsIcon = styled(Settings)`
	${Icon}
`;

export const LanguageIcon = styled(Language)`
	${Icon}
`;

export const IconBadge = styled.span`
	width: 15px;
	width: 15px;
	position: absolute;
	top: -0.6em;
	right: -0.2em;
	background-color: red;
	color: white;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 0.625rem;
	font-weight: bold;
`;

export const ProfileImage = styled.img`
    ${Icon}
    width: 40px;
    height: 40px;
    border-radius: 50%;
`;
