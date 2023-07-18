import styled from "@emotion/styled";
import { BarChartOutlined, ChatBubbleOutlineOutlined, CurrencyRupee, DynamicFeedOutlined, LineStyle, MailOutlined, PersonOutline, Report, Storefront, Timeline, TrendingUp, WorkOutlineOutlined } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";

export const Container = styled(Box)`
	flex: 1;
	height: calc(100vh - 50px);
	position: sticky;
	top: 50px;
`;

export const Wrapper = styled(Box)``;

export const SideMenu = styled(Stack)``;

export const Title = styled(Typography)`
	font-size: 0.8125rem;
	color: #a7a7a7;
`;

export const List = styled.ul`
	list-style: none;
	padding: 0.4em;
`;

export const ListItem = styled.li`
	padding: 0.4em;
	cursor: pointer;
	display: flex;
	align-items: center;
    border-radius: 0.5em;
    &:hover, &.active {
        background-color: #c8f7f8;
    }
    & > .icon {
        margin-right: 0.5em;
        font-size: 1.25rem;
    }
`;

// Icon
export const LineStyleIcon = styled(LineStyle)``;
export const TimelineIcon = styled(Timeline)``;
export const TrendingUpIcon = styled(TrendingUp)``;
export const PersonIcon = styled(PersonOutline)``;
export const StorefrontIcon = styled(Storefront)``;
export const CurrencyRupeeIcon = styled(CurrencyRupee)``;
export const BarChartIcon = styled(BarChartOutlined)``;
export const MailIcon = styled(MailOutlined)``;
export const DynamicFeedIcon = styled(DynamicFeedOutlined)``;
export const ChatBubbleIcon = styled(ChatBubbleOutlineOutlined)``;
export const WorkIcon = styled(WorkOutlineOutlined)``;
export const ReportIcon = styled(Report)``;
