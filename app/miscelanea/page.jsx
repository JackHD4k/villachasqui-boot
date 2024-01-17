/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
export default function page() {
  return (
    <div className="container">

      {/* FOTOS TURISTICAS */}
      <div>
        <h3 class="py-4 mb-4 border-bottom border-2 border-danger-subtle fw-bold" style={{ color: '#d1510f' }}>
          FOTOS TURÍSTICOS DE CENTRO DE LIMA
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

                      <div id="carouselBCR" class="carousel slide">
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img src="../img_tur/BCR.JPG" class="d-block w-100" alt="..." />
                          </div>
                          <div class="carousel-item">
                            <img src="../img_tur/museo_bcrp/bcrp1.jpeg" class="d-block w-100" alt="..." />
                          </div>
                          <div class="carousel-item">
                            <img src="../img_tur/museo_bcrp/bcrp2.jpeg" class="d-block w-100" alt="..." />
                          </div>
                          <div class="carousel-item">
                            <img src="../img_tur/museo_bcrp/bcrp3.jpeg" class="d-block w-100" alt="..." />
                          </div>
                          <div class="carousel-item">
                            <img src="../img_tur/museo_bcrp/bcrp4.jpeg" class="d-block w-100" alt="..." />
                          </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselBCR" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselBCR" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>

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
              src="../img_tur/museo_grau/grau5.jpeg"
              class="w-100 h-50 shadow-1-strong rounded pb-4"
              alt="Wintry Mountain Landscape"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#modalCatedral"
            />

            <div class="modal fade" id="modalCatedral" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5 fw-bold" id="exampleModalLabel">MUSEO NAVAL MIGUEL GRAU</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div className="container">
                      <div id="carouselCatedral" class="carousel slide">
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img src="../img_tur/museo_grau/grau5.jpeg" class="d-block w-100" alt="..." />
                          </div>
                          <div class="carousel-item ">
                            <img src="../img_tur/museo_grau/grau4.jpeg" class="d-block w-100" alt="..." />
                          </div>
                          <div class="carousel-item ">
                            <img src="../img_tur/museo_grau/grau3.jpeg" class="d-block w-100" alt="..." />
                          </div>
                          <div class="carousel-item ">
                            <img src="../img_tur/museo_grau/grau2.jpeg" class="d-block w-100" alt="..." />
                          </div>
                          <div class="carousel-item ">
                            <img src="../img_tur/museo_grau/grau1.jpeg" class="d-block w-100" alt="..." />
                          </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselCatedral" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselCatedral" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>
                      <p className="py-4 fs-5">
                        El museo se ubica en una casa de dos plantas del siglo xviii de estilo colonial con un gran
                        balcón de madera. En el interior se exhiben objetos personales de Grau, el museo posee piezas
                        que narran algunas de las batallas navales que mantuvieron las armadas de Chile y Perú
                        durante la Guerra del Pacífico.
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

                      <div id="carouselLiteratura" class="carousel slide">
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img src="../img_tur/LITERATURA.JPG" class="d-block w-100" alt="..." />
                          </div>
                          <div class="carousel-item">
                            <img src="../img_tur/casa_literatura/literatura1.jpeg" class="d-block w-100" alt="..." />
                          </div>
                          <div class="carousel-item">
                            <img src="../img_tur/casa_literatura/literatura2.jpeg" class="d-block w-100" alt="..." />
                          </div>
                          <div class="carousel-item">
                            <img src="../img_tur/casa_literatura/literatura3.jpeg" class="d-block w-100" alt="..." />
                          </div>
                          <div class="carousel-item">
                            <img src="../img_tur/casa_literatura/literatura4.jpeg" class="d-block w-100" alt="..." />
                          </div>
                          <div class="carousel-item">
                            <img src="../img_tur/casa_literatura/literatura5.jpeg" class="d-block w-100" alt="..." />
                          </div>

                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselLiteratura" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselLiteratura" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>
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
              src="../img_tur/galeria_panchi/panchi1.jpeg"
              class="w-100 h-50 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#modalMunicipal"
            />

            <div class="modal fade" id="modalMunicipal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5 fw-bold" id="exampleModalLabel">GALERÍA MUNICIPAL PANCHO FIERRO</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div className="container">
                      <div id="carouselMunicipal" class="carousel slide">
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img src="../img_tur/galeria_panchi/panchi1.jpeg" class="d-block w-100" alt="..." />
                          </div>
                          <div class="carousel-item">
                            <img src="../img_tur/galeria_panchi/panchi2.jpeg" class="d-block w-100" alt="..." />
                          </div>
                          <div class="carousel-item">
                            <img src="../img_tur/galeria_panchi/panchi3.jpeg" class="d-block w-100" alt="..." />
                          </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselMunicipal" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselMunicipal" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>
                      <p className="py-4 fs-5">
                        La Galería Pancho Fierro es una sala de exposiciones que impulsa el movimiento cultural.
                        Destaca la innovación y tendencias del arte peruano, la galería presenta referentes
                        extranjeros, que ofrece un espacio dinámico. Incluye conversatorios y talleres para enriquecer
                        y fomentar la participación activa y artística.
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
                      <div id="carouselGoblierno" class="carousel slide">
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img src="../img_tur/GOBIERNO.JPG" class="d-block w-100" alt="..." />
                          </div>
                          <div class="carousel-item">
                            <img src="../img_tur/palacio_gobierno/gobierno1.png" class="d-block w-100" alt="..." />
                          </div>
                          <div class="carousel-item">
                            <img src="../img_tur/palacio_gobierno/gobierno2.png" class="d-block w-100" alt="..." />
                          </div>
                          <div class="carousel-item">
                            <img src="../img_tur/palacio_gobierno/gobierno3.png" class="d-block w-100" alt="..." />
                          </div>
                          <div class="carousel-item">
                            <img src="../img_tur/palacio_gobierno/gobierno4.png" class="d-block w-100" alt="..." />
                          </div>
                          <div class="carousel-item">
                            <img src="../img_tur/palacio_gobierno/gobierno5.png" class="d-block w-100" alt="..." />
                          </div>

                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselGoblierno" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselGoblierno" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>
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
              class="w-100 h-50 shadow-1-strong rounded mb-4"
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
                      <div id="carouselOhgigins" class="carousel slide">
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img src="/img_tur/OHGGIGINS.JPG" class="d-block w-100" alt="..." />
                          </div>
                          <div class="carousel-item">
                            <img src="/img_tur/casa_ohiggins/ohii1.jpg" class="d-block w-100" alt="..." />
                          </div>
                          <div class="carousel-item">
                            <img src="/img_tur/casa_ohiggins/ohii2.jpg" class="d-block w-100" alt="..." />
                          </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselOhgigins" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselOhgigins" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>
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
      </div>

      {/* FOTOS PLAYAS */}
      <div>
        <h3 class="py-4 mb-4 border-bottom border-2 border-danger-subtle fw-bold" style={{ color: '#d1510f' }}>
          FOTOS EN PLAYAS DE LIMA
        </h3>
        <div class="row">
          <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img
              src="../img_pla/Imagen1.png"
              class="w-100 h-100 shadow-1-strong rounded mb-4"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#modalP1"
              alt="Boat on Calm Water"
            />
            <div class="modal fade" id="modalP1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div className="container">

                      <img
                        src="../img_pla/Imagen1.png"
                        class="w-100 h-100 shadow-1-strong rounded mb-4"
                        data-bs-toggle="modal"
                        data-bs-target="#modalP1"
                        alt="Boat on Calm Water"
                      />

                      <p className="py-4 fs-5">
                        Atardecer en la playa. El sol poco a poco se intenta esconder entre las nubes, pero su brillo se escapa entre ellas.
                      </p>
                      <p className="blockquote-footer fs-6">
                        Ana Paula Huanca Quispe
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
              src="../img_pla/Imagen2.png"
              class="w-100 h-50 shadow-1-strong rounded mb-4"
              alt="Mountains in the Clouds"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#modalP2"
            />


            <div class="modal fade" id="modalP2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div className="container">
                      <img
                        src="../img_pla/Imagen2.png"
                        class="w-100 h-50 shadow-1-strong rounded mb-4"
                        alt="Mountains in the Clouds"
                      />
                      <p className="py-4 fs-5">
                        Un atardecer bonito. Mientras el sol está a punto de desaparecer, vemos como ilumina el área verde haciendo de este un paisaje maravilloso.
                      </p>
                      <p className="blockquote-footer fs-6">
                        Ana Paula Huanca Quispe
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
              src="../img_pla/Imagen3.png"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#modalP3"
            />
            <div class="modal fade" id="modalP3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div className="container">
                      <img
                        src="../img_pla/Imagen3.png"
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Boat on Calm Water"
                      />
                      <p className="py-4 fs-5">
                        Los alrededores de la playa Punta Roquitas tiene una vista maravillosa, pero al lado de ella vemos una congestión vehicular debido a que es hora punta.
                      </p>
                      <p className="blockquote-footer fs-6">
                        Ana Paula Huanca Quispe
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
              src="../img_pla/Imagen4.png"
              class="w-100 h-50 shadow-1-strong rounded mb-4"
              alt="Waves at Sea"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#modalP4"
            />
            <div class="modal fade" id="modalP4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div className="container">
                      <img
                        src="../img_pla/Imagen4.png"
                        class="w-100 h-50 shadow-1-strong rounded mb-4"
                        alt="Waves at Sea"
                      />
                      <p className="py-4 fs-5">
                        Diversas personas se sientan a conversar frente a esta playa. La playa denota tranquilidad.
                      </p>
                      <p className="blockquote-footer fs-6">
                        Ana Paula Huanca Quispe
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
              src="../img_pla/Imagen5.png"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Yosemite National Park"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#modalP5"
            />

            <div class="modal fade" id="modalP5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div className="container">
                      <img
                        src="../img_pla/Imagen5.png"
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Yosemite National Park"
                      />
                      <p className="py-4 fs-5">
                        Vemos que todo ya se oscurece y muchas de estas personas se despiden del fascinante escenario que se dibujo con el atardecer y la playa.
                      </p>
                      <p className="blockquote-footer fs-6">
                        Ana Paula Huanca Quispe
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
      </div>

      {/* FOTOS AMBULANTES */}
      <div className="row">
        <h3 class="py-4 my-4 border-bottom border-2 border-danger-subtle fw-bold" style={{ color: '#d1510f' }}>
          FOTOS DE AMBULANTES DE LIMA
        </h3>
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <img
            src="/ambulantes/ambu1.jpg"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Wintry Mountain Landscape"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#modala1"
          />

          <div class="modal fade" id="modala1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div className="container">
                    <img
                      src="/ambulantes/ambu1.jpg"
                      class="w-100 shadow-1-strong rounded mb-4"
                      alt="Yosemite National Park"
                    />
                    <p className="py-4 fs-5">
                      La señora está vendiendo sus famosas brochetas de pollo en el Parque Neptuno. Con una simple parrilla y su sazón secreta, atrae a los transeúntes con el delicioso aroma. Ya es parte del paisaje del parque, donde comparte sonrisas y brochetas con la gente todos los días. Su puesto pequeño pero acogedor es punto de encuentro para los amantes de la buena comida.
                    </p>
                    <p className="blockquote-footer fs-6">
                      Maldonado Curi Preciosa Andrea
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

        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <img
            src="/ambulantes/ambu6.jpg"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Wintry Mountain Landscape"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#modala2"
          />

          <div class="modal fade" id="modala2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div className="container">
                    <img
                      src="/ambulantes/ambu6.jpg"
                      class="w-100 shadow-1-strong rounded mb-4"
                      alt="Yosemite National Park"
                    />
                    <p className="py-4 fs-5">
                      El joven prepara waffles recién hechos todas las mañanas en su puestecillo en el mercado del barrio chino. El delicioso aroma atrae a los transeúntes curiosos que prueban este crujiente desayuno.
                    </p>
                    <p className="blockquote-footer fs-6">
                      Maldonado Curi Preciosa Andrea
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
            src="/ambulantes/ambu2.jpg"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Mountains in the Clouds"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#modala3"
          />

          <div class="modal fade" id="modala3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div className="container">
                    <img
                      src="/ambulantes/ambu2.jpg"
                      class="w-100 shadow-1-strong rounded mb-4"
                      alt="Yosemite National Park"
                    />
                    <p className="py-4 fs-5">
                      El joven ambulantes prepara sus exquisitos corn dog en su pequeño puesto en el Parque del Centro Cívico. Los transeúntes se detienen atraídos por el apetitoso aroma del bocadillo coreano.elicioso aroma atrae a los transeúntes curiosos que prueban este crujiente desayuno.
                    </p>
                    <p className="blockquote-footer fs-6">
                      Maldonado Curi Preciosa Andrea
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
        <div className="row">
          <div class="col-lg-8 mb-4 mb-lg-0">
            <img
              src="/ambulantes/ambu3.jpg"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Mountains in the Clouds"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#modala4"
            />

            <div class="modal fade" id="modala4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div className="container">
                      <img
                        src="/ambulantes/ambu3.jpg"
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Yosemite National Park"
                      />
                      <p className="py-4 fs-5">
                        Un ambulante de la tercera edad pide monedas en la transitada avenida Jirón de la Unión. Pese a sus achaques, acude diario con su gorra gris. La solidaridad de algunos transeúntes le ayuda a sobrevivir.
                      </p>
                      <p className="blockquote-footer fs-6">
                        Maldonado Curi Preciosa Andrea
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
              src="/ambulantes/ambu5.jpg"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Mountains in the Clouds"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#modala5"
            />

            <div class="modal fade" id="modala5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div className="container">
                      <img
                        src="/ambulantes/ambu5.jpg"
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Yosemite National Park"
                      />
                      <p className="py-4 fs-5">
                        Joven ambulante lleva sus juguetes antiestrés a los transeúntes estresados. Ofrece masa antiestrés y pelotas pequeñas. Con cada venta busca sacar una sonrisa a los limeños abrumados.
                      </p>
                      <p className="blockquote-footer fs-6">
                        Maldonado Curi Preciosa Andrea
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
      </div>


      {/* MEMES */}
      <div>
        <h3 class="py-4 mb-4 border-bottom border-2 border-danger-subtle fw-bold" style={{ color: '#d1510f' }}>
          MEMES DEL DÍA
        </h3>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 align-items-md-center">
            <div className="">
              <img src="../memes/meme1.jpg" className="w-100" alt="a" />
            </div>
            <div className="">
              <img src="../memes/meme2.jpg" className="w-100" alt="a" />
            </div>
            <div>
              <img src="../memes/meme5.jpg" className="w-100" alt="a" />
            </div>
            <div>
              <img src="../memes/meme3.jpg" className="w-100" alt="a" />
            </div>
            <div></div>
            <div>
              <img src="../memes/meme4.jpg" className="w-100" alt="a" />
            </div>
          </div>
        </div>
      </div>

      {/* CONTENIDO MULTIMEDIA */}
      <h3 class="py-4 mb-4 mt-4 border-bottom border-2 border-danger-subtle fw-bold" style={{ color: '#d1510f' }}>
        CONTENIDO MULTIMEDIA
      </h3>
      <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <div class="col">
          <a style={{ textDecoration: 'none' }} href="https://vm.tiktok.com/ZM6CkYpav/">
            <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{ backgroundImage: "url(https://i.pinimg.com/736x/d9/8c/62/d98c62203d1c0eb202a8300683576336.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
            >
              <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Un día de playa del 2024</h3>
                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <i class="bi bi-tiktok"></i>
                  </li>
                  <li class="d-flex align-items-center me-3">
                    <svg class="bi me-2" width="1em" height="1em"></svg>
                    <small>Lima</small>
                  </li>
                </ul>
              </div>
            </div>
          </a>

        </div>

        <div class="col">
          <a style={{ textDecoration: 'none' }} href="https://vm.tiktok.com/ZM6CkkXfa/">
            <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{ backgroundImage: "url(https://e.rpp-noticias.io/xlarge/2018/12/21/184718_729880.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
              <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Último día del 2023</h3>
                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <i class="bi bi-tiktok"></i>
                  </li>
                  <li class="d-flex align-items-center me-3">
                    <svg class="bi me-2" width="1em" height="1em"></svg>
                    <small>Lima</small>
                  </li>
                </ul>
              </div>
            </div>
          </a>

        </div>

        <div class="col">
          <a style={{ textDecoration: 'none' }} href="https://vm.tiktok.com/ZM6CUcStn/">
            <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{ backgroundImage: "url(https://www.peru.travel/Contenido/General/Imagen/es/630/1.1/catedral-de-lima.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
              <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Recorrido por la Catedral de Lima</h3>
                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <i class="bi bi-tiktok"></i>
                  </li>
                  <li class="d-flex align-items-center me-3">
                    <svg class="bi me-2" width="1em" height="1em"></svg>
                    <small>Lima</small>
                  </li>
                </ul>
              </div>
            </div>
          </a>

        </div>
        <div class="col">
          <a style={{ textDecoration: 'none' }} href="https://www.youtube.com/watch?v=hoUE4v9rXeM">
            <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{ backgroundImage: "url(https://larepublica.cronosmedia.glr.pe/original/2022/09/11/631d51a3dd4ed9264b10e0d2.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
              <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h3 class="pt-2 mt-5 mb-4 display-6 lh-1 fw-bold">Un día en Villareal</h3>
                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <i class="bi bi-youtube"></i>
                  </li>
                  <li class="d-flex align-items-center me-3">
                    <svg class="bi me-2" width="1em" height="1em"></svg>
                    <small>Lima</small>
                  </li>
                </ul>
              </div>
            </div>
          </a>

        </div>
        <div class="col">
          <a style={{ textDecoration: 'none' }} href="https://www.youtube.com/watch?v=pJYvRZEZ5U0">
            <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{ backgroundImage: "url(https://emprender.pe/wp-content/uploads/2022/09/185018_1242966.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
              <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h3 class="pt-2 mt-5 mb-4 display-6 lh-1 fw-bold">Negocio <br /> familiar</h3>
                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <i class="bi bi-youtube"></i>
                  </li>
                  <li class="d-flex align-items-center me-3">
                    <svg class="bi me-2" width="1em" height="1em"></svg>
                    <small>Lima</small>
                  </li>
                </ul>
              </div>
            </div>
          </a>

        </div>

      </div>


      {/* PODCAST */}
      <div class="container my-5">
        <div class="p-5 text-center rounded-3" style={{ backgroundColor: '#722f37' }}>
          <i class="bi bi-broadcast-pin fs-1" style={{ color: '#d1510f' }}></i>
          <h1 class="text-white">RADIO PODCAST VILLACHASQUI</h1>
          <p class="col-lg-8 mx-auto fs-5 text-white">
            ¡Bienvenido a nuestro podcast musical! Exploraremos juntos éxitos inolvidables, descubriremos historias tras las canciones y nos sumergiremos en la magia de la música.
          </p>
          <div class="d-inline-flex gap-2 py-4">
            <a className="btn btn-outline-light" href={'/podcast'}>PARA ESCUCHAR NUESTRO PODCAST HAZ CLICK AQUÍ </a>
          </div>
        </div>
      </div>
    </div>

  )
}