const Service = ({ Setservice, service, children }) => {
  return (
    <div style={{ padding: "10px" }}>
      <label>{children}</label>
      <select
        value={service}
        onChange={(e) => Setservice(Number(e.target.value))}
      >
        <option value={"0"}>disatisfied (0%)</option>
        <option value={"5"}>it was okay (5%)</option>
        <option value={"10"}>it was good (10%)</option>
        <option value={"20"}>Absolutely good (20%)</option>
      </select>
    </div>
  );
};

export default Service;
