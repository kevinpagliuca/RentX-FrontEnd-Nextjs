import { FiUser } from "react-icons/fi";
import { ButtonBase } from "@material-ui/core";
import { HeaderContainer, HeaderContent } from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <h1>Início</h1>

        <strong>
          Faça login
          <ButtonBase>
            <FiUser />
          </ButtonBase>
        </strong>
      </HeaderContent>
    </HeaderContainer>
  );
};
