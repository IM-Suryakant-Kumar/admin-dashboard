import { ThemeProvider, createTheme } from "@mui/material";
import {
	ArrowDownwardIcon,
	ArrowUpwardIcon,
	Container,
	Price,
	PriceContainer,
	PriceRate,
	Title,
	Wrapper,
} from "../styles/featuredInfo.sc";

const theme = createTheme({
	components: {
		MuiTypography: {
			variants: [
				{
					props: { variant: "subtitle1" },
					style: { fontSize: "1.25rem" },
				},
				{
					props: { variant: "subtitle2" },
					style: { fontSize: "0.9375rem", color: "gray" },
				},
			],
		},
	},
});

const FeaturedInfo = () => {
	return (
		<ThemeProvider theme={theme}>
			<Container>
				<Wrapper elevation={2}>
					<Title
						variant="subtitle1"
						component="h2"
					>
						Revenue
					</Title>
					<PriceContainer>
						<Price component="span">₹ 2.415 </Price>
						<PriceRate component="span">
							-11.4{" "}
							<ArrowDownwardIcon className="icon negative" />
						</PriceRate>
					</PriceContainer>
					<Title
						variant="subtitle2"
						component="h3"
					>
						Compared to last month
					</Title>
				</Wrapper>
				<Wrapper elevation={2}>
					<Title
						variant="subtitle1"
						component="h2"
					>
						Sales
					</Title>
					<PriceContainer>
						<Price component="span">₹ 4.415 </Price>
						<PriceRate component="span">
							-1.4 <ArrowDownwardIcon className="icon negative" />
						</PriceRate>
					</PriceContainer>
					<Title
						variant="subtitle2"
						component="h3"
					>
						Compared to last month
					</Title>
				</Wrapper>
				<Wrapper elevation={2}>
					<Title
						variant="subtitle1"
						component="h2"
					>
						Cost
					</Title>
					<PriceContainer>
						<Price component="span">₹ 2.15 </Price>
						<PriceRate component="span">
							+2.4 <ArrowUpwardIcon className="icon" />
						</PriceRate>
					</PriceContainer>
					<Title
						variant="subtitle2"
						component="h3"
					>
						Compared to last month
					</Title>
				</Wrapper>
			</Container>
		</ThemeProvider>
	);
};

export default FeaturedInfo;
