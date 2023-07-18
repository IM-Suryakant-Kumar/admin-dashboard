import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

const SBox = styled(Box)`
	background-color: #f1f2f6;
`;

const STypography = styled(Typography)`
	font-size: 1.5rem;
`;

export default function Card() {
	return (
		<SBox direction="row">
			<STypography
				variant="body2"
				component="h1"
			>
				Hello World
			</STypography>
			<STypography
				variant="h1"
				component="h1"
			>
				Hello World
			</STypography>
		</SBox>
	);
}
