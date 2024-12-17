import { Route, Routes, Navigate } from "react-router-dom";
import DogList from "./DogList";
import DogFinder from "./DogFinder"

function RouteList({dogs}) {
  return (
    <Routes>
      <Route path="/dogs" element={<DogList dogs={dogs}/>} />
      <Route path="/dogs/:name" element={<DogFinder dogs={dogs} />} />
      <Route path="*" element={<Navigate to="/dogs" />} />
    </Routes>
  );
}

export default RouteList;
