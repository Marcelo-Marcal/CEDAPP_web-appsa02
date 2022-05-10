import styled from "styled-components";

export const ContainerExam = styled.div`

  #container {
    background: #ffffff;
    max-width: 100%;
    margin-top: -10px;
    height: 100%;

  }
  
  .containerLint01 {
    background: #f1f1f1;
    max-width: 90%;
    margin: auto;
    height: 100%;
    border-radius: 2px;
    padding: 16px;  

    #page_header {
      width: 75%;
      max-width: 80%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
  
      /* font-size: 100%; */
      margin-top: 0px;
      border-radius: 2px;
    }
  }


  #header_logo {
    width: 60%;
  }

  #logo02 {
    /* margin-bottom: 1px; */
    width: 70%;
    margin-left: -2px;
    display: flex;
    margin-top: 1px;
    
  }

  #text {
    max-width: 80%;
    width: 80%;
    height: 80%;
    margin-left: -0.2%;
    align-items: -50px;
    /* margin-right: -50%; */
    margin-top: 15px;
    font-size: 100%;
    color: gray;
    border-radius: 2px;

  } 

  .navigation_header {
    /* text-align: center; */
  }

  #line {    
    margin-top: 8px;
    width: 90%;
    height: 3px;
    margin-left: 5%;
    background: #f1f1f1;
  }

  #containerLint02 {
    background: #f1f1f1;
    border: 1px solid #e6e6e6;
    max-width: 90%;
    margin: auto;
    margin-top: 8px;
    border-radius: 2px;
    padding: 3.5px;
    display: flex;
  }

  #hist {
    background: #ffffff;
    border: 1px solid #e6e6e6;
    width: 98%;
    margin: auto;
    display: flex;
    height: 575px;
    margin-top: 8px;
    border-radius: 3px;
    display: inline-block;
    /* color: gray; */
  }    
  
  #text_hist01 {
    /* border: 1px solid #ff0000; */
    background: var(--green);
    border: 1px solid #e6e6e6;
    width: 99%;
    padding: 0.5%;
    display: flex;
    align-items: center;
    margin: auto;
    height: 80px;
    font-size: 150%;
    margin-top: 4px;
    margin-left: 0.5%;
    float: left;
    border-radius: 3px;
    color: #009985;
    font-weight: bold;

  }
  .buttonPower {
    background: var(--green);
    border-color: var(--green);
    border: none;
    width: 25px;
    height: 25px;
    margin-left: 70%;
    position: absolute;
    display: flex;
    
    #power {
      display: flex;
      width: 25px;
      height: 25px;
      background: var(--green);
    }
  }

  .inputFilter {
    width: 40%;
    height: 40px;
    text-align: 50px;
    border: 2.5px solid var(--green);
    border-radius: 5px;
    margin: 7px 15px;
    margin-left: 1px;
    display: flex;
    padding: 9px;
  }

  #divbuttonconsulta {
    background: #ffffff;
    width: 96%;
    display: flex;
    align-items: center;
    padding: 1px;
    margin-top: 40px;
    margin-left: 2%;
    border-top: 3px solid #f1f1f1;
    border-bottom: 3px solid #f1f1f1;   

    height: 70px;

  }

  .buttonConsultar {
    background: var(--green);
    width: 40px;
    height: 40px;
    margin-left: -10px;
    border-radius: 5px;
    border-color: #f1f1f1;
    border: 1px solid #e6e6e6;
    padding: 4px 10px 4px 10px; 
    font-weight: bold;
    
    #pesquisa{
      width: 25px;
      height: 25px;
      margin-top: 3px;
      margin-left: -2px;

    }
    
  }

  #text_hist02 {
    background: #ffffff;
    width: 96%;
    display: flex;
    flex-direction: column;
    /* width: 750px; */
    height: 490px;
    margin: 0 auto;
    margin-top: 5px;
    margin-left: 2%;
    border-radius: 2px;
  }
  
  .text02 {
    /* background: #6699ff; */
    background: #f1f1f1;
    border: 1px solid #e6e6e6;
    width: 100%;
    margin: 0 auto;
    margin-top: 1px;
    align-items: center;
    height: 55px;
    text-align: center;
    /* margin-left: 40%; */
    font-size: 15px;
    color: black;
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    font-weight: bold;
  }

  #text_hist03 {
    width: 96%;
    display: flex;
    margin: 0 auto;
    margin-left: 2%;
    border-radius: 2px;
  }

  .examList {
    background: #f1f1f1;
    /* border: 1px solid #e6e6e6; */
    border: 1px solid #ff0000;
    width: 100%;
    margin: 0 auto;
    top: 0;
    align-items: center;
    height: 30%;
    margin-top: 10px;
    text-align: center;
    color: gray;
    font-size: 19px;
    
    display: flex;    
    border-radius: 5px;
    
    #examData {
      border: 1px solid #ff0000;
      width: 70%;
      height: 80%;
      margin-left: 12px;
      font-size: 80%;
      color: gray;
      text-align: left;
      font-weight: bold;

      .patientName {
        font-size: 120%;
        color: var(--green);
        font-weight: bold;
      }
    }
    #PDF {
      width: 90px;
      height: 90px;
      display: flex;
      margin-left: 10%;
      display: flex;
      /* position: absolute; */
      /* max-width: 10%; */
      
      .buttonPDF {
        float:right;
        max-width: 20%;
        border: 1px solid #ff0000;
        width: 80px;
        height: 80px;
        margin-top: 0px;
        position: absolute;
        /* position: relative; */
        display: flex;

        #pdf_icon {
          width: 99%;
          height: 99%;
          margin-top: 1px;
          margin-left: -5px;
        }
      }
    }
  }
  
  .PgE {
    border: 1px solid #d9d9d9;
    max-width: 30px;
    /* margin-left: 0px; */
    /* margin-right: 0px; */
    width: 20px;
    height: 18px;
  }

  .caixaEx {
    float: left;
    font-size: 70%;
    font-weight: bold;

  } 
`;