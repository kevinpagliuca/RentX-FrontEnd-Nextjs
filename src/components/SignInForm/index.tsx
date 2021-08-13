import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FiEye, FiEyeOff, FiX } from "react-icons/fi";
import { EnvelopeIcon, EyeIcon, LockIcon } from "../../assets/Icons";
import { Input } from "../Form/Input";

import { FormContainer } from "./styles";

export const SignInForm = () => {
  const { register, formState, getValues, control } = useForm();
  const [isVisiblePass, setIsVisiblePass] = useState(false);

  return (
    <FormContainer>
      <h1>Estamos quase lá.</h1>
      <span>Faça seu login para começar uma experiência incrível.</span>

      <Controller
        control={control}
        name="email"
        render={({ field: { value, onChange, ref } }) => (
          <Input
            id="email"
            startIcon={<EnvelopeIcon />}
            placeholder="E-mail"
            ref={ref}
            value={value}
            onChange={onChange}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field: { value, onChange, ref } }) => (
          <Input
            id="password"
            type={isVisiblePass ? "text" : "password"}
            placeholder="Senha"
            startIcon={<LockIcon />}
            endIcon={
              <IconActive
                style={{ cursor: "pointer" }}
                onClick={() => setIsVisiblePass(!isVisiblePass)}
                isVisiblePass={isVisiblePass}
              />
            }
            ref={ref}
            value={value}
            onChange={onChange}
          />
        )}
      />
    </FormContainer>
  );
};

const IconActive = ({ isVisiblePass, ...rest }: any) => {
  return isVisiblePass ? <FiEye {...rest} /> : <FiEyeOff {...rest} />;
};
