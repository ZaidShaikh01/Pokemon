const SortSelector = ({ sortBy, setSortBy }) => {
  return (
    <div className='controls'>
      <label htmlFor='sort'>Sort By: </label>
      <select
        id='sort'
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="all">All</option>
        <option value='grass'>Grass</option>
        <option value='fire'>Fire</option>
        <option value='water'>Water</option>
        <option value='bug'>Bug</option>
        <option value='normal'>Normal</option>
        <option value='poison'>Poison</option>
        <option value='ground'>Ground</option>
        <option value='electric'>Electric</option>
      </select>
    </div>
  );
};

export default SortSelector;
