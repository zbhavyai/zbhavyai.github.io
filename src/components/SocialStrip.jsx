import {
  faDiscord,
  faFacebook,
  faGithub,
  faGoogle,
  faHackerrank,
  faInstagram,
  faLinkedinIn,
  faTelegram,
  faWhatsapp,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProfileList from "../data/profiles.json";

const iconMap = {
  faDiscord,
  faEnvelope,
  faFacebook,
  faGithub,
  faGoogle,
  faHackerrank,
  faInstagram,
  faLinkedinIn,
  faTelegram,
  faWhatsapp,
  faXTwitter,
  faYoutube,
};

const SocialStrip = () => {
  return (
    <Container className="zbhavyai-container-social px-0 py-3">
      {ProfileList?.filter((profile) => profile["show"]).map((profile) => {
        const IconComponent = iconMap[profile["faIcon"]];

        return (
          <Link key={profile["name"]} to={profile["link"]} target="_blank" rel="noopener noreferrer" className="social">
            <FontAwesomeIcon icon={IconComponent} size="2x" />
          </Link>
        );
      })}
    </Container>
  );
};

export default SocialStrip;
