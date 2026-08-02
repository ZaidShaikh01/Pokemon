import { Link } from "react-router"
import { FaMoon, FaSun } from "react-icons/fa";
const Header = ({isDarkMode,Onchange}) => {
  return (

    <div className='top-nav'>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <button onClick={Onchange} className="toggle-button">
        {
          isDarkMode ? <FaMoon />  : <FaSun />
        }
      </button>
    </div>
   
  );
};

export default Header;
