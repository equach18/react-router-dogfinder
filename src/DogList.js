import { Link } from "react-router-dom";
import "./DogList.css"
function DogList({ dogs }) {
  return (
    <div className="DogList">
      <h2 className="DogList-greeting">We have dogs available!!</h2>
      <div className="container">
        {dogs.map((dog) => (
          <div key={dog.name} className="card" style={{width: "18rem"}}>
            <img
              src={`/${dog.src}.jpg`}
              alt={dog.name}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">
                <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DogList;
