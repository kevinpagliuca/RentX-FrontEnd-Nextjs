import React, { useState } from 'react';
import Image from 'next/image';
import { ButtonBase } from '@material-ui/core';
import { FiEye, FiEyeOff, FiUser } from 'react-icons/fi';
import { Controller, useForm } from 'react-hook-form';
import Avatar from 'react-avatar';
import {
  Container,
  DataContainer,
  ImageContainer,
  ContainerWrapper,
  DividerRow,
  ContentAside,
  NavigationContainer,
} from './styles';
import { CardCar } from '../CardCar';
import { Input } from '../Form/Input';
import { Button } from '../Form/Button';
import { CarIcon, EnvelopeIcon, LockIcon, PhotoIcon } from '../../assets/Icons';
import { useAuth } from '../../contexts/AuthContext';
import { ChangePasswordForm } from 'components/ProfileComponents/ChangePasswordForm';
import { ProfileDataForm } from 'components/ProfileComponents/ProfileDataForm';

export const ProfileData = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'data' | 'changePass'>('data');
  const [isVisiblePass, setIsVisiblePass] = useState(false);

  function toggleNavigation(tab: 'data' | 'changePass') {
    setActiveTab(tab);
  }

  // const isLoginValid = Object.keys(errors).length !== 0;
  return (
    <>
      <ContainerWrapper>
        <Container>
          <ImageContainer>
            <Avatar
              name={user?.name}
              round
              size="180"
              color="var(--main)"
              className="userTxt"
            />
            {/* <Image src="/Lambo.png" width={180} height={180} objectFit="cover" /> */}
            <span className="photoIcon">
              <PhotoIcon />
            </span>
          </ImageContainer>

          <NavigationContainer>
            <ButtonBase
              className={activeTab === 'data' ? 'active' : undefined}
              onClick={() => toggleNavigation('data')}
            >
              Dados
            </ButtonBase>
            <ButtonBase
              className={activeTab === 'changePass' ? 'active' : undefined}
              onClick={() => toggleNavigation('changePass')}
            >
              Trocar Senha
            </ButtonBase>
          </NavigationContainer>
          <DataContainer>
            {activeTab === 'data' ? (
              <ProfileDataForm />
            ) : (
              <ChangePasswordForm />
            )}
          </DataContainer>
        </Container>

        <DividerRow />

        <Container>
          <ContentAside>
            <h1>Agendamentos Feitos</h1>
          </ContentAside>
          <CardCar />
        </Container>
      </ContainerWrapper>
    </>
  );
};

const IconActive = ({ isVisiblePass, ...rest }: any) => {
  return isVisiblePass ? <FiEye {...rest} /> : <FiEyeOff {...rest} />;
};
