import "./index.scss";

import GithubSVG from "../Svg/github";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__content">
          <a href="https://github.com/celebitolga" target="_blank">
            <GithubSVG />
            Tolga Çelebi
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
