import React from 'react'

import Grid from '@mui/material/Grid';
import { FaArrowRight } from "react-icons/fa";
import { categories, projets, TabTitle } from '../../Constants/Constants.js';

import {Link, useParams} from 'react-router-dom';

const Project = () => {
  
  let projetsArr = projets;
  let categoArr = categories;
  
  let { slug } = useParams();
  
  TabTitle(`Projets | ${slug}`);

  return (
    <>
      <div className="projectTitle">
        <h1>
          <FaArrowRight/>
            {categoArr.filter(catego => catego.slug === slug).map(({categorie}) => (
              <span key={categorie}>
                {categorie}
              </span>
            ))}
        </h1>
      </div>
      <Grid container>
      {projetsArr.filter(projet => projet.slug === slug).map(({titre, picture, altPicture, projetSlug}) => (
          <Grid
            item lg={4} sm={6} xs={12}
            className="projetContainer"
            key={titre}
          >
            <div className="pictureProjetContainer">
              <img src={picture} alt={altPicture}/>
            </div>
            <div className="projetButtonContainer">
              <Link to={`/projet/${slug}/${projetSlug}`}>
                <button className='projetButton'>{titre}</button>
              </Link>
            </div>
          </Grid>
        ))
      }

      </Grid>
    </>
  )
}

export default Project