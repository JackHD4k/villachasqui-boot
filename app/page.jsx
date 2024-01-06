import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
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

    </main>
  )
}
