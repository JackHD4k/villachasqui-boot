/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
export default function page() {
  return (
    <div className="container">
      <h3 class="py-4 mb-4 border-bottom border-2 border-danger-subtle fw-bold" style={{ color: '#d1510f' }}>
        FOTOS TURISTICOS DE CENTRO DE LIMA
      </h3>
      <div class="row">
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <img
            src="../img_tur/BCR.JPG"
            class="w-100 shadow-1-strong rounded mb-4"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#modalBCR"
            alt="Boat on Calm Water"
          />


          <div class="modal fade" id="modalBCR" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5 fw-bold" id="exampleModalLabel">MUSEO DEL BANCO CENTRAL DE RESERVA DEL PERÚ</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div className="container">
                    <img src="../img_tur/BCR.JPG" className="w-100" alt="asdf" />
                    <p className="py-4 fs-5">
                      El Museo Central, antigua sede del Banco de Reserva del Perú construida en 1922, ahora es un espacio cultural. Se utiliza el diálogo como herramienta para construir comunidad, fomentando la interacción entre visitantes y el arte.
                    </p>
                    <p className="blockquote-footer fs-6">
                      Margiorit Mirella Ramos Casas
                    </p>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
              </div>
            </div>
          </div>

          <img
            src="../img_tur/CATEDRAL.JPG"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Wintry Mountain Landscape"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#modalCatedral"
          />

          <div class="modal fade" id="modalCatedral" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5 fw-bold" id="exampleModalLabel">LA BASÍLICA CATEDRAL DE LIMA</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div className="container">
                    <img src="../img_tur/CATEDRAL.JPG" className="w-100" alt="asdf" />
                    <p className="py-4 fs-5">
                      La Basílica Catedral de Lima es una construcción religiosa situada en el corazón de la ciudad de Lima. Francisco Pizarro colocó la primera piedra, tras la fundación de la ciudad en 1535.
                    </p>
                    <p className="blockquote-footer fs-6">
                      Margiorit Mirella Ramos Casas
                    </p>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
          <img
            src="../img_tur/LITERATURA.JPG"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Mountains in the Clouds"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#modalLiteratura"
          />


          <div class="modal fade" id="modalLiteratura" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5 fw-bold" id="exampleModalLabel">LA CASA DE LA LITERATURA PERUANA</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div className="container">
                    <img src="../img_tur/LITERATURA.JPG" className="w-100" alt="asdf" />
                    <p className="py-4 fs-5">
                      La Casa de la Literatura Peruana es un lugar de encuentro, reflexión y creación en torno a la literatura. Como institución cultural y educativa que pertenece al Ministerio de Educación, tanto el ingreso y los servicios son gratuitos.
                    </p>
                    <p className="blockquote-footer fs-6">
                      Margiorit Mirella Ramos Casas
                    </p>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
              </div>
            </div>
          </div>


          <img
            src="../img_tur/MUNICIPAL.JPG"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#modalMunicipal"
          />

          <div class="modal fade" id="modalMunicipal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5 fw-bold" id="exampleModalLabel">PALACIO MUNICIPAL DE LIMA</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div className="container">
                    <img src="../img_tur/MUNICIPAL.JPG" className="w-100" alt="asdf" />
                    <p className="py-4 fs-5">
                      El Palacio Municipal de Lima o Municipalidad Metropolitana de Lima, inicialmente llamado Cabildo de Lima, está ubicado en la cuadra 3 del Jirón de la Unión.  La fachada del Palacio Municipal de Lima es de estilo arquitectónico neocolonial y conserva su estructura.
                    </p>
                    <p className="blockquote-footer fs-6">
                      Margiorit Mirella Ramos Casas
                    </p>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
              </div>
            </div>
          </div>


        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
          <img
            src="../img_tur/GOBIERNO.JPG"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Waves at Sea"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#modalGobierno"
          />



          <div class="modal fade" id="modalGobierno" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5 fw-bold" id="exampleModalLabel">EL PALACIO DE GOBIERNO DE LIMA</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div className="container">
                    <img src="../img_tur/GOBIERNO.JPG" className="w-100" alt="asdf" />
                    <p className="py-4 fs-5">
                      El Palacio de Gobierno de Lima se encuentra ubicado en el Centro Histórico de la ciudad, en la Plaza de Armas. Es el lugar de residencia del Presidente de la República.
                    </p>
                    <p className="blockquote-footer fs-6">
                      Margiorit Mirella Ramos Casas
                    </p>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
              </div>
            </div>
          </div>

          <img
            src="../img_tur/OHGGIGINS.JPG"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Yosemite National Park"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#modalOhgigins"
          />



          <div class="modal fade" id="modalOhgigins" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5 fw-bold" id="exampleModalLabel">LA CASA O'HIGGINS</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div className="container">
                    <img src="../img_tur/OHGGIGINS.JPG" className="w-100" alt="asdf" />
                    <p className="py-4 fs-5">
                      La Casa O’Higgins es uno de los espacios culturales de la Pontificia Universidad Católica del Perú ubicada en pleno corazón del Centro Histórico de Lima. Se han realizado en coordinación con instituciones públicas y privadas diferentes actividades culturales para lograr a través de la promoción cultural el desarrollo sostenible de las regiones del país.
                    </p>
                    <p className="blockquote-footer fs-6">
                      Margiorit Mirella Ramos Casas
                    </p>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 class="py-4 mb-4 border-bottom border-2 border-danger-subtle fw-bold" style={{ color: '#d1510f' }}>
        PODCAST
      </h3>

      <div class="col-sm-4 col-sm-offset-4 embed-responsive embed-responsive-4by3">
        <audio controls class="embed-responsive-item">
          <source src="../podcast.mp3" />
        </audio>
      </div>

    </div>

  )
}