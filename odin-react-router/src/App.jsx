import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
          <li>
            <Link to="profile">Profile page</Link>
            {/* use Link instead of a (a will cause reload) */}
            {/* <a href="profile">Profile page</a> */}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
