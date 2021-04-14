export const numberFormat = (number = 0, options = {minimumFractionDigits: 2, maximumFractionDigits: 2}) => {
  return new Intl.NumberFormat('pt-br', options).format(number);
};

export const parseName = name => {
  const parsed = name.split(' ');
  return parsed[0];
}

export const parseBalance = value => {
  return `R$ ${numberFormat(value)}`
}