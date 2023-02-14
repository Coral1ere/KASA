import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import { useParams, Navigate } from "react-router-dom";
import "../style/ficheLogement.css";
import Rating from "../components/Rating";
import Tags from "../components/Tag";
import logements from "../data/logements.json";
import Menu from "../components/MenuDeroulant";
import Footer from "../components/Footer";

export default function FicheLogement() {
  const identifier = useParams();
  const logement = logements.find((logement) => logement.id === identifier.id);
  if (!logement) {
    return <Navigate to="./Erreur404" />;
  }

  return (
    <>
      <Header />
      <main className="ficheLogement">
        <div className="carrouselLogement">
          <Slideshow pictures={logement.pictures} />
        </div>

        <div className="dataLogement">
          <div className="adresseLogement">
            <div className="localisationLogement">
              <h1 className="titleFicheLogement">{logement?.title}</h1>
              <p className="txtLocationLogement">{logement.location}</p>
            </div>

            <div className="tagLogement">
              <Tags tags={logement.tags} />
            </div>
          </div>

          <div className="dataPropLogement">
            <div className="ficheProp">
              <div className="detailsProp">
                <p>{logement.host.name}</p>
                <img
                  src={logement.host.picture}
                  alt=""
                  className="logementHostPicture"
                />
              </div>
            </div>

            <div className="notesLogement">
              <Rating rating={logement.rating} />
            </div>
          </div>
        </div>
        <div className="menuLogement">
          <div className="menuDescription">
            <Menu title={"Description"} description={logement.description} />
          </div>
          <div className="menuEquipements">
            <Menu
              title={"Équipements"}
              description={logement.equipments.map((equipement) => (
                <li key={equipement}> {equipement} </li>
              ))}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
