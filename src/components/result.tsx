function Result({ data = {}, score = 0 }) {
  return (
    <div>
      <h2>
        {score > 0
          ? `Sustainabilty score is ${score}`
          : "Please analyze materials to get sustainability score"}
      </h2>
    <div>
      {Object.keys(data).length > 0 ? 'Result Component' : 'No data'}
    </div>
    </div>
  );
}

export default Result;
