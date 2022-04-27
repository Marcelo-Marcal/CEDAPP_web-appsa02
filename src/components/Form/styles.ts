import styled from "styled-components";

export const Container = styled.div`
  background: var(--width);
  max-width: 1120px;
  margin: 0;
  padding: 2.5rem 1rem;
  padding: 0rem;
  box-sizing: border-box;
  margin-top: -20px;

  form {
    background: #f1f1f1;
    border: 0.5px solid #f2f2f2;
    color: #333333;
    border-color: #BEBEBE;
    width: 428px;
    padding: 11px 30px 17px 29px;
    /* justify-content: center; */
    .login,
    .pw {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      input {
        max-width: 200px;
      }
    }

    input {
      margin-left: 150px;
    }
  }

  form input[type="text"],
  form input[type="password"] {
    width: 100%;
    height: 100%;
    border: 2.5px solid #2E8B57;
    border-radius: 5px;
    padding-left: 10px;
    margin: 10px 10px;
    display: flex;
    padding: 9px;
    justify-content: center;
    max-width: 100%;
  }

  form input[type="submit"] {
    display: flex;
    padding: 0 20px;
    height: 29px;
    margin: 10px 155px;
    height: center;
    cursor: pointer;
    border-radius: 25px;
    font-family: Poppins-Regular;
    font-size: 16px;
    color: #000000;
    background: var(--green);
    line-height: 1.2;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }  

  input[type="radio"] {
    position: absolute;
    z-index: -1;
    opacity: 0;
    /* background-color: var(--green);
    border-color: solid #2E8B57;
    margin-left: 13px;
    cursor: pointer; */
    /* opacity: 0; */

  }
  input[type="radio"] + label {
    position: relative;
    cursor: pointer;
    padding-left: 30px
    
  }  
  input[type="radio"] + label::before {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    left: 0;
    bottom: 0;
    border: solid 2px;
    vertical-align: bottom;
  }

  input[type="radio"]:checked + label::after {
    content: "";
    position: absolute;
    left: 10px;
    bottom: 10px;
    width: 10px;
    height: 20px;
    border-right: solid 3px green;
    border-bottom: solid 3px green;
    transform: rotate(45deg);
  }     

  .medical_access,
  .patient_access {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0px 20px 10px 0px;

    label{
      margin: 10px;
      padding-top: 10px;
    }
  }

  .line {
    width: 100%;
    height: 2px;
    margin: 16px 0px 10px 0px;
    background: #BEBEBE;
  }

  p {
    font-size: 18px;
    font-weight: bold;
    height: 40px;
    color: var(--green);
    margin-left: 120px;
  }

  /* p{
  margin-bottom:15px;
  position: relative;
  display: flex;
  justify-content: center;
  padding: 0.5rem 0.5rem;
  position: absolute;
  left: 200px;
  top: 400px;
} */
`;




// export const Container = styled.form`
//   background: var(--width);
//   max-width: 1120px;
//   margin: 0;
//   padding: 2.5rem 1rem;
//   padding: 0rem;
//   box-sizing: border-box;
//   margin-top: -20px;
//   /* border: 1px solid #dddddd; */


//   .form-login, .form-pw {
//     display: flex;

//     margin: 10px 0 5px 10px;
//     flex-direction: row;

//   }
//   p {
//     height: 40px;
//     color: var(--green);
//     margin-left: 130px;
//   }

//   form {
//     border: 0.5px solid #f2f2f2;
//     background: #f1f1f1;
//     color: #333333;
//     border-color: #BEBEBE;

//     width:45%;
//     margin-left: 210px;
//     width: 430px;
//     padding: 30px;
//     position: absolute;
//     border-radius: 4px;
//     /* font-size: 1.1em; */
//     /* left: 50%;
//     top: 50%;
//     transform: translate(-50%, -50%); */

//     /* justify-content: center; */
//   }

//   form label,
//   form label {
//     width: 180px;
//     height: 20px;
//     margin: 4px;
//     padding-left: 10px;
//     display: flex;
//     padding: 0.3rem;
//   }

//   form input,
//   form input {
//     width:100%;
//     height: 28px;
//     padding: 0 5px;
//     padding-top: 5 7px;
//     border-color: var(--green);
//   }

//   form input[type=submit] {
//     display: flex;
//     width: 90px;
//     padding: 0 20px;
//     height: 29px;
//     cursor: pointer;
//     margin: 10px 0 5px 30px;

//     border-radius: 25px;
//     border-color: var(--green);
//     font-family: Poppins-Regular;
//     font-size: 16px;
//     color: #000000;
//     line-height: 1.2;

//     transition: filter 0.2s;

//     &:hover {
//       filter: brightness(0.9);
//     }
//   }

//   .line {
//     width: 100%;
//     height: 2px;
//     margin: 10px 0 5px;
//     background: #BEBEBE;

//   }

// `;