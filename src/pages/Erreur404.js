import Header from "../components/Header";
import Erreur404 from "../assets/404.jpg";
import "../style/erreur404.css";

const Erreur = () => {
  return (
    <div className="erreurs">
      <Header />
      <div className="erreur">
        <img className="erreur404" src={Erreur404} alt="Erreur 404"></img>
        <p className="oups">
          Oups ! La page que <br /> vous demandez n'existe pas.
        </p>
      </div>
      <a className="retour" href="/">
        Retourner sur la page d'accueil
      </a>
    </div>
  );
};

export default Erreur;
