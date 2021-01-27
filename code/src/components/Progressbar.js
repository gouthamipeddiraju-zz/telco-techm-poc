import Bar from "./Bar";

const Progressbar = ({ data }) => {
  const { bars, limit } = data;
  return (
    <>
      {bars.length &&
        bars.map((bar, index) => {
          return <Bar key={index} percentage={bar} limit={limit} />;
        })}
    </>
  );
};

export default Progressbar;
