const Bar = ({ percentage, limit }) => {
  const wrapper = {
    height: 36,
    width: "100%",
    marginBottom: 20,
    border: "1px solid #ccc",
    position: "relative",
  };

  const backgroundPercentage = {
    height: "100%",
    width: `${(percentage / limit) * 100}%`,
    backgroundColor: percentage > limit ? "red" : "#b1d7e7",
    borderRadius: "inherit",
    transition: "width 1s ease-in-out",
    maxWidth: "100%",
  };

  const labelText = {
    padding: 5,
    color: "#fffff",
    position: "absolute",
  };
  return (
    <div style={wrapper}>
      <span style={labelText}>{`${percentage}%`}</span>
      <div style={backgroundPercentage}></div>
    </div>
  );
};

export default Bar;
