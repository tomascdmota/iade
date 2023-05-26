import React from 'react'
import './unsolved.css'
import Navbar from '../../components/navbar/navbar'

function unsolved() {
  return (
    <div>
           
           <Navbar/>

           <div className="atractions-container" id="section-2">
            <div className="atractions-title">
               <h1> Casos por resolver</h1>
            </div>

            <section className="bio-section">
                <div className="card-grid">
                  <a className="card" href="https://www.bbc.com/portuguese/curiosidades-55288367" rel='noreferrer' target='_blank'>
                    <div className="card__background" style={{backgroundImage: `url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thefamouspeople.com%2Fprofiles%2Fimages%2Fzodiac-killer-1.jpg&f=1&nofb=1&ipt=ac83bb0df42b44a0c44f5f69e96b8f6c2d5b21fbabac29f2d718a41def039ba2&ipo=images")`}}></div>
                    <div className="card__content">
                      <h3 className="card__heading">Assassino do Zodíaco</h3>
                    </div>
                  </a>
                  <a className="card" href="https://www.bbc.com/portuguese/geral-47650556"rel='noreferrer' target='_blank'>
                    <div className="card__background" style={{backgroundImage: `url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.wondersoflondon.com%2Fwp-content%2Fuploads%2FJack-the-Ripper.jpg&f=1&nofb=1&ipt=e883fb979eb67fac9a569db3d4a666f08a4cffe59acdca8733cf530299aae12a&ipo=images")`}}></div>
                    <div className="card__content">
                      <h3 className="card__heading">Jack The Ripper</h3>
                    </div>
                  </a>
                  <a className="card" href="https://en.wikipedia.org/wiki/Long_Island_serial_killer"rel='noreferrer' target='_blank'>
                    <div className="card__background" style={{backgroundImage: `url("https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fa57.foxnews.com%2Fglobal.fncstatic.com%2Fstatic%2Fmanaged%2Fimg%2FScitech%2F876%2F493%2FJoelRifkin.jpg%3Fve%3D1%26tl%3D1&f=1&nofb=1&ipt=338130879bc96592caa480fdf3c154f265fa57322252a6cdab430f93760c011b&ipo=images")`}}></div>
                    <div className="card__content">
                      <h3 className="card__heading">O Assassino de Long Island</h3>
                    </div>
                    </a>
                 
                  
                </div>
              </section>

        </div>
    </div>
  )
}

export default unsolved