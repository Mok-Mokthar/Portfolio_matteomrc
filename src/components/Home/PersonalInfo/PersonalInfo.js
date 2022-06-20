import React from 'react'

const PersonalInfo = () => {
  return (
    <div className="personalInfo">
        <div className="personalTitle">
            <h3>présentation personnelle</h3>
        </div>
        <div className="personalDescription">
            <p>
                Je m'appelle Mattéo Marchyllie, j'ai 21 ans et je suis actuellement en <span className='textColor'>Bachelor 3 Webdesign </span>
                 à MyDigitalSchool Lille. Je suis passionné par <span className='textColor'>l'airsoft</span>, la <span className='textColor'>moto</span> et le <span className='textColor'>design</span> ! 
                 J'habite à Dunkerque avec ma famille. La principale raison pour laquelle j'ai choisi ce domaine
                 est que je voulais lié le côté création, art et informatique.  
                    Au niveau éducatif, mon principal but c'est d'obtenir un  <span className='textColor'>Master UI / UX design</span> afin de monter en compétences.
            </p>
            <p>
                Mes objectifs professionnels sont à court terme de trouver une alternance dans une entreprise en
                 tant que UI / UX designer ou webdesigner, à moyen terme devenir <span className='textColor'>UI / UX designer en agence digitale </span>
                  et à long terme peut être devenir <span className='textColor'>freelance</span> ou alterner entre mon métier d'UX designer et transmettre
                   mon savoir à des élèves en tant qu'<span className='textColor'>intervenant</span>.
            </p>
        </div>
    </div>
  )
}

export default PersonalInfo