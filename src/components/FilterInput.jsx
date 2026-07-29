const InputFilter = ({ filter, onFilterChange }) => {
  return (
    <div className='filter'>
      <input
        type='text'
        placeholder='Search for the pokemon by its name'
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
      />
    </div>
  );
};

export default InputFilter;
