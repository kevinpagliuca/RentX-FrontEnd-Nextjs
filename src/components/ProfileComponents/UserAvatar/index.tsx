import { PhotoIcon } from 'assets/Icons';
import { useAuth } from 'contexts/AuthContext';
import Avatar from 'react-avatar';
import * as S from './styles';
export const UserAvatar = () => {
  const { user } = useAuth();
  return (
    <S.Container>
      <Avatar
        name={user?.name}
        src="https://github.com/kevinpagliuca.png"
        round
        size="180"
        color="var(--main)"
        className="userTxt"
      />
      <span className="photoIcon">
        <PhotoIcon />
      </span>
    </S.Container>
  );
};
