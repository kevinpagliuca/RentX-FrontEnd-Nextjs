import { FiUser } from "react-icons/fi";
import Link from "next/link";
import { ButtonBase } from "@material-ui/core";
import { HeaderContainer, HeaderContent } from "./styles";
import { useAuth } from "../../contexts/AuthContext";
import Avatar from "react-avatar";

export const Header = () => {
  const { isAuthenticated, user, signOut } = useAuth();
  async function handleLogout() {
    await signOut()
  }
  return (
    <HeaderContainer>
      <HeaderContent>
        <h1>Início</h1>
        {!isAuthenticated ? (
          <Link href="/auth">
            <a className="signInTxt">
              Faça Login
              <ButtonBase>
                <FiUser />
              </ButtonBase>
            </a>
          </Link>
        ) : (
          <div className="userHeaderContainer">
            <Link href="/profile">
              <a className="userName">{user.name}</a>
            </Link>
            <button onClick={handleLogout}>Sair</button>
            <Avatar
              name={user.name}
              round={true}
              size="48"
              className="userTxt"
              color="var(--main)"
            />
          </div>
        )}
      </HeaderContent>
    </HeaderContainer>
  );
};
