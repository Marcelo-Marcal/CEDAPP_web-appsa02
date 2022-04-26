import styled from "styled-components";

export const Container = styled.form`
  background: #FFFFFF;
  max-width: 1120px;
  margin: 0;
  padding: 2.5rem 1rem;
  padding: 0rem;
  box-sizing: border-box;
  

  form {
    background: #D3D3D3;
    max-width: 350px;
    width: 80%;
    padding: 40px;
    position: absolute;
    left: 60%;
    top: 60%;
    transform: translate(-50%, -50%);
    /* justify-content: center; */
  }

  form input[type=text],
  form input[type=password] {
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
    padding-left: 10px;
    margin: 10px 0;
    display: flex;
    padding: 0.3rem;
    justify-content: center;
    
  }
  
  form input[type=submit]{
    display: flex;
    padding: 0 20px;
    height: 29px;
    height: center;
    cursor: pointer;
    
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