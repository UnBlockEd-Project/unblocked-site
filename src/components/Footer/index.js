import { lazy, Fragment } from "react";
import { Row} from "antd";
import { withTranslation } from "react-i18next";

import * as S from "./styles";

const SvgIcon = lazy(() => import("../../common/SvgIcon"));

const Footer = ({ t }) => {
  const SocialLink = ({ href, src }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <Fragment>
            <Row>
              <p style={{color: "white"}}>BUFFER</p>
              <S.FooterContainer>
                <SocialLink
                  href="https://github.com/"
                  src="github.svg"
                />
                <SocialLink
                  href="https://twitter.com/"
                  src="twitter.svg"
                />
                <SocialLink
                  href="https://www.linkedin.com/"
                  src="linkedin.svg"
                />
              </S.FooterContainer>
            </Row>
            <hr style={{marginTop: "2.0em"}}></hr>
    </Fragment>
  );
};

export default withTranslation()(Footer);
