import Slideshow from "../components/Slideshow";
import { useParams } from "react-router-dom";
import "../style/ficheLogement.css";
import Etoiles from "../components/Etoiles";
import Tags from "../components/Tag";
import logements from "../data/logements.json";
import Menu from "../components/MenuDeroulant";
import Erreur from "./Erreur404";

export default function FicheLogement() {
  const identifier = useParams();
  const logement = logements.find((logement) => logement.id === identifier.id);
  if (!logement) {
    return <Erreur />;
  }

  return (
    <>
      <main className="ficheLogement">
        <div className="carrousel-logement">
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

            <div className="etoile-logement">
              <Etoiles etoile={logement.etoile} />
            </div>
          </div>
        </div>

        <div className="menuLogement">
          <div className="menuDescription">
            <Menu title={"Description"} description={logement.description} />
          </div>
          <div className="menuEquipements ">
            <Menu
              title={"Equipements"}
              description={logement.equipements?.map((equipement) => (
                <li key={equipement}> {equipement} </li>
              ))}
            />
          </div>
        </div>
      </main>
    </>
  );
}
