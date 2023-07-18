import Chart from "../components/Chart"
import FeaturedInfo from "../components/FeaturedInfo"
import { Container } from "../styles/home.sc"
import userData from "../dummyData.json";

const Home = () => {
  return (
    <Container component="section">
        <FeaturedInfo />
        <Chart data={userData} title="User Analytics" dataKey="Active User" />
    </Container>
  )
}

export default Home