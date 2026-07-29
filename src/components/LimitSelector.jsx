const LimitSelctor = ({ limit, setLimit }) => {
  return (
    <div className='controls'>
      <label for='limit'>Show: </label>
      <select
        id='limit'
        value={limit}
        onChange={(e) => setLimit(Number(e.target.value))}
      >
        <option value='5'>5</option>
        <option value='10'>10</option>
        <option value='20'>20</option>
        <option value='30'>30</option>
        <option value='40'>5</option>
        <option value='50'>50</option>
        <option value='60'>60</option>
        <option value='70'>70</option>
        <option value='80'>80</option>
        <option value='90'>90</option>
        <option value='100'>100</option>
      </select>
    </div>
  );
};

export default LimitSelctor;
