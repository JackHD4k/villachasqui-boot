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
        <div className="container d-flex justify-content-center">
        <div class="card w-75">
          <div class="card-body">
            <div class="row">
              <div class="col-5">
                <img src="../podcast.jpg" class="w-100" alt="Responsive image" />
              </div>
              <div class="col-7 text-start align-self-center">
                <h5 class="card-title fs-3">RADIO VILLACHASQUI</h5>
                <p class="card-text fs-5">Top músicas más escuchadas del 2023</p>
                <audio controls>
                  <source src="../podcast.mp3" type="audio/mpeg" />
                </audio>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}