import React, { useEffect, useRef, useState } from "react";
import { Container, DataContainer, ImageContainer } from "./styles";
import Image from "next/image";
import { FaPhotoVideo } from "react-icons/fa";
import { ButtonBase } from "@material-ui/core";
import { Input } from "../Form/Input";
import { Button } from "../Form/Button";
import { CarIcon, EnvelopeIcon, LockIcon, PhotoIcon } from "../../assets/Icons";
import { NavigationContainer } from "./styles";
import { FiEye, FiEyeOff, FiUser } from "react-icons/fi";
import { Controller, useForm } from "react-hook-form";
export const ProfileData = () => {
  const { control, formState } = useForm();
  const [activeTab, setActiveTab] = useState<"data" | "changePass">("data");
  const [isVisiblePass, setIsVisiblePass] = useState(false);

  function toggleNavigation(tab: "data" | "changePass") {
    setActiveTab(tab);
  }

  const isLoginValid = Object.keys(formState.errors).length !== 0;
  return (
    <Container>
      <ImageContainer>
        <Image src="/Lambo.png" width={180} height={180} objectFit="cover" />
        <span>
          <PhotoIcon />
        </span>
      </ImageContainer>

      <NavigationContainer>
        <ButtonBase
          className={activeTab === "data" ? "active" : undefined}
          onClick={() => toggleNavigation("data")}
        >
          Dados
        </ButtonBase>
        <ButtonBase
          className={activeTab === "changePass" ? "active" : undefined}
          onClick={() => toggleNavigation("changePass")}
        >
          Trocar Senha
        </ButtonBase>
      </NavigationContainer>
      <DataContainer>
        {activeTab === "data" ? (
          <>
            <Controller
              control={control}
              name="name"
              render={({ field: { value = "", onChange, ref, name } }) => (
                <Input
                  id="name"
                  placeholder="Nome"
                  startIcon={<FiUser size={24} />}
                  value={value}
                  name={name}
                  onChange={onChange}
                  ref={ref}
                  filled={!formState.errors.name && value !== ""}
                  error={formState.errors.name}
                />
              )}
            />
            <Controller
              control={control}
              name="email"
              render={({ field: { value = "", onChange, ref, name } }) => (
                <Input
                  id="email"
                  type="email"
                  placeholder="E-mail"
                  startIcon={<EnvelopeIcon />}
                  value={value}
                  name={name}
                  onChange={onChange}
                  ref={ref}
                  filled={!formState.errors.email && value !== ""}
                  error={formState.errors.email}
                />
              )}
            />
            <Controller
              control={control}
              name="CNH"
              render={({ field: { value = "", onChange, ref, name } }) => (
                <Input
                  id="cnh"
                  placeholder="CNH"
                  startIcon={<CarIcon />}
                  value={value}
                  name={name}
                  onChange={onChange}
                  ref={ref}
                  filled={!formState.errors.CNH && value !== ""}
                  error={formState.errors.CNH}
                />
              )}
            />
            <Button>Salvar Alterações</Button>
          </>
        ) : (
          <>
            {activeTab === "changePass" && (
              <>
                <Controller
                  control={control}
                  name="password"
                  render={({ field: { value = "", onChange, ref, name } }) => (
                    <Input
                      id="current_password"
                      placeholder="Senha atual"
                      type={"password"}
                      required
                      autoComplete="off"
                      startIcon={<LockIcon />}                      
                      value={value}
                      name={name}
                      onChange={onChange}
                      ref={ref}
                      filled={!formState.errors.password && value !== ""}
                      error={formState.errors.password}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="password"
                  render={({ field: { value = "", onChange, ref, name } }) => (
                    <Input
                      id="password"
                      placeholder="Nova senha"
                      type={isVisiblePass ? "text" : "password"}
                      required
                      autoComplete="off"
                      startIcon={<LockIcon />}
                      endIcon={
                        <IconActive
                          size={24}
                          id="passwordIcon"
                          onClick={() => setIsVisiblePass(!isVisiblePass)}
                          isVisiblePass={isVisiblePass}
                          style={{cursor: "pointer"}}
                        />
                      }
                      value={value}
                      name={name}
                      onChange={onChange}
                      ref={ref}
                      filled={!formState.errors.password && value !== ""}
                      error={formState.errors.password}
                    />
                  )}
                />

                <Controller
                  control={control}
                  name="password_confirmation"
                  render={({ field: { value = "", onChange, ref, name } }) => (
                    <Input
                      id="password_confirmation"
                      placeholder="Repetir senha"
                      type={isVisiblePass ? "text" : "password"}
                      required
                      autoComplete="off"
                      startIcon={<LockIcon />}
                      endIcon={
                        <IconActive
                          size={24}
                          id="current_password"
                          onClick={() => setIsVisiblePass(!isVisiblePass)}
                          isVisiblePass={isVisiblePass}
                          style={{cursor: "pointer"}}
                        />
                      }
                      value={value}
                      name={name}
                      onChange={onChange}
                      ref={ref}
                      filled={!formState.errors.password_confirmation && value !== ""}
                      error={formState.errors.password_confirmation}
                    />
                  )}
                />
                <Button>Salvar Alterações</Button>
              </>
            )}
          </>
        )}
      </DataContainer>
    </Container>
  );
};

const IconActive = ({ isVisiblePass, ...rest }: any) => {
  return isVisiblePass ? <FiEye {...rest} /> : <FiEyeOff {...rest} />;
};
