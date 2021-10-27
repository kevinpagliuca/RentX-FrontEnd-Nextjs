import React, { useState } from 'react';

import { ChangePasswordForm } from 'components/ProfileComponents/ChangePasswordForm';
import { ProfileDataForm } from 'components/ProfileComponents/ProfileDataForm';
import { TabNavigation } from 'components/ProfileComponents/TabNavigation';
import { UserAvatar } from 'components/ProfileComponents/UserAvatar';

import * as S from './styles';

type TabOptions = 'data' | 'changePass';

export const ProfileUserData = () => {
  const [activeTab, setActiveTab] = useState<TabOptions>('data');

  function toggleNavigation(tab: TabOptions) {
    setActiveTab(tab);
  }

  return (
    <S.Container>
      <UserAvatar />
      <TabNavigation
        activeTab={activeTab}
        toggleNavigation={toggleNavigation}
      />
      <S.DataContainer>
        {activeTab === 'data' ? <ProfileDataForm /> : <ChangePasswordForm />}
      </S.DataContainer>
    </S.Container>
  );
};
