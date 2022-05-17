import styled from "styled-components";

export const Container = styled.div`
  background: var(--width);
  max-width: 1120px;
  margin: 0;
  padding: 2.5rem 1rem;
  padding: 0rem;
  box-sizing: border-box;
  margin-top: -20px;

  .form {
    background: var(--caixaLogin);
    border: 0.5px solid #f2f2f2;
    color: #333333;
    border-color: #BEBEBE;
    width: 350px;
    margin-right: -10px;
    padding: 1px 30px 12px 25px;
    /* justify-content: center; */

    p {
      text-align: center;
      margin: 10px 0px 8px;
      font-size: 18px;
      font-weight: bold;
      height: 40px;
      color: var(--green);
        /* margin-left: 120px; */
    }

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

  .form input[type="number"],
  .form input[type="text"] {
    width: 100%;
    height: 100%;
    text-align: 50px;
    border: 2.5px solid var(--green);
    border-radius: 5px;
    /* padding-left: 10px; */
    margin: 7px 15px;
    display: flex;
    padding: 9px;
    justify-content: center;
    max-width: 100%;
  }

  .form button {
    display: flex;
    padding: 0 103px;
    height: 40px;
    margin: 7px 15px;
    align-items: center;
    /* margin: 10px 155px; */
    height: center;
    cursor: pointer;
    border-radius: 5px;
    font-family: Open Arial, Helvetica, sans-serif;    
    font-size: 20px;
    color: #FFFFFF;
    background: var(--green);
    line-height: 1.2;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }

  input[type="radio"] {
    cursor: pointer;
    appearance: none;
    width: 24px;
    height: 24px;
    margin-left: 12px;
    border: 3px solid var(--green);
    border-radius: 3px;
    position: relative;
    display: flex;
    /* flex-direction: row; */
    /* align-items: center; */
    /* justify-content: center; */
    outline: none;
  }

  input[type="radio"]::before {
    content: '';
    width: 100%;
    height: 100%;
    background: var(--green);
    border-radius: 3;
    opacity: 0;
    transition: all 300ms ease-in-out;
    position: absolute;
  }

  input[type="radio"]:checked::before {
  opacity: 1;
  }

  input[type="radio"]:focus {
  box-shadow: 0 0 5px var(--green);
}

  .medical_access,
  .patient_access {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 4px 5px 9px;

    label{
      margin: 3px 12px;
      padding-top: 3px;
    }
  }

  .line {
    width: 100%;
    height: 2px;
    margin: 16px 0px 10px -2px;
    background: #BEBEBE;
  }
  
  p {
    margin: 10px 0px -12px 0px;
    font-size: 18px;
    font-weight: bold;
    height: 40px;
    color: var(--green);
    margin-left: 120px;
  }

`;