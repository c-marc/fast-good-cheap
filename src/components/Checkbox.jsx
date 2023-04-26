const Checkbox = ({ label, index, value, handleChange }) => {
  const id = "id" + index;
  return (
    <div className="checkbox">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="checkbox"
        checked={value} // OK, mais dans l'inspector montre value
        // value={value} // NOPE
        onChange={() => handleChange(index)}
      />
    </div>
  );
};

export default Checkbox;
