import React from 'react'
import "./bio.css"
import Navbar from '../../components/navbar/navbar'

function bio() {
  return (
    <div>

        <Navbar/>

         <div class="atractions">
            <div class="bio-title">
                <h1>Fica a conhecer melhor o passado<br></br> destas pessoas enigmáticas </h1>
            </div>
           
        </div>

        <div class="main">
            <div class="container">
                <article class="cta">
                    <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd.newsweek.com%2Fen%2Ffull%2F1414832%2Fgettyimages-515117974.jpg&f=1&nofb=1&ipt=aad08808cb3c3268b105d95170387fc9a04566a142d67c0f5a7d43a7683a9bcd&ipo=images' alt='Ted bundy'/>
                    <div class="cta__text-column">
                        <h2>Ted Bundy</h2>
                        <p>Ted Bundy foi um assassino em série americano que cometeu uma série de assassinatos brutais e estupros nas décadas de 1970. Ele era carismático e aproveitava sua aparência e charme para atrair suas vítimas. Bundy foi condenado por pelo menos 30 assassinatos, mas especula-se que o número real de suas vítimas seja muito maior. Ele foi executado na cadeira elétrica em 1989.</p>
                        <a href="https://pt.wikipedia.org/wiki/Ted_Bundy" target="_blank">Saber mais</a>
                    </div>
                </article>
                
                <article class="cta">
                    <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FVtK0t7Uc95g%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=cb79b42cc35a97b73c894a1b0f306368c1c7da2ed1f858696974666b3d25fe1a&ipo=images' alt='Jeff'/>
                    <div class="cta__text-column">
                        <h2>Jeffrey Dahmer</h2>
                        <p>Jeffrey Dahmer, também conhecido como "O Canibal de Milwaukee", foi um assassino em série americano que cometeu uma série de assassinatos e mutilações entre 1978 e 1991. Dahmer atraiu jovens homens para seu apartamento, onde os assassinava, desmembrava seus corpos e praticava atos de necrofilia e canibalismo. Ele foi preso em 1991 e, em 1994, foi morto por um colega de prisão.</p>
                        <a href="https://pt.wikipedia.org/wiki/Jeffrey_Dahmer"  target="_blank">Saber mais</a>
                    </div>
                </article>
                <article class="cta">
                    <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.oxygen.com%2Fsites%2Foxygen%2Ffiles%2F2019-10%2Fjohn-wayne-gacy-g.jpg&f=1&nofb=1&ipt=a54014569939a280784630b8eddafdf15dd64530b68b1ea80aa40a3510caa8f6&ipo=images' alt='John Gacy'/>
                    <div class="cta__text-column">
                        <h2>John Wayne Gacy</h2>
                        <p>John Wayne Gacy, conhecido como "O Palhaço Assassino", foi um assassino em série americano que cometeu uma série de assassinatos na década de 1970. Gacy se disfarçava como um palhaço chamado "Pogo" para entreter crianças em eventos locais. No entanto, ele também era um predador sexual e assassino. Gacy foi condenado por 33 assassinatos e foi executado por injeção letal em 1994.</p>
                        <a href="https://pt.wikipedia.org/wiki/John_Wayne_Gacy" target="_blank">Saber Mais</a>
                    </div>
                </article>
                
                <article class="cta">
                    <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffilmdaily.co%2Fwp-content%2Fuploads%2F2020%2F04%2Frichard-chase-lede-1-1536x864.jpg&f=1&nofb=1&ipt=1cbf18a7f5b841545f6b611f64386a5a19f24a6d2b1b764ee91b6246dbfc9e25&ipo=images' alt='Richard Trenton'/>
                    <div class="cta__text-column">
                        <h2>Richard Trenton Chase</h2>
                        <p> Richard Trenton Chase (23 de maio de 1950 – 26 de dezembro de 1980) foi um assassino em série estadunidense. Psicótico, matou seis pessoas no espaço de um mês, em Sacramento, Califórnia e ficou conhecido como "O Vampiro de Sacramento", porque ele bebia sangue de suas vítimas e canibalizava seus órgãos internos, fazendo isso como parte de uma ilusão de que ele precisava para impedir os nazistas de transformar seu sangue em pó através do veneno que tinham plantado sob sua saboneteira.</p>
                        <a href="https://en.wikipedia.org/wiki/Richard_Chase" target="_blank">Saber Mais</a>
                    </div>
                </article>
               
        </div>

    </div>
    </div>
  )
}

export default bio