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
          />
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
          <img
            src="../img_tur/LITERATURA.JPG"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Mountains in the Clouds"
          />

          <img
            src="../img_tur/MUNICIPAL.JPG"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
          <img
            src="../img_tur/GOBIERNO.JPG"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Waves at Sea"
          />

          <img
            src="../img_tur/OHGGIGINS.JPG"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Yosemite National Park"
          />
        </div>
      </div>
    </div>

  )
}