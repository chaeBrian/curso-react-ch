import React from "react";
import "./footer.css";
import {BiArrowToTop} from 'react-icons/bi';
import {VscGithubInverted, VscFileCode} from 'react-icons/vsc';
import {FaBarcode} from 'react-icons/fa';
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // for smoothly scrolling
  });
};

const Footer = () => {
  return (
    <footer>
      <div className="footer__div">
        <span className="footer__span">
            qatar ecuador senegal netherlands england iran usa wales argentina saudi-arabia mexico
            poland france australia denmark tunisia spain costa-rica germany japan belgium canada morocco croatia brazil serbia switzerland cameroon portugal ghana uruguay south-korea
        </span>
        <span className="footer__span--modified">
            poland france australia denmark tunisia canada morocco croatia brazil serbia qatar ecuador senegal netherlands england iran usa wales argentina saudi-arabia mexico switzerland cameroon portugal ghana uruguay south-korea spain costa-rica germany japan belgium
        </span>
        <span className="footer__span">
            qatar ecuador senegal netherlands england iran usa wales argentina saudi-arabia mexico
            poland france australia denmark tunisia spain costa-rica germany japan belgium canada morocco croatia brazil serbia switzerland cameroon portugal ghana uruguay south-korea
        </span>
        <span className="footer__span--modified">
            poland france australia denmark tunisia canada morocco croatia brazil serbia qatar ecuador senegal netherlands england iran usa wales argentina saudi-arabia mexico switzerland cameroon portugal ghana uruguay south-korea spain costa-rica germany japan belgium
        </span>
        <span className="footer__span">
            qatar ecuador senegal netherlands england iran usa wales argentina saudi-arabia mexico
            poland france australia denmark tunisia spain costa-rica germany japan belgium canada morocco croatia brazil serbia switzerland cameroon portugal ghana uruguay south-korea
        </span>
      </div>
      <ul className="footer__ul">
        <li className="footer__li--modified">
          <button onClick={scrollToTop}>
            <picture>
              <BiArrowToTop size='30px'/>
            </picture>
          </button>
          <a href="https://github.com/chaeBrian" target="_blank" rel="noopener noreferrer">
            <picture >
              <VscGithubInverted size='25px'/>
            </picture>
          </a>
          <a href="https://github.com/chaeBrian/react-ch" target="_blank" rel="noopener noreferrer">
            <picture>
              <VscFileCode size='25px'/>
            </picture>
          </a>
          <span>Brian M. Ibañez</span>
        </li>
        <li className="footer__li">
          <picture className="footer__barCode">
            <FaBarcode size='80px'/>
          </picture>
          <span>COMISION 37080</span>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
