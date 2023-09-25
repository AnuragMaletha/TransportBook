import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./Trucks.scss";
import TrucksTable from "../../components/trucksTable/trucksTable";

import AddTruck from "../../components/addTruck/addTruck";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />

        <div className="add-trip">
          <AddTruck />
        </div>

        <div className="listContainer">
          <div className="listTitle">Trucks</div>
          <TrucksTable />
        </div>
      </div>
    </div>
  );
};

export default Home;
