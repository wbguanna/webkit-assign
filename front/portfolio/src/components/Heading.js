import { Link } from 'react-router-dom';
import './mine.css';
import MiniSlide from './MiniSlide';

export default () => {
  return (
    <div className="w3-container">
      <MiniSlide />
      <h1>Summer Holiday</h1>
      <nav>
        <p>
          <Link to="/">Home</Link> |<Link to="/records">Records</Link> |
          <Link to="/contact">Contact</Link> |<Link to="/blogs">blogs</Link>
        </p>
      </nav>
    </div>
  );
};

{
  /* <ol>
<li>
  <Link to="/">Home</Link>
</li>
<li>
  <Link to="/records">Albume</Link>
</li>
<li>
  <Link to="/contact">Contact</Link>
</li>
<li>
  <Link to="/blogs">blogs</Link>
</li>
</ol> */
}
