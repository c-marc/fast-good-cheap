const Checkbox = ({ label, checked, handleChange }) => {
  return (
    <div className="checkbox">
      <label>
        <input
          id={label}
          type="checkbox"
          checked={checked}
          onChange={() => handleChange(label)}
        />
        <div className="toggle" />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
