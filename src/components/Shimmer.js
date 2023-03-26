const Shimmer = () => {
  return (
    <div className="flex items-center justify-center flex-wrap">
      {Array(10)
        .fill("")
        .map((e, index) => {
          return (
            <div
              key={index}
              className="card w-[300] h-[300] bg-yellow-100 mx-5 my-2 border-radius"
            >
              <h2 className="w-2/4 my-5 h-6 bg-yellow-200"></h2>
              <h3 className="w-3/4 my-5 h-6 bg-yellow-200"></h3>
              <h3 className="w-2/4 my-5 h-6 bg-yellow-200"></h3>
              <h3 className="w-3/4 my-5 h-6 bg-yellow-200"></h3>
            </div>
          );
        })}
    </div>
  );
};

export default Shimmer;
