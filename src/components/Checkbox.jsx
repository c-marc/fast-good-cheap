import ToggleButton from "./ToggleButton";

const Checkbox = ({ label, checked, handleChange }) => {
  return (
    <div className="checkbox">
      <label htmlFor={label}>
        <ToggleButton checked={checked} />
        <span>{label}</span>
      </label>
      <input
        id={label}
        type="checkbox"
        checked={checked} // OK, mais dans l'inspector montre value
        onChange={() => handleChange(label)}
      />
    </div>
  );
};

export default Checkbox;
