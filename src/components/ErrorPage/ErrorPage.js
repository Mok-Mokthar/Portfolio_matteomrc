import React from 'react'

import {Link} from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
        <div className="errorMessage">
            Oups cette page n'existe pas
        </div>
        <Link to="/">
            <div className="backHome">
                retour page d'accueil
            </div>
        </Link>
    </div>
  )
}

export default ErrorPage