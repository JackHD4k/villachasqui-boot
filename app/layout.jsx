/* eslint-disable @next/next/no-img-element */
import { Linden_Hill } from 'next/font/google'
import Link from 'next/link'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import BootstrapClient from './components/BootstrapClient.js'
import 'bootstrap-icons/font/bootstrap-icons.css'


const linden = Linden_Hill({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'VILLACHASQUI',
  description: 'Página de noticias',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={linden.className}>
        <div className="container">
          <div className="container my-4 text-center" style={{ backgroundColor: '#722f37' }}>
            <img src="../nuevo_logo.png" className='img-fluid' alt="logo" />
          </div>
          <nav id='nav-scroll' className="navbar navbar-expand-lg my-4 border-top border-bottom">
            <div className="container-fluid d-flex justify-content-center">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbartop" aria-controls="navbartop" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-md-center" id="navbartop">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className='nav-link text-dark' href={'/'}>INICIO</Link>
                  </li>
                  <li className="nav-item">
                    <Link className='nav-link text-dark' href='/#scroll-politica'>POLÍTICA</Link>
                  </li>
                  <li className="nav-item">
                    <Link className='nav-link text-dark' href='/#scroll-internacionales'>INTERNACIONALES</Link>
                  </li>
                  <li className="nav-item">
                    <Link className='nav-link text-dark' href='/#scroll-espectaculos'>ESPECTÁCULOS</Link>
                  </li>
                  <li className="nav-item">
                    <Link className='nav-link text-dark' href='/#scroll-deportes'>DEPORTES</Link>
                  </li>
                  <li className="nav-item">
                    <Link className='nav-link text-dark' href={'/miscelanea'}>MISCELANEA</Link>
                  </li>
                  <li className="nav-item">
                    <Link className='nav-link text-dark' href={'/podcast'}>PODCAST</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        {children}

        <BootstrapClient />

        {/*         <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
              <div className="col-md-4 d-flex align-items-center">
                <span className="mb-3 mb-md-0 text-body-secondary">© 2023 Company, Inc</span>
              </div>

              <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className='ms-3 nav-link text-dark'>Facebook</li>
                <li className='ms-3 nav-link text-dark'>Youtube</li>
                <li className='ms-3 nav-link text-dark'><a href="https://www.tiktok.com/@villachasquiunfv?is_from_webapp=1&sender_device=pc" target="_blank">TikTok</a></li>
              </ul>
            </footer>
          </div> */}
        <div className="container">
          <footer className="row  py-5 my-5 border-top">


            <div className="col-9 mb-3">
              <p className="text-body-secondary">© VILLACHASQUI 2024</p>
            </div>


            <div className="col-3 mb-3">
              <h5>Redes</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="https://www.tiktok.com/@villachasquiunfv?is_from_webapp=1&sender_device=pc" target="_blank" className="nav-link p-0 text-body-secondary"><i className="bi bi-tiktok"></i> TikTok</a></li>
                <li className="nav-item mb-2"><a href="https://www.youtube.com/channel/UCrwZ3XJf4yzJ3Culd9x8TBw" target="_blank" className="nav-link p-0 text-body-secondary"><i className="bi bi-youtube"></i> YouTube</a></li>
              </ul>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
