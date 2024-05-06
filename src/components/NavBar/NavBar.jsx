import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className='bg-stone-300 h-10 text-xl font-bold'>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/">
          <img className="full w-20 h-10" src="https://i.imgur.com/LNq3qHb.png[/img]" alt="Home" />
        </Link>
        <span>&nbsp; | &nbsp;</span>
        <Link to="/wellness">Wellness</Link>
        <span>&nbsp; | &nbsp;</span>
        <Link to="/recipes">Search Recipes</Link>
        <span>&nbsp; | &nbsp;</span>

        <span className='font-light'>Welcome, {user.name}</span>
        <span>&nbsp; | &nbsp;</span>
        <Link to="" onClick={handleLogOut}>Log Out</Link>
        <br />
      </div>
    </nav>
  )  
}