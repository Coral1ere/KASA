import Logo from "../assets/logo.jpg";
const Header = () => {
  return (
    <div className="Header">
      <div className="logo">
        <img src={Logo} alt="Logo Kasa"></img>
      </div>
      <div className="Headers">
        <div className="Headersa">
          <a className="accueil" href="/">
            Accueil
          </a>
          <a className="aPropos" href="./APropos">
            A Propos
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
