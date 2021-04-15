import {format} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export const numberFormat = (number = 0, options = {minimumFractionDigits: 2, maximumFractionDigits: 2}) => {
  return new Intl.NumberFormat('pt-br', options).format(number);
};

export const parseName = name => {
  const parsed = name.split(' ');
  return parsed[0];
};

export const parseBalance = value => {
  return `R$ ${numberFormat(value)}`;
};

export const toNumber = value => {
  return parseInt(value);
};

export const completeDate = value => {
  return format(value, 'dd/MM/yyy | H:mm:ss', ptBR);
};