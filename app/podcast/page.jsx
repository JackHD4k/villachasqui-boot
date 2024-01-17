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


        {/* PODCAST */}
        <div className="mt-5 container d-flex justify-content-center">
          <div class="card w-75 rounded-5" style={{ backgroundColor: '#cf4a3c' }}>
            <div class="card-body">
              <div class="row">
                <div class="col-5">
                  <img src="../podcast.jpg" class="w-100 rounded-5" alt="Responsive image" />
                </div>
                <div class="col-7 text-start align-self-center">
                  <h5 class="card-title fs-3 fw-bold text-white" style={{ fontFamily: 'Sans-Serif'}}>RADIO VILLACHASQUI</h5>
                  <p class="card-text fs-5 text-secondary-emphasis" style={{ fontFamily: 'Sans-Serif' }}>Top músicas más escuchadas del 2023</p>
                  <audio controls className="rounded-5">
                    <source src="../podcast.mp3" type="audio/mpeg" />
                    d1520f
                  </audio>
                </div>
                <iframe className="my-5" style={{ borderRadius: '12px'}} src="https://open.spotify.com/embed/playlist/37i9dQZF1DX18jTM2l2fJY?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}