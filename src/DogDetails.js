import "./DogDetails.css";
function DogDetails({ dog }) {
  const facts = dog.facts.map((f, i) => <li key={i}>{f}</li>);
  return (
    <div className="DogDetails container" style={{ width: "540px" }}>
      <div className="row justify-content-center">
        <div className="col">
          <img src={`/${dog.src}.jpg`} alt={dog.name} />
        </div>
        <div className="col">
          <div className="card-body">
            <h3 className="card-title">{dog.name}</h3>
            <p className="card-text">(Age: {dog.age})</p>
            <h5>Fun Facts:</h5>
            <ul className="card-text">{facts}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DogDetails;
