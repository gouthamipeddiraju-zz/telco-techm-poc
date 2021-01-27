import "../styles/Bar.css";

const Bar = ({ percentage, limit }) => {
  const backgroundPercentage = {
    width: `${(percentage / limit) * 100}%`,
    backgroundColor: percentage > limit ? "red" : "#b1d7e7",
  };
  return (
    <div className="bar-wrapper" data-testid="bars">
      <span className="percentage-label">{`${percentage}%`}</span>
      <div className="background-percentage" style={backgroundPercentage}></div>
    </div>
  );
};

export default Bar;
