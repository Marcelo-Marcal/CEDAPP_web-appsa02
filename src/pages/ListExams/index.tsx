import { ContainerExam } from "./styles";
import logo02 from "../../assets/logo02.png";

export function ListExams() {

  return (
    <>
      <ContainerExam>
        <div id="container">
          <div className="containerLint01">
            <header
              id="page_header"
            >
              <div id="header_logo">
                <img
                  id="logo02"
                  src={logo02}
                  alt="Logo do cabeçalho"
                />

                <div id="text">
                  <strong>
                    SisLab - Sistema de Gerenciamento Laboratorial <br />
                    CEDAPP – Centro de Diagnostico Anatomopatológico
                  </strong>
                </div>

              </div>


              <nav className="navigation_header">
                <ul>
                </ul>
              </nav>
            </header>
          </div>

          <div id="line" ></div>

          <div id="containerLint02">

            <div id="hist">

              <div id="text_hist01">
                <div>
                  Exames Realizados
                </div>
              </div>

              <div id="divbuttonconsulta">
                <button className="buttonConsultar">
                  Consultar
                  {/* <a href=""></a> */}
                </button>
              </div>

              <div id="text_hist02">
                <div className="text02">
                  Exame(s)
                </div>
              
                <div className="text03">
                  <input></input>
                </div>

              </div>

              
              

            </div>

          </div>
        </div>
      </ContainerExam>
    </>
  )
}