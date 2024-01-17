/* eslint-disable @next/next/no-img-element */
import './page.css'

export default function Home() {
  return (
    <main>
      {/* CENTRO */}

      <div className="container">
        <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis" style={{ backgroundColor: '#722f37' }}>
          <div className="col-lg-6 px-0">
            <h1 className="display-4 fst-italic text-white">Historias que importan, noticias que transforman</h1>
            <p className="lead my-3 text-white">Desde eventos globales hasta historias locales, te presentamos noticias con un toque apasionado y humano.</p>
          </div>
        </div>


        {/* NOTICIAS */}

        <div className="row g-5">
          <div className="col-md-8" data-bs-spy="scroll" data-bs-target="#nav-scroll" data-bs-smooth-scroll="true" tabIndex="0">
            <h3 className="py-4 mb-4 border-bottom border-2 border-danger-subtle fw-bold" id='scroll-politica' style={{ color: '#d1510f' }}>
              POLÍTICA
            </h3>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <a className='nav-link' href="/politica/1">
                  <div className="card" style={{ border: 'none' }}>
                    <img src="/politica/Imagen8.png" alt="df" />
                    <div className="card-body">
                      <h5 className="card-title fw-bold">Poder Judicial absolvió a Vladimiro Montesinos por lesiones graves contra exagente Leonor La Rosa</h5>
                      <p className="card-text">También fueron absueltos el exjefe del Comando Conjunto de las Fuerzas Armadas Nicolás de Bari Hermoza Ríos y Julio Salazar Monroe...</p>
                    </div>
                  </div>
                </a>

              </div>
              <div className="col">
                <a className='nav-link' href="/politica/2">
                  <div className="card" style={{ border: 'none' }}>
                    <img src="/politica/Imagen9.png" alt="df" />
                    <div className="card-body">
                      <h5 className="card-title fw-bold">Caso “Mochasueldos”</h5>
                      <p className="card-text">En dos oportunidades, la Comisión de Ética protegió a legisladores. Se trata de Heidy Juárez (Podemos) y Magaly Ruiz (Alianza para el Progreso), quienes estuvieron envueltas en el caso de recorte de sueldo.</p>
                    </div>
                  </div>
                </a>

              </div>
              <div className="col">
                <a className='nav-link' href="/politica/3">
                  <div className="card" style={{ border: 'none' }}>
                    <img src="/politica/Imagen11.png" alt="df" />
                    <div className="card-body">
                      <h5 className="card-title fw-bold">El expresidente Alberto Fujimori es puesto en libertad</h5>
                      <p className="card-text">El expresidente Alberto Fujimori —a los 85 años de edad—abandonó el penal de Barbadillo, luego de que el ...</p>
                    </div>
                  </div>
                </a>

              </div>
              <div className="col">
                <a className='nav-link' href="/politica/4">
                  <div className="card" style={{ border: 'none' }}>
                    <img src="/politica/Imagen12.png" alt="df" />
                    <div className="card-body">
                      <h5 className="card-title fw-bold">Dina Boluarte envía mensaje por año nuevo</h5>
                      <p className="card-text">La presidenta Dina Boluarte aseguró este domingo 31 de diciembre que su gobierno se enfocará en impulsar la economía y luchar contra la criminalidad y la delincuencia en el 2024.</p>
                    </div>
                  </div>
                </a>

              </div>
              <div className="col">
                <a className='nav-link' href="/politica/5">
                  <div className="card" style={{ border: 'none' }}>
                    <img src="/politica/Imagen13.png" alt="df" />
                    <div className="card-body">
                      <h5 className="card-title fw-bold">PJ dicta 35 meses de prisión preventiva para Vladimir Cerrón </h5>
                      <p className="card-text">El fiscal Richard Rojas Gómez advirtió que no cumplió reglas de conducta, tras ser sentenciado en otro caso y encontrarse prófugo. Sobre el líder de Perú Libre pesa ya una condena a 3 años y 6 meses de prisión por corrupción.</p>
                    </div>
                  </div>
                </a>

              </div>
              <div className="col">
                <a className='nav-link' href="/politica/6">
                  <div className="card" style={{ border: 'none' }}>
                    <img src="/politica/Imagen15.png" alt="dfs" />
                    <div className="card-body">
                      <h5 className="card-title fw-bold">El expresidente Alejandro Toledo llega al Perú tras ser entregado a la justicia</h5>
                      <p className="card-text">Según información de las autoridades competentes a velar por el resguardo del ex jefe de Estado, Toledo Manrique deberá ser sometido al rutinario ...</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <h3 className="py-4 mb-4 border-bottom border-2 border-danger-subtle fw-bold" id='scroll-internacionales' style={{ color: '#d1510f' }}>
              INTERNACIONALES
            </h3>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <a className='nav-link' href="/internacionales/1">
                  <div className="card" style={{ border: 'none' }}>
                    <img src="/internacionales/Imagen27.png" alt="df" />
                    <div className="card-body">
                      <h5 className="card-title fw-bold">Más de 11,000 muertos a un mes de guerra entre Israel y Hamás </h5>
                      <p className="card-text">Al menos 4.000 niños han muerto en la franja de Gaza por bombardeos israelíes en una catástrofe humanitaria que no parece estar cerca de terminar.</p>
                    </div>
                  </div>
                </a>

              </div>
              <div className="col">
                <a className='nav-link' href="/internacionales/2">
                  <div className="card" style={{ border: 'none' }}>
                    <img src="/internacionales/Imagen281.jpg" alt="df" />
                    <div className="card-body">
                      <h5 className="card-title fw-bold">Incendio en Chile deja 14 muertos de nacionalidad venezolana </h5>
                      <p className="card-text">El presidente chileno se pronunció sobre la tragedia registrada en la comuna de Coronel, donde 3 familias, entre los que se hallaban 8 menores, perdieron la vida al quemarse sus viviendas.</p>
                    </div>
                  </div>
                </a>

              </div>
              <div className="col">
                <a className='nav-link' href="/internacionales/3">
                  <div className="card" style={{ border: 'none' }}>
                    <img src="/internacionales/Imagen32.png" alt="df" />
                    <div className="card-body">
                      <h5 className="card-title fw-bold">Rusia realiza un nuevo ataque a Ucrania</h5>
                      <p className="card-text">El presidente Volodímir Zelenski afirmó hoy, viernes 29 de diciembre de 2023, que, como parte de los masivos ataques rusos, las fuerzas de Moscú lanzaron unos 110 misiles contra territorio de Ucrania.</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col">
                <a className='nav-link' href="/internacionales/4">
                  <div className="card" style={{ border: 'none' }}>
                    <img src="/internacionales/Imagen29.png" alt="df" />
                    <div className="card-body">
                      <h5 className="card-title fw-bold">Javier Milei asumió como presidente de Argentina</h5>
                      <p className="card-text">Asunción de Javier Milei. El libertario asumió como presidente de Argentina, dando inicio a un periodo de cuatro años en el que el economista deberá gobernar un país de más de 35 millones de personas en crisis social y económica.</p>
                    </div>
                  </div>
                </a>

              </div>
              <div className="col">
                <a className='nav-link' href="/internacionales/5">
                  <div className="card" style={{ border: 'none' }}>
                    <img src="/internacionales/Imagen30.png" alt="df" />
                    <div className="card-body">
                      <h5 className="card-title fw-bold">Perú expresa sus buenos deseos tras la coronación del rey Carlos III</h5>
                      <p className="card-text">
                        Perú saludó este sábado a Carlos III tras su coronación como nuevo monarca de Reino Unido y le deseó sus mejores deseos en beneficio a la población de su país, a través de una publicación compartida en redes sociales.</p>
                    </div>
                  </div>
                </a>

              </div>
              <div className="col">
                <a className='nav-link' href="/internacionales/6">
                  <div className="card" style={{ border: 'none' }}>
                    <img src="/internacionales/Imagen31.png" alt="dfs" />
                    <div className="card-body">
                      <h5 className="card-title fw-bold">México y EE. UU. acuerdan mantener pasos fronterizos abiertos</h5>
                      <p className="card-text">Andrés Manuel López Obrador también subrayó la necesidad de continuar con el compromiso diplomático y político con todos los países de la región e invertir en programas de desarrollo para toda América..</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <h3 className="py-4 mb-4 border-bottom border-2 border-danger-subtle fw-bold" id='scroll-espectaculos' style={{ color: '#d1510f' }}>
              ESPECTÁCULOS
            </h3>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <a className='nav-link' href="/espectaculos/1">
                  <div className="card" style={{ border: 'none' }}>
                    <img src="/espectaculos/Imagen1.png" alt="df" />
                    <div className="card-body">
                      <h5 className="card-title fw-bold">Las cámaras de Magaly TV captan infidelidad de Paolo Hurtado y Jossmery Toledo</h5>
                      <p className="card-text">Paolo Hurtado y Jossmery Toledo protagonizan un ampay tras mantener un oculto romance y tener encuentros fortuitos en el Cusco..</p>
                    </div>
                  </div>
                </a>

              </div>
              <div className="col">
                <a className='nav-link' href="/espectaculos/2">
                  <div className="card" style={{ border: 'none' }}>
                    <img src="/espectaculos/Imagen3.png" alt="df" />
                    <div className="card-body">
                      <h5 className="card-title fw-bold">Yiddá Eslava y Julián Zucchi terminan su relación tras 11 años</h5>
                      <p className="card-text">En una inesperada noticia compartida en sus redes sociales, el actor Julián Zucchi y la actriz Yiddá Eslava confirmaron el fin a su relación de más de 11 años, la cual comenzó durante su participación en el desaparecido reality ‘Combate’.</p>
                    </div>
                  </div>
                </a>

              </div>
              <div className="col">
                <a className='nav-link' href="/espectaculos/3">
                  <div className="card" style={{ border: 'none' }}>
                    <img src="/espectaculos/Imagen4.png" alt="df" />
                    <div className="card-body">
                      <h5 className="card-title fw-bold">Falleció a los 54 años el icono del Rock peruano, Pedro Suárez-Vértiz</h5>
                      <p className="card-text">La Policía Nacional del Perú informó que agentes acudieron a la casa del músico Pedro Suárez-Vértiz en Miraflores la mañana de hoy 28 de diciembre.</p>
                    </div>
                  </div>
                </a>

              </div>
              <div className="col">
                <a className='nav-link' href="/espectaculos/4">
                  <div className="card" style={{ border: 'none' }}>
                    <img src="/espectaculos/Imagen5.png" alt="df" />
                    <div className="card-body">
                      <h5 className="card-title fw-bold">Luciana Fuster ganó el Miss Grand International 2023</h5>
                      <p className="card-text">La modelo peruana Luciana Fuster obtuvo una brillante coronación en el concurso de belleza Miss Grand International 2023.</p>
                    </div>
                  </div>
                </a>

              </div>
              <div className="col">
                <a className='nav-link' href="/espectaculos/5">
                  <div className="card" style={{ border: 'none' }}>
                    <img src="/espectaculos/rbd.png" alt="df" />
                    <div className="card-body">
                      <h5 className="card-title fw-bold">RBD de vuelta a los escenarios después de 15 años</h5>
                      <p className="card-text">Los mexicanos Maite Perroni, Christian Chávez y Christopher von Uckermann, integrantes del grupo de pop RBD, señalaron que su vuelta a los escenarios con su “Soy rebelde tour”.</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col">
                <a className='nav-link' href="/espectaculos/6">
                  <div className="card" style={{ border: 'none' }}>
                    <img src="/espectaculos/Imagen7.png" className='w-50 align-self-center' alt="dfs" />
                    <div className="card-body">
                      <h5 className="card-title fw-bold">Brunella Horna y el empresario Richard Acuña se convierten en padres</h5>
                      <p className="card-text">La espera terminó para Brunella Horna, quien tras nueve meses de gestación pudo conocer a su hijo Alessio el pasado 24 de noviembre en una clínica de Lima, donde dio a luz..</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <h3 className="py-4 mb-4 border-bottom border-2 border-danger-subtle fw-bold" id='scroll-deportes' style={{ color: '#d1510f' }}>
              DEPORTES
            </h3>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <a className='nav-link' href="/deporte/1">
                  <div className="card" style={{ border: 'none' }}>
                    <img src="/deportes/Imagen17.png" alt="df" />
                    <div className="card-body">
                      <h5 className="card-title fw-bold">El deportista Cristian Pacheco revela que nadie lo recibió en su llegada a Lima</h5>
                      <p className="card-text">Cristhian Pacheco, flamante ganador de la medalla de oro en maratón masculina en los Juegos Panamericanos, manifestó que ninguna autoridad lo recibió tras llegar a Lima esta .</p>
                    </div>
                  </div>
                </a>

              </div>
              <div className="col">
                <a className='nav-link' href="/deporte/2">
                  <div className="card" style={{ border: 'none' }}>
                    <img src="/deportes/Imagen18.png" alt="df" />
                    <div className="card-body">
                      <h5 className="card-title fw-bold">Jose Sabogal dio la orden de apagar las luces de Matute</h5>
                      <p className="card-text">El administrador de Alianza Lima reveló que la decisión del apagón en la final de Liga 1 pasó por él, pero que no hubo intención de ir contra el juego limpio.</p>
                    </div>
                  </div>
                </a>

              </div>
              <div className="col">
                <a className='nav-link' href="/deporte/3">
                  <div className="card" style={{ border: 'none' }}>
                    <img src="/deportes/Imagen20.png" alt="df" />
                    <div className="card-body">
                      <h5 className="card-title fw-bold">Perú pierde ante Bolivia en la fecha 5 de las Eliminatorias 2026</h5>
                      <p className="card-text">Perú no le gana a nadie. La Bicolor de Juan Reynoso sumó su cuarta derrota en cinco fechas al caer por 2-0 a manos de Bolivia en el Estadio Hernando Siles de La Paz.</p>
                    </div>
                  </div>
                </a>

              </div>
              <div className="col">
                <a className='nav-link' href="/deporte/4">
                  <div className="card" style={{ border: 'none' }}>
                    <img src="/deportes/Imagen24.png" alt="df" />
                    <div className="card-body">
                      <h5 className="card-title fw-bold">Lionel Messi ganó su octavo Balón de Oro</h5>
                      <p className="card-text">Las previsiones se cumplieron y Leo Messi ha ganado su octavo Balón de Oro en la gala celebrada en París. El crack ha dejado ya muy atrás a su gran competidor en los últimos años, Cristiano Ronaldo, quien se queda con los cinco trofeos.</p>
                    </div>
                  </div>
                </a>

              </div>
              <div className="col">
                <a className='nav-link' href="/deporte/5">
                  <div className="card" style={{ border: 'none' }}>
                    <img src="/deportes/Imagen25.png" alt="df" />
                    <div className="card-body">
                      <h5 className="card-title fw-bold">España se corona campeona del mundo</h5>
                      <p className="card-text">A la tercera fue la vencida para España en un Mundial femenino. Después de caer en sus dos anteriores participaciones mundialistas en fase de grupos y octavos de final, el combinado nacional tocó el cielo en Australia tras superar a Inglaterra por la mínima.</p>
                    </div>
                  </div>
                </a>

              </div>
              <div className="col">
                <a className='nav-link' href="/deporte/6">
                  <div className="card" style={{ border: 'none' }}>
                    <img src="/deportes/Imagen26.png" alt="dfs" />
                    <div className="card-body">
                      <h5 className="card-title fw-bold">Universitario de Deportes ganó la Liga 1 después de 10 años</h5>
                      <p className="card-text">Universitario de Deportes es campeón de la Liga 1 Betsson 2023. Los ‘cremas’ empataron 1-1 en la final de ida, en el Monumental, y ganaron 2-0 en condición de visitante; por lo que se quedaron con el título de la actual temporada.</p>
                    </div>
                  </div>
                </a>

              </div>
            </div>
          </div>

          {/* SIDE BAR */}

          <div className="col-md-4">
            <div className="position-sticky" style={{ top: '1rem' }}>
              <div className="p-4 mb-3 bg-body-tertiary rounded">
                <h4 className="fst-italic fw-bold">Sobre nosotros</h4>
                <p className="mb-0">En nuestra plataforma de noticias, VILLACHASQUI te ofrece una experiencia informativa apasionante y actualizada. Nos comprometemos a brindarte noticias objetivas y relevantes, explorando también los aspectos humanos detrás de cada historia.</p>
              </div>

              <div>
                <h4 className="fst-italic">Publicaciones recientes</h4>
                <ul className="list-unstyled">
                  <li>
                    <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="/espectaculos/3">
                      <img src="/recientes/side1.png" alt="ad" />
                      <div className="col-lg-8">
                        <h6 className="mb-0">Falleció a los 54 años el icono del Rock peruano, Pedro Suárez-Vértiz</h6>
                        <small className="text-body-secondary">Enero 15, 2024</small>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="/deporte/4">
                      <img src="/recientes/side2.png" alt="ad" />
                      <div className="col-lg-8">
                        <h6 className="mb-0">Lionel Messi ganó su octavo Balón de Oro</h6>
                        <small className="text-body-secondary">Enero 15, 2024</small>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="/internacionales/4">
                      <img src="/recientes/side3.png" alt="ad" />
                      <div className="col-lg-8">
                        <h6 className="mb-0">Javier Milei asumió como presidente de Argentina</h6>
                        <small className="text-body-secondary">Enero 15, 2024</small>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="fst-italic">Integrantes</h4>
                <ul className="list-unstyled">
                  <li>
                    <div className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top">
                      <img src="/integrantes/1.jpg" alt="ad" />
                      <div className="col-lg-8">
                        <h6 className="mb-0">Toledo Cisceros Almendra</h6>
                        <small className="text-body-secondary">Toledo_C@villachasqui.pe</small>
                        <br />
                        <small className="text-body-secondary">Editor</small>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top">
                      <img src="/integrantes/2.jpg" alt="ad" />
                      <div className="col-lg-8">
                        <h6 className="mb-0">Jiménez Zena Fernando</h6>
                        <small className="text-body-secondary">Jimenez_Z@villachasqui.pe</small>
                        <br />
                        <small className="text-body-secondary">Editor</small>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top">
                      <img src="/integrantes/3.jpg" alt="ad" />
                      <div className="col-lg-8">
                        <h6 className="mb-0">Chempen Panta Angel</h6>
                        <small className="text-body-secondary">Chempen_P@villachasqui.pe</small>
                        <br />
                        <small className="text-body-secondary">Editor</small>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top">
                      <img src="/integrantes/4.jpg" alt="ad" />
                      <div className="col-lg-8">
                        <h6 className="mb-0">Ramos Casas Margiori</h6>
                        <small className="text-body-secondary">Ramos_C@villachasqui.pe</small>
                        <br />
                        <small className="text-body-secondary">Editor</small>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top">
                      <img src="/integrantes/5.jpg" alt="ad" />
                      <div className="col-lg-8">
                        <h6 className="mb-0">Huanca Quispe Ana paula</h6>
                        <small className="text-body-secondary">Huamca_Q@villachasqui.pe</small>
                        <br />
                        <small className="text-body-secondary">Editor</small>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top">
                      <img src="/integrantes/6.jpg" alt="ad" />
                      <div className="col-lg-8">
                        <h6 className="mb-0">Rodríguez Eyzaguirre Xiomara</h6>
                        <small className="text-body-secondary">Eyzaguirre_R@villachasqui.pe</small>
                        <br />
                        <small className="text-body-secondary">Editor</small>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top">
                      <img src="/integrantes/8.jpg" alt="ad" />
                      <div className="col-lg-8">
                        <h6 className="mb-0">Flores Chalco Sonaly</h6>
                        <small className="text-body-secondary">Flores_C@villachasqui.pe</small>
                        <br />
                        <small className="text-body-secondary">Editor</small>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top">
                      <img src="/integrantes/9.jpg" alt="ad" />
                      <div className="col-lg-8">
                        <h6 className="mb-0">Maldonado Curi Preciosa</h6>
                        <small className="text-body-secondary">Maldonado_C@villachasqui.pe</small>
                        <br />
                        <small className="text-body-secondary">Editor</small>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>


            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
