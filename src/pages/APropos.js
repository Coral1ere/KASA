import Header from "../components/Header";
import Montagnes from "../assets/montagnes.jpg";
import "../style/home.css";

const APropos = () => {
  return (
    <div className="APropos">
      <Header />
      <img
        className="AProposImg"
        src={Montagnes}
        alt="Paysage de montagnes"
      ></img>
    </div>
  );
};

export default APropos;
