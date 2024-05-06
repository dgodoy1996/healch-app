import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
  }

  return (
    <nav className='bg-stone-300  bg-cover h-10 text-2xl font-bold'>
      <Link to="/">Home</Link>
      &nbsp; | &nbsp;
      <Link to="/wellness">Wellness</Link>
      &nbsp; | &nbsp;
      <Link to="/recipes">Search Recipes</Link>
      &nbsp; | &nbsp;
      <Link to="/recipes/my-recipes">My Recipes</Link>
      &nbsp; | &nbsp;
      <span className='font-light'>Welcome, {user.name}</span>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
      <br />
    </nav>
  );
}