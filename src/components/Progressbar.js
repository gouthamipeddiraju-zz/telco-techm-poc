import Bar from "./Bar";

const Progressbar = ({ data }) => {
  const { bars } = data;
  return (
    <>
      {bars.length &&
        bars.map((bar, index) => {
          return <Bar key={index} percentage={bar} />;
        })}
    </>
  );
};

export default Progressbar;
