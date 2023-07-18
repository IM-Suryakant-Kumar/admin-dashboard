import {
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
} from "recharts";
import { Container, Title } from "../styles/chart.sc";

const Chart = ({ title, data, dataKey, grid }) => {
	return (
		<Container elevation={2}>
			<Title
				variant="h6"
				component="h1"
			>
				{title}
			</Title>
			<ResponsiveContainer
				width="100%"
				aspect={4 / 1}
			>
				<LineChart data={data}>
					<XAxis
						dataKey="name"
						stroke="#5550bd"
					/>
					<Line
						type="monotone"
						dataKey={dataKey}
						stroke="#5550bd"
					/>
					<Tooltip />
					{grid && (
						<CartesianGrid
							stroke="#e0dfdf"
							strokeDasharray="5 5"
						/>
					)}
					<Legend />
				</LineChart>
			</ResponsiveContainer>
		</Container>
	);
};

export default Chart;
