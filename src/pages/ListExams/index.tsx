import { ContainerExam } from "./styles";
import logo02 from "../../assets/logo02.png";

export function ListExams() {

  return (
    <>
      <ContainerExam>
        <div className="container">
          <div className="contenteLint01">
            <div className="header01">
              <body>
                <header
                  className="page_header"
                >
                  <div className="header_logo">
                    <img
                      className="logo02"
                      src={logo02}
                      alt="Logo do cabeçalho"
                    />
                  </div>

                  <div className="text">
                    <h1>SisLab - Sistema de Gerenciamento Laboratorial</h1>
                    <h1>CEDAPP – Centro de Diagnostico Anatomopatológico</h1>
                  </div>

                  <nav className="navigation_header">
                    <ul>
                    </ul>
                  </nav>
                </header>
              </body>
            </div>
          </div>
          <div className="line" ></div>
          <div className="contenteLint01">
            <div className="header01">
              <main>
                <div className="hist">
                  <div className="text_hist01">
                    <h1>Exames Realizados</h1>
                    <p></p>
                    {/* <a href=""></a> */}
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </ContainerExam>
      );
    </>
  )
}