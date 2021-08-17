import { FiUser } from "react-icons/fi";
import Link from "next/link";
import { ButtonBase } from "@material-ui/core";
import { HeaderContainer, HeaderContent, WithOutHeaderContainer } from "./styles";
import { XLogoIcon } from "../../assets/Icons";

interface HeaderProps {
  headerCarInfo?: boolean;
}

export const Header = ({ headerCarInfo }: HeaderProps) => {
  return (
    <HeaderContainer>
      <Link href="/" passHref>
        <ButtonBase className="buttonLink">
          <XLogoIcon />
        </ButtonBase>
      </Link>
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

export const WithOutHeader = ({}) => {
  return (
    <WithOutHeaderContainer>
      <Link href="/" passHref>
        <ButtonBase className="buttonLink">
          <XLogoIcon />
        </ButtonBase>
      </Link>

      <HeaderContent>
        <h1>teste</h1>

        <strong>
          Faça login
          <ButtonBase>
            <FiUser />
          </ButtonBase>
        </strong>
      </HeaderContent>
    </WithOutHeaderContainer>
  );
};
