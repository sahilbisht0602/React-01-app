const Shimmer = () => {
  return (
    <div className="resturant-list">
      {Array(10)
        .fill("")
        .map((e, index) => {
          return (
            <div key={index} className="shimmar-card">
              <h2 className="border-line"></h2>
              <h3 className="border-line"></h3>
            </div>
          );
        })}
    </div>
  );
};

export default Shimmer;
