import ToggleButton from "./ToggleButton";

const Checkbox = ({ label, checked, handleChange }) => {
  return (
    <div className="checkbox">
      <label htmlFor={label}>
        <input
          id={label}
          type="checkbox"
          checked={checked} // OK, mais dans l'inspector montre value
          onChange={() => handleChange(label)}
        />
        <div className="toggle" />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
