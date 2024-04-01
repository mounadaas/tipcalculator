const Bill = ({ bill, setBill }) => {
  return (
    <div style={{ padding: "10px" }}>
      <label>How much was the bill?</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </div>
  );
};

export default Bill;
