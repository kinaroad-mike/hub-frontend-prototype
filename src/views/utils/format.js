import _ from 'lodash';

export const format = {
  toStringMoney
};

function toStringMoney (x) {
  const num = _.round(x, 2);
  const str = num.toString().replace('-', '');
  const parts = str.split('.');
  if (!parts[1]) {
    parts[1] = '00';
  }

  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  let complete = `$${parts.join('.')}`;
  if (x < 0) {
    complete = `(${complete})`;
  }
  return complete;
}
