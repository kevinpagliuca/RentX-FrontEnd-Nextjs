import { ChangeEvent } from 'react';

const textWithAccentAndNumbersRegex = /[^0-9a-zA-Z\u00C0-\u00FF\s]*$/g;
const textWithAccentAndNumbers = (event: ChangeEvent<HTMLInputElement>) => {
  return event.target.value.replace(textWithAccentAndNumbersRegex, '');
};

const noSpecialCaracteresRegex = /([\u0300-\u036f]|[^a-zA-Z0-9\s])/g;
const noSpecialCaracteres = (event: ChangeEvent<HTMLInputElement>) => {
  return event.target.value.replace(noSpecialCaracteresRegex, '');
};

export const TextMask = {
  noSpecialCaracteres,
  textWithAccentAndNumbers,
};
