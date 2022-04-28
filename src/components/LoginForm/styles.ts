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
    padding: 1px 30px 17px 25px;
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

  form input[type="number"],
  form input[type="password"] {
    width: 100%;
    height: 100%;
    text-align: 50px;
    border: 2.5px solid #2E8B57;
    border-radius: 5px;
    /* padding-left: 10px; */
    margin: 7px 15px;
    display: flex;
    padding: 9px;
    justify-content: center;
    max-width: 100%;
  }

  form input[type="submit"] {
    display: flex;
    padding: 0 149px;
    height: 40px;
    margin: 7px 15px;
    /* margin: 10px 155px; */
    height: center;
    cursor: pointer;
    border-radius: 5px;
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
    cursor: pointer;
    appearance: none;
    width: 24px;
    height: 24px;
    margin-left: 10px;
    border: 3px solid #2E8B57;
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
    height: 101%;
    background: #2E8B57;
    border-radius: 3;
    opacity: 0;
    transition: all 400ms ease-in-out;
    position: absolute;
  }

  input[type="radio"]:checked::before {
  opacity: 1;
  }

  input[type="radio"]:focus {
  box-shadow: 0 0 5px #2E8B57;
}



  .medical_access,
  .patient_access {
    display: flex;
    text-align: 50px;
    flex-direction: row;
    align-items: center;
    margin: 5px 5px 10px;

    label{
      margin: 2px;
      padding-top: 2px;
    }
  }

  .line {
    width: 100%;
    height: 2px;
    margin: 16px 0px 10px 0px;
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