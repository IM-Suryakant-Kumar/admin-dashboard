import {
	Paper,
	Box,
	Grid,
	Typography,
	Rating,
	createTheme,
	ThemeProvider,
} from "@mui/material";
import { AccessTime } from "@mui/icons-material";

const theme = createTheme({
	components: {
		MuiTypography: {
			variants: [
				{
					props: {
						variant: "body2",
					},
					style: {
						fontSize: 11,
					},
				},
				{
					props: {
						variant: "body3",
					},
					style: {
						fontSize: 9,
					},
				},
			],
		},
	},
});

const TourCard = ({ tour }) => {
	return (
		<Grid
			item
			xs={3}
		>
			<ThemeProvider theme={theme}>
				<Paper
					elevation={3}
					sx={{ height: 250 }}
				>
					<img
						src={tour.image}
						alt=""
						className="img"
					/>
					<Box px={1}>
						<Typography
							variant="subtitle1"
							component="h2"
						>
							{tour.name}
						</Typography>
						<Box sx={{ display: "flex", alignItems: "center" }}>
							<AccessTime sx={{ width: 12.5 }} />
							<Typography
								variant="body2"
								component="p"
								ml={0.5}
							>
								{tour.duration} hours
							</Typography>
						</Box>
						<Box
							sx={{ display: "flex", alignItems: "center" }}
							mt={3}
						>
							<Rating
								name="read-only"
								value={tour.rating}
								readOnly
								precision={0.5}
								size="small"
							/>
							<Typography
								variant="body2"
								component="p"
								ml={0.5}
							>
								{tour.rating}
							</Typography>
							<Typography
								variant="body3"
								component="p"
								ml={0.5}
							>
								({tour.numberOfReviews} reviews)
							</Typography>
						</Box>
						<Box>
							<Typography
								variant="h6"
								component="h3"
								mt={0}
							>
								From C ${tour.price}
							</Typography>
						</Box>
					</Box>
				</Paper>
			</ThemeProvider>
		</Grid>
	);
};

export default TourCard;
