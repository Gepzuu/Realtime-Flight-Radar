import { useSelector } from "react-redux";

const Header = () => {
  useSelector((store) => store); 

  return (
    <header>
      <div>
        <img src="/p1.png" alt="" />
        <h3>Philippines Realtime Flight Radar</h3>
      </div>
    </header>
  );
};

export default Header;
