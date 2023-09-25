import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import TripsTable from "../../components/tripsTable/tripsTable"

import AddTrip from "../../components/addTrip/addTrip";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />

        <div className="add-trip">
          <AddTrip />
        </div>

        <div className="listContainer">
          <div className="listTitle">Latest Trips</div>
          <TripsTable />
        </div>
      </div>
    </div>
  );
};

export default Home;
