import { ContainerExam } from "./styles";
import logo02 from "../../assets/logo02.png";
import um from "../../icon/um.png";
import dois from "../../icon/dois.png";
import quatro from "../../icon/quatro.png";
import cinco from "../../icon/cinco.png";


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
                  
                  <button type="button" id="button01">
                    <img
                      id="um"
                      src={um}
                      alt="icon1"
                      height="11"
                      width="25"
                    />
                  </button>
                  <button type="button" id="button01">
                    <img
                      id="dois"
                      src={dois}
                      alt="icon2"
                      height="11"
                      width="25"
                    />
                  </button>

                  <div id="numberPgE">
                    <input className="PgE"
                      type="number"
                      name="number"
                    >
                    </input>
                  </div>

                  <button type="button" id="button01">
                    <img
                      id="quatro"
                      src={quatro}
                      alt="icon4"
                      height="11"
                      width="25"
                    />
                  </button>
                  <button type="button" id="button01">
                    <img
                      id="cinco"
                      src={cinco}
                      alt="icon5"
                      height="11"
                      width="25"
                    />
                  </button>

                </div>
                
                <div className="caixaEx">
                  <div id="caix1">
                    Código
                    <input type="text" name="text">
                    </input>
                  </div>
                  <div id="caix2">
                    Cod.Atendimento
                    <input type="text" name="text">
                    </input>
                  </div>
                  <div id="caix3">
                    Código Laudo
                    <input type="text" name="text">
                    </input>
                  </div>
                  <div id="caix4">
                    Código Pedido
                    <input type="text" name="text">
                    </input>
                  </div>
                  <div id="caix5">
                    Código Laudo
                    <input type="text" name="text">
                    </input>
                  </div>
                  <div id="caix6">
                    Exame
                    <input type="text" name="text">
                    </input>
                  </div>
                  <div id="caix7">
                    PDF
                    <input type="text" name="text">
                    </input>
                  </div>
                </div>
                

              </div>

              
              

            </div>

          </div>
        </div>
      </ContainerExam>
    </>
  )
}