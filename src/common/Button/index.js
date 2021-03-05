import * as S from "./styles";

const Button = ({ color, width, children, disabled }) => (
  <S.Button color={color} width={width} disabled={disabled}>
    {children}
  </S.Button>
);

export default Button;
