import {
	BottomNavigation,
	Box,
	Container,
	CssBaseline,
	Paper,
	Typography,
} from "@mui/material";
import ImageCollage from "../components/ImageCollage";
import CustomizedAccordions from "../components/Accordion";
import BasicModal from "../components/Modal";

const Tour = () => {
	return (
		<Container
			maxWidth="md"
		>
			<CssBaseline />
			<Typography
				variant="h3"
				component="h1"
				mt={3}
				fontSize="2rem"
			>
				Explore the world in Vegas
			</Typography>
			<Box
				mt={3}
				sx={{ display: "flex" }}
			>
				<img
					src="https://media.timeout.com/images/105124791/750/422/image.jpg"
					alt=""
					height={325}
				/>
				<ImageCollage />
			</Box>
			<Box>
				<Typography
					variant="h6"
					component="h4"
					mt={3}
				>
					About this ticket
				</Typography>
				<Typography
					variant="body2"
					component="p"
					mt={3}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Inventore, repellendus commodi. Necessitatibus nemo itaque
					voluptatum rem excepturi numquam aliquid earum iure
					perspiciatis id molestias, delectus repellat, sunt neque
					autem modi.
				</Typography>
			</Box>
			<Box mb={10}>
				<Typography
					variant="h6"
					component="h4"
					mt={3}
				>
					Frequently asked question
				</Typography>
				<CustomizedAccordions />
			</Box>
			<Paper
				sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
				elevation={3}
			>
				<BottomNavigation>
					<BasicModal />
				</BottomNavigation>
			</Paper>
		</Container>
	);
};

export default Tour;
