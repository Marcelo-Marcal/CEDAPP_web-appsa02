import styled from "styled-components";

export const Container = styled.form`
  background: #f0f2f5;
  max-width: 1120px;
  margin: 0;
  padding: 2.5rem 1rem;
  padding: 0rem;
  box-sizing: border-box;
  border: 1px solid #dddddd;
  
  
  .form-login, .form-pw {
    display: flex; 
    flex-direction: row;
    margin: 10px 0 5px 10px;
        
  }

  form {
    border: #dddddd;
    background: #ffffff;
    color: #333333;
    max-width: 400px;
    margin-top: 110px;
    margin-left: -125px;
    width: 80%;
    padding: 20px;
    position: absolute;
    font-size: 1.1em;
    left: 60%;
    top: 60%;
    transform: translate(-50%, -50%);
    
    /* justify-content: center; */
  }

  form label[type=name-login],
  form label[type=name-password] {
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
    padding-left: 10px;
    margin: 4px;
    display: flex;
    padding: 0.3rem;
  }

  form input[type=text],
  form input[type=password] {
    width:100%; 
    height: 25px;
    padding: 0 5px;
    padding-top: 5 7px;
  }
  
  form input[type=submit] {
    display: flex;
    width: 90px;
    padding: 0 20px;
    height: 29px;
    height: center;
    cursor: pointer;
    margin: 10px 0 5px 30px;
    
    border-radius: 25px;
    font-family: Poppins-Regular;
    font-size: 16px;
    color: #000000;
    line-height: 1.2;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
  
  .line {
    width: 100%;
    height: 1px;
    margin: 10px 0 5px;
    background: #696969;
  }
  
`;