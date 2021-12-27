import { Link } from "react-router-dom";
import './Splash.css';

function Splash() {
  return (
    <div className="Splash flex-col">
      <Link to="/login" className="title-link">
        多視角賞屋系統
      </Link>
      <span>multi-angle</span>
    </div>
  );
}

export default Splash;
