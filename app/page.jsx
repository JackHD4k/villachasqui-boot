import Image from 'next/image'
import './page.css'

export default function Home() {
  return (
    /*     <main className={styles.main}>
          <div className="container my-4">
            <h1>LOGO</h1>
          </div>
          <div className='container'>
            <nav class="navbar navbar-expand-lg my-4 border-top border-bottom">
              <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbartop" aria-controls="navbartop" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-md-center" id="navbartop">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link" href="#">INICIO</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">MISCELANEA</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div className='container'>
            <img src="/imghero.jpg" className='img-fluid' alt="asdf" />
          </div>
          <div >
            <h3 class="pb-4 mb-4 fst-italic border-bottom">
              From the Firehose
            </h3>
          </div>
        </main> */
    <main>


      {/* CENTRO */}

      <div class="container">
        <div class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
          <div class="col-lg-6 px-0">
            <h1 class="display-4 fst-italic"  style={{ color: '#722f37' }}>Title of a longer featured blog post</h1>
            <p class="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
          </div>
        </div>

        {/* <div class="row mb-2">
          <div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary-emphasis">World</strong>
                <h3 class="mb-0">Featured post</h3>
                <div class="mb-1 text-body-secondary">Nov 12</div>
                <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="icon-link gap-1 icon-link-hover stretched-link">
                  Continue reading
                </a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-success-emphasis">Design</strong>
                <h3 class="mb-0">Post title</h3>
                <div class="mb-1 text-body-secondary">Nov 11</div>
                <p class="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              </div>
              <div class="col-auto d-none d-lg-block">
                <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
              </div>
            </div>
          </div>
        </div> */
        }

        {/* NOTICIAS */}

        <div class="row g-5">
          <div class="col-md-8"> 
            <h3 class="py-4 mb-4 border-bottom border-2 border-danger-subtle fw-bold" style={{ color: '#d1510f' }}>
              POLITICA PERUANA
            </h3>
            <div class="row row-cols-1 row-cols-md-3 g-4">
              <div class="col">
                <div class="card" style={{ border: 'none' }}>
                  <img src="/img.jpg" alt="df" />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card" style={{ border: 'none' }}>
                  <img src="/img.jpg" alt="df" />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card" style={{ border: 'none' }}>
                  <img src="/img.jpg" alt="df" />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card" style={{ border: 'none' }}>
                  <img src="/img.jpg" alt="df" />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card" style={{ border: 'none' }}>
                  <img src="/img.jpg" alt="df" />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card" style={{ border: 'none' }}>
                  <img src="/img.jpg" alt="dfs" />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
            </div>

            <h3 class="py-4 mb-4 border-bottom border-2 border-danger-subtle fw-bold" style={{ color: '#d1510f' }}>
              INTERNACIONALES
            </h3>
            <div class="row row-cols-1 row-cols-md-3 g-4">
              <div class="col">
                <div class="card" style={{ border: 'none' }}>
                  <img src="/img.jpg" alt="df" />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card" style={{ border: 'none' }}>
                  <img src="/img.jpg" alt="df" />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card" style={{ border: 'none' }}>
                  <img src="/img.jpg" alt="df" />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card" style={{ border: 'none' }}>
                  <img src="/img.jpg" alt="df" />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card" style={{ border: 'none' }}>
                  <img src="/img.jpg" alt="df" />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card" style={{ border: 'none' }}>
                  <img src="/img.jpg" alt="dfs" />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
            </div>

            <h3 class="py-4 mb-4 border-bottom border-2 border-danger-subtle fw-bold" style={{ color: '#d1510f' }}>
              ESPECTÁCULOS
            </h3>
            <div class="row row-cols-1 row-cols-md-3 g-4">
              <div class="col">
                <div class="card" style={{ border: 'none' }}>
                  <img src="/img.jpg" alt="df" />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card" style={{ border: 'none' }}>
                  <img src="/img.jpg" alt="df" />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card" style={{ border: 'none' }}>
                  <img src="/img.jpg" alt="df" />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card" style={{ border: 'none' }}>
                  <img src="/img.jpg" alt="df" />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card" style={{ border: 'none' }}>
                  <img src="/img.jpg" alt="df" />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card" style={{ border: 'none' }}>
                  <img src="/img.jpg" alt="dfs" />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
            </div>

            <h3 class="py-4 mb-4 border-bottom border-2 border-danger-subtle fw-bold" style={{ color: '#d1510f' }}>
              DEPORTES
            </h3>
            <div class="row row-cols-1 row-cols-md-3 g-4">
              <div class="col">
                <div class="card" style={{ border: 'none' }}>
                  <img src="/img.jpg" alt="df" />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card" style={{ border: 'none' }}>
                  <img src="/img.jpg" alt="df" />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card" style={{ border: 'none' }}>
                  <img src="/img.jpg" alt="df" />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card" style={{ border: 'none' }}>
                  <img src="/img.jpg" alt="df" />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card" style={{ border: 'none' }}>
                  <img src="/img.jpg" alt="df" />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card" style={{ border: 'none' }}>
                  <img src="/img.jpg" alt="dfs" />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SIDE BAR */}

          <div class="col-md-4">
            <div class="position-sticky" style={{ top: '1rem' }}>
              <div class="p-4 mb-3 bg-body-tertiary rounded">
                <h4 class="fst-italic">Sobre nosotros</h4>
                <p class="mb-0">Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.</p>
              </div>

              <div>
                <h4 class="fst-italic">Publicaciones recientes</h4>
                <ul class="list-unstyled">
                  <li>
                    <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                      <img src="/imgprofile.png" alt="ad" />
                      <div class="col-lg-8">
                        <h6 class="mb-0">Example blog post title</h6>
                        <small class="text-body-secondary">January 15, 2023</small>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                      <img src="/imgprofile.png" alt="ad" />
                      <div class="col-lg-8">
                        <h6 class="mb-0">This is another blog post title</h6>
                        <small class="text-body-secondary">January 14, 2023</small>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                      <img src="/imgprofile.png" alt="ad" />
                      <div class="col-lg-8">
                        <h6 class="mb-0">Longer blog post title: This one has multiple lines!</h6>
                        <small class="text-body-secondary">January 13, 2023</small>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 class="fst-italic">Integrantes</h4>
                <ul class="list-unstyled">
                  <li>
                    <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                      <img src="/imgprofile.png" alt="ad" />
                      <div class="col-lg-8">
                        <h6 class="mb-0">Example blog post title</h6>
                        <small class="text-body-secondary">January 15, 2023</small>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                      <img src="/imgprofile.png" alt="ad" />
                      <div class="col-lg-8">
                        <h6 class="mb-0">This is another blog post title</h6>
                        <small class="text-body-secondary">January 14, 2023</small>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                      <img src="/imgprofile.png" alt="ad" />
                      <div class="col-lg-8">
                        <h6 class="mb-0">Longer blog post title: This one has multiple lines!</h6>
                        <small class="text-body-secondary">January 13, 2023</small>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>


            </div>
          </div>

          {/* FOOTER */}

          <div class="container">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
              <div class="col-md-4 d-flex align-items-center">
                <span class="mb-3 mb-md-0 text-body-secondary">© 2023 Company, Inc</span>
              </div>

              <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className='ms-3'>Facebook</li>
                <li className='ms-3'>Instagram</li>
                <li className='ms-3'>TikTok</li>
                <li className='ms-3'>Spotify</li>
              </ul>
            </footer>
          </div>
        </div>
      </div>
    </main>
  )
}
