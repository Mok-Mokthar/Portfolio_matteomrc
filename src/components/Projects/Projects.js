import React from 'react'

import { FaArrowRight } from "react-icons/fa";
import Grid from '@mui/material/Grid';
import { categories } from '../Constants/Constants.js';
import { TabTitle } from '../Constants/Constants.js';

import {Link, useParams} from 'react-router-dom';


const Projects = () => {

  TabTitle('Projets');

  let {} = useParams; 

  return (
    <>
      <div className="projectsTitle">
        <h1>
          <FaArrowRight/>
            Mes réalisations
        </h1>
      </div>
      <Grid
        container
        spacing={3}
        className="projectsSection"
      >
        {categories.map(categorie => {
          return(
            <Grid item lg={4} sm={6} xs={12} key={categorie.categorie}>
              <div className="categorieContainer">
                <div className="logoCategorie">
                  <img src={categorie.image} alt={categorie.altImage}/>
                </div>
                <div className="categorieButtonContainer">
                  <Link to={`/projet/${categorie.slug}`}>
                    <button className='categorieButton'>{categorie.categorie}</button>
                  </Link>
                </div>
              </div>
            </Grid>
          )             
        })}
      </Grid>
    </>
  )
}

export default Projects