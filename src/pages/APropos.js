import Header from "../components/Header";
import Montagnes from "../assets/montagnes.jpg";

const APropos = () => {
  return (
    <div className="aPropos">
      <img
        className="aProposImg"
        src={Montagnes}
        alt="Paysage de montagnes"
      ></img>
      <Header />;
    </div>
  );
};

export default APropos;
