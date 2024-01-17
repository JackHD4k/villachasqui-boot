/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
export default function page() {
  return (
    <div className="container">

      {/* FOTOS TURISTICAS */}
      <div>
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
                            <img src="../img_tur/OHGGIGINS.JPG" class="d-block w-100" alt="..." />
                          </div>
                          <div class="carousel-item">
                            <img src="../img_tur/casa_ohiggins/ohi1.jpg" class="d-block w-100" alt="..." />
                          </div>
                          <div class="carousel-item">
                            <img src="../img_tur/casa_ohiggins/ohi2.jpg" class="d-block w-100" alt="..." />
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
          FOTOS DE BAÑISTAS EN PLAYAS DE LIMA
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
      <div class="row">
      <h3 class="py-4 my-4 border-bottom border-2 border-danger-subtle fw-bold" style={{ color: '#d1510f' }}>
          FOTOS DE AMBULANTES DE LIMA
        </h3>
        <div class="col-lg-6 col-md-12 mb-4 mb-lg-0">
          <img
            src="/ambulantes/ambu1.jpg"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Wintry Mountain Landscape"
          />
        </div>

        <div class="col-lg-6 mb-4 mb-lg-0">
          <img
            src="/ambulantes/ambu2.jpg"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Mountains in the Clouds"
          />
        </div>
      </div>


      {/* MEMES */}
      <div>
        <h3 class="py-4 mb-4 border-bottom border-2 border-danger-subtle fw-bold" style={{ color: '#d1510f' }}>
          MEMES DEL DIA
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