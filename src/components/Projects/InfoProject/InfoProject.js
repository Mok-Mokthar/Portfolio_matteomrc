import React from 'react'

import { projets, TabTitle } from '../../Constants/Constants.js';
import { FaArrowRight } from "react-icons/fa";
import Grid from '@mui/material/Grid';

import {Link, useParams} from 'react-router-dom';

const InfoProject = () => {

    let { slug, projet } = useParams();

    const projetArr = projets;

    TabTitle(`Projet | ${projet}`);


    return (
        <>
            <div className="infoProjectTitle">
                <h1>
                <FaArrowRight/>
                    {projetArr.filter(proj => (proj.projetSlug === projet) && (proj.slug === slug)).map(({titre}) => (
                        <span key={titre}>
                            {titre}
                        </span>
                    ))}
                </h1>
            </div>
            {
                projetArr.filter(proj => (proj.projetSlug === projet) && (proj.slug === slug)).map(({ titre, context, objectifs, missions, resultats, voirProjet, voirSite, picture, altPicture }) => (
                    <div className="" key={titre}>
                        <Grid container>
                            <Grid
                                item

                            >
                                <div className="context">
                                    <h2>Contexte</h2>
                                    <p>{context}</p>
                                </div>
                                <div className="infoProjectImageContainer">
                                    <img src={picture} alt={altPicture}/>
                                </div>
                            </Grid>
                            <div className="objectifContainer">
                                <h2>Objectif à atteindre</h2>
                                <p>{objectifs}</p>
                            </div>
                            <div className="missionContainer">
                                <h2>Missions réalisées & Méthodologie de réalisation</h2>
                                <p>{missions}</p>
                            </div>
                            <div className="resultatContainer">
                                <h2>Résultats & Apport de ce projet</h2>
                                <p>{resultats}</p>
                            </div>
                            <div className="boutonContainer">
                                {
                                    voirProjet !== null ? 
                                    <div className="projectButton">
                                        <a className='voirProjet' href={voirProjet} target="_blank" rel="noreferrer noopener">Voir le projet</a>
                                    </div> 
                                    : null
                                }
                                {
                                    voirSite !== null ? 
                                    <div className="projectButton">
                                        <a className='voirSite' href={voirSite} target="_blank" rel="noreferrer noopener">Voir le site</a>
                                    </div> 
                                    : null
                                }
                            </div>
                        </Grid>
                    </div>
                ))
            }


        </>
    )
}

export default InfoProject