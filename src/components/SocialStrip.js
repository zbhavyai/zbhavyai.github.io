import { faDiscord, faFacebook, faGithub, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const SocialStrip = () => {
  return (
    <Container className="zbhavyai-container-social px-0 py-3">
      <Link to="https://www.github.com/zbhavyai" target="_blank" rel="noopener noreferrer" className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </Link>
      <Link to="https://www.youtube.com/@zbhavyai" target="_blank" rel="noopener noreferrer" className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </Link>
      <Link to="https://www.facebook.com/zbhavyai" target="_blank" rel="noopener noreferrer" className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </Link>
      <Link to="https://www.twitter.com/zbhavyai" target="_blank" rel="noopener noreferrer" className="twitter social">
        <FontAwesomeIcon icon={faXTwitter} size="2x" />
      </Link>
      <Link to="https://discord.com/users/zbhavyai" target="_blank" rel="noopener noreferrer" className="twitter social">
        <FontAwesomeIcon icon={faDiscord} size="2x" />
      </Link>
      <Link to="mailto:zbhavyai@gmail.com" target="_blank" rel="noopener noreferrer" className="email social">
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
      </Link>
    </Container>
  );
};

export default SocialStrip;
