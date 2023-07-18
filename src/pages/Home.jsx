import Chart from "../components/Chart"
import FeaturedInfo from "../components/FeaturedInfo"
import { Container, HomeWidget } from "../styles/home.sc"
import userData from "../dummyData";
import WidgetSm from "../components/WidgetSm";
import WidgetLg from "../components/WidgetLg";

const Home = () => {
  return (
    <Container component="section">
        <FeaturedInfo />
        <Chart data={userData} title="User Analytics" dataKey="Active User" />
        <HomeWidget>
            <WidgetSm />
            <WidgetLg />
        </HomeWidget>
    </Container>
  )
}

export default Home