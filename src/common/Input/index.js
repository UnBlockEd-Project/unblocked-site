import { withTranslation } from "react-i18next";

import * as S from "./styles";

const Input = ({ id, name, placeholder, onChange, t }) => (
  <S.Container>
    <label> {id} </label>
    <S.Input
      spellcheck="false"
      placeholder={placeholder}
      name={name}
      id={id}
      onChange={onChange}
    />
  </S.Container>
);

export default withTranslation()(Input);