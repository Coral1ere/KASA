import Collapse from "./Collapse";

export default function MenuDeroulant(props) {
  return (
    <>
      <div className="menuDeroulant">
        <div className="menuDeroulantTitre">
          <Collapse
            title={props.title}
            content={[props.description, props.equipements]}
          />
        </div>
      </div>
    </>
  );
}
