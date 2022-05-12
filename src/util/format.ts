// import React from 'react';
// import InputMask from 'react-input-mask';

// const MaskeInput = ({ value, onChange }) => {
//   return (<InputMask mask= "999.999.999-99" value = { value } onChange = { onChange } />);
// }

// export default MaskeInput;



export const mask = (v: string) => {
  v = v.replace(/\D/g, "")

  if (v.length <= 14) {
    v = v.replace(/^(\d{6})(\d)/, "$1.$2")
  } else {
    v = v.replace(/\D/g, "")
    v = v.replace(/(\d{3})(\d)/, "$1.$2")
    v = v.replace(/(\d{3})(\d)/, "$1.$2")
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2")

  }

  return v
}