import { ContainerExam } from "../styles/styleExam";

export function Container() {

  return (
    <>
      <ContainerExam>
        <body>
          <header
            className="page_header"
          >
            <img 
              src="assets/logo01.png" 
              alt="Logo do cabeçalho"
              className="header_logo" 
            />
              <h1>SisLab - Sistema de Gerenciamento Laboratorial</h1>
              <h1>CEDAPP – Centro de Diagnostico Anatomopatológico</h1>
            <nav className="navigation_header">
              <ul>
              </ul>
            </nav>
          </header>
        </body>
        <main>
          <section>
            <h1>Exames Realizados</h1>
            <p></p>
            {/* <a href=""></a> */}
          </section>
        </main>
      </ContainerExam>
      );
    </>
  )
}