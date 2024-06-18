import { useEffect, useState } from "react";
import Header from "./components/Header";
import ListView from "./pages/ListView";
import MapView from "./pages/MapView";
import { useDispatch } from "react-redux";
import { getFlights } from "./redux/actions/flightaActions";
import Modal from "./components/Modal";
const App = () => {
  
  const [isMapView, setIsMapView] = useState(true);
  
  const [detailId, setDetailId] = useState(null);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getFlights());
    setInterval(() => {
      dispatch(getFlights());
    }, 5000);
  }, []);
  return (
    <div>
      <Header />
      
     
      {isMapView ? (
        <MapView setDetailId={setDetailId} />
      ) : (
        <ListView setDetailId={setDetailId} />
      )}
    
      {detailId && (
        <Modal detailId={detailId} close={() => setDetailId(null)} />
      )}
    </div>
  );
};

export default App;
