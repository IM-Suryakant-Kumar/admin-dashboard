import styled from "@emotion/styled";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { Box, Paper, Stack, Typography } from "@mui/material";

export const Container = styled(Stack)`
	flex-direction: row;
	justify-content: space-between;
	margin-top: 0.625em;
	& > * {
		flex: 1;
		margin: 0 1.25em;
		padding: 1.7125em;
		border-radius: 0.625em;
		cursor: pointer;
	}
`;

export const Wrapper = styled(Paper)``;

export const Title = styled(Typography)``;

export const PriceContainer = styled(Stack)`
	flex-direction: row;
	align-items: center;
	margin: 0.625em 0;
`;

export const Price = styled(Box)`
	font-size: 1.7125em;
	font-weight: 600;
`;

export const PriceRate = styled(Stack)`
	flex-direction: row;
	align-items: center;
	margin-left: 1.25em;
	& > .icon {
		font-size: 0.7125rem;
		margin-left: 0.358em;
	}
	& > .icon.negative {
		color: red;
	}
`;

// Icon
export const ArrowDownwardIcon = styled(ArrowDownward)``;
export const ArrowUpwardIcon = styled(ArrowUpward)`
	color: green;
`;
