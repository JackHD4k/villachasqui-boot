/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <div class="container my-5">
      <div class="p-5 text-center rounded-3" style={{ backgroundColor: '#722f37' }}>
        <i class="bi bi-broadcast-pin fs-1 text-white"></i>
        <h1 class="text-white">BIENVENIDO A NUESTRO RADIO PODCAST VILLACHASQUI</h1>
        <p class="col-lg-8 mx-auto fs-5 text-white">
          ¡Bienvenido a nuestro podcast musical! Exploraremos juntos éxitos inolvidables, descubriremos historias tras las canciones y nos sumergiremos en la magia de la música.
        </p>

        <div class="container d-flex justify-content-center my-4 mb-5">
          <div id="mobile-box">
            <div class="card">
              <div
                class="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <img
                  class="card-img-top w-100"
                  src="../podcast.jpg"
                  alt="Card image cap"
                />
              </div>
              <div class="card-body text-center" style={{ backgroundColor: '#b14854' }}>
                <h1 class="fs-1 font-weight-bold text-white">
                  VILLACHASQUI
                </h1>
                <p class="mb-0 fs-5 text-white">Las músicas más escuchadas en el 2023 !</p>

                <div class="d-inline-flex gap-2 py-4">
                  <div class="col-sm-4 col-sm-offset-4 embed-responsive embed-responsive-4by3">
                    <audio controls class="embed-responsive-item">
                      <source src="../podcast.mp3" />
                    </audio>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}