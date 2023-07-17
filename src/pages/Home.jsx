import TourCard from "../components/TourCard";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import SearchAppBar from "../components/AppBar";
import cities from "../data.json";

const Home = () => (
	<Box>
		<SearchAppBar />
		<Container sx={{ my: 5 }}>
			{cities.map((city) => (
				<>
					<Typography
						key={city.id}
						variant="h4"
						component="h2"
						mt={5}
						mb={3}
					>
						Top {city.name} Tours
					</Typography>
					<Grid
						container
						spacing={5}
					>
						{city.tours.map((tour) => (
							<TourCard
								key={tour.id}
								tour={tour}
							/>
						))}
					</Grid>
				</>
			))}
		</Container>
	</Box>
);

export default Home;
