import Header from "../components/Header";
import Montagnes from "../assets/montagnes.jpg";
import MontagnesMob from "../assets/montagnesMob.jpg";
import "../style/home.css";
import "../style/apropos.css";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";

const APropos = () => {
  return (
    <div className="APropos">
      <Header />
      <div className="AProposImg">
        <img
          className="AProposImgImg"
          src={Montagnes}
          alt="Paysage de montagnes"
        ></img>
        <img
          className="AProposImgMob"
          src={MontagnesMob}
          alt="Paysage de montagnes"
        ></img>
      </div>
      <div className="AProposSection">
        <Collapse
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
        />
        <Collapse
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Collapse
          title="Service"
          content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        />
        <Collapse
          title="Responsabilité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
      <Footer />
    </div>
  );
};

export default APropos;
