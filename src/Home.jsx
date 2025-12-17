import MultipleItems from "./component/Slider";
import Working from "./component/works";
import CampCards from "./component/CampCards";
import Herosection from "./component/Herosection";
import Layout from "./component/Layout";
const Home = () => {
  return (
    <Layout>
      <Herosection />
      <CampCards />
      <Working />
      <MultipleItems />
    </Layout>
  );
};
export default Home;
