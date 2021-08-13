import Link from "next/link";

import { FiUser } from "react-icons/fi";
import { XLogoIcon } from "../../assets/Icons";

import { ButtonBase } from "@material-ui/core";

import { HeaderContainer, HeaderContent } from "./styles";

export const Header = () => {
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
