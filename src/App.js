import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import 'leaflet/dist/leaflet.css';
import Header from "./components/Header";
import MapView from './components/MapView';
import DetailView from './components/DetailView';


const api = 'https://coronavirus-tracker-api.herokuapp.com/v2/locations';

function App() {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [mapCenter, setMapCenter]  = useState([25,106])

  function sortedLocationArray(x) {
    return [ ...x].sort((a, b) => {
      return b.latest.confirmed - a.latest.confirmed;
    });
  }

  const onSelection = useCallback((id) => {
    const selectLocation = locations.find(location => location.id === id);
    if(selectLocation === undefined) {
      setSelectedLocation(null);
      return;
    }
    setSelectedLocation(selectLocation);
    const { coordinates: { latitude, longitude } } = selectLocation;
    setMapCenter([latitude, longitude]);
  },[locations]);

  const onDeselectLocation = useCallback(()=>{
    setSelectedLocation(null);
  },[]);
  let detailsView = null;
  if(selectedLocation !== null){
    detailsView = <DetailView location={selectedLocation} onClickClose={ onDeselectLocation } isLoading={isLoading} />
  }
  useEffect(() => {
    // const fetchData = async () => {
    //   setIsError(false);
    //   setIsLoading(true);
    //   try {
    //     const result = await axios(api);
    //     const sortedLocations = sortedLocation(result.data.locations);
    //     setLocations(sortedLocations);
    //     setIsLoading(false);
    //   } catch (error) {
    //     setIsError(true);
    //   }
    // };
    // fetchData();
    setIsLoading(true);
    axios.get(api).then(response=>{
      setLocations(response.data.locations);
      setIsLoading(false);
    }).catch(error => {
      setIsError(true);
    });
  }, []);
      
  return (
    <div className="App">
      <Header 
          locations={locations} 
          isLoading={ isLoading }
          selectedLocation={selectedLocation}
          onSelectItem={onSelection}
          onDeselectItem={onDeselectLocation}/>
      <MapView locations={locations} mapCenter={mapCenter} isLoading={ isLoading }/>
      {detailsView}
    </div>
  );
}

export default App;
