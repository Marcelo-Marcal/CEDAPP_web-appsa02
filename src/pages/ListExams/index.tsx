import { ContainerExam } from "./styles";
import logo02 from "../../assets/logo02.png";

export function ListExams() {

  return (
    <>
      <ContainerExam>
        <div id="container">
          <div className="contenteLint01">
            <header
              id="page_header"
            >
              <div id="header_logo">
                <img
                  id="logo02"
                  src={logo02}
                  alt="Logo do cabeçalho"
                />
              </div>

              <div id="text">
                <strong>
                  SisLab - Sistema de Gerenciamento Laboratorial <br />
                  CEDAPP – Centro de Diagnostico Anatomopatológico
                </strong>
              </div>

              <nav className="navigation_header">
                <ul>
                </ul>
              </nav>
            </header>
          </div>

          <div id="line" ></div>

          <div id="contenteLint02">

            <div id="hist">
              <div id="text_hist01">
                Exames Realizados
                <p></p>
                {/* <a href=""></a> */}
              </div>
            </div>
            
            <div id="divbuttonconsulta">
              <div>
                <button>
                  Consultar
                </button>             
              </div> 
            </div>

            <div id="text_hist02">
              <div className= "text02">
                Exame(s)
              </div>
            </div>


          </div>
        </div>
      </ContainerExam>
    </>
  )
}