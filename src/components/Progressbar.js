import Bar from "./Bar";

const Progressbar = ({ data }) => {
  const { bars, buttons, limit } = data;
  return (
    <>
      {bars.length &&
        bars.map((bar) => {
          return <Bar percentage={bar} />;
        })}
    </>
  );
};

export default Progressbar;
