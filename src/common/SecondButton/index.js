import * as S from "./styles";

const SecondButton = ({ color, width, children }) => (
  <S.SecondButton color={color} width={width}>
    {children}
  </S.SecondButton>
);

export default SecondButton;
