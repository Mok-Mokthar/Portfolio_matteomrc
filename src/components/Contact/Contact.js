import React from 'react'

import { TabTitle } from '../Constants/Constants.js';
import { FaArrowRight } from "react-icons/fa";
import { BsFillTelephoneFill, BsLinkedin, BsBehance } from "react-icons/bs";
import Grid from '@mui/material/Grid';

const Contact = () => {

  TabTitle('Contact');

    return (
        <>
          <div className="infoProjectTitle">
            <h1>
              <FaArrowRight/>
              <span>Contact</span>
            </h1>
          </div>
          <Grid container>
            <Grid 
              className="infoProjectTitle"
              item
            >
              <div className="phoneSection">
                <BsFillTelephoneFill/>
                <span>Tél : 06 52 91 08 79</span>
              </div>
              <div className="linkedinSection">
                <a className="externalLink" href='https://www.linkedin.com/in/matteomarchyllie/' target="_blank" rel="noreferrer noopener">
                  <BsLinkedin/>
                  Profil Linkedin
                </a>
              </div>
              <div className="behanceSection">
                <a className="externalLink" href='https://www.behance.net/matteomrc' target="_blank" rel="noreferrer noopener">
                  <BsBehance/>
                  Profil Behance
                </a>
              </div>
            </Grid>
            <Grid item>
              <form className="form" action="https://formsubmit.co/matteomrcpro@gmail.com" method="POST">
                <div className="topFormSection">
                  <div className="nom">
                    <input type="text" name="name" placeholder='Nom prénom' pattern="^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$" required/>
                  </div>
                  <div className="emailFormSection">
                    <input type="email" name="email" placeholder='email'required/>
                  </div>
                </div>
                <div className="messageFormSection">
                  <textarea name="message" placeholder="Votre message" required></textarea>
                </div>
                <div className="submitFormButton">
                  <button type="submit">Envoyer</button>
                </div>
              </form>
            </Grid>
          </Grid>
        </>
    )
}

export default Contact