import React, { useState, useEffect, Fragment } from 'react'
import { motion } from 'framer-motion'

import { images } from '../../constants'
import { FaConnectdevelop } from 'react-icons/fa'
import { CgWebsite } from 'react-icons/cg'
import { RiRadioButtonLine } from 'react-icons/ri'
import { HiStatusOffline } from 'react-icons/hi'
import { BsFillFilePersonFill } from 'react-icons/bs'
import ReactTooltip from 'react-tooltip';


import './Header.scss'


import { urlFor, client } from '../../client';

import { AppWrap } from '../../wrapper'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}



function Header() {


  const [status, setStatus] = useState(true);
  const [skills, setSkills] = useState([]);





  useEffect(() => {
    const query = '*[_type == "available"]';
    const querySkills = '*[_type == "skills_header"]';


    client.fetch(query).then((data) => {

      if (data[0].available === true) {
        setStatus(true);
      } else if (data[0].available === false) {
        setStatus(false);
      }

    });

    client.fetch(querySkills)
      .then((data) => {
        setSkills(data)
      })




  }, []);


  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 2 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className='badge-cmp app__flex'>
            <span><FaConnectdevelop /></span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hello , I am</p>
              <h1 className='head-text'>Yahya</h1>
              {status ? <p className='p-text' style={{ color: 'green' }}>Available <RiRadioButtonLine /></p> : <p className='p-text' style={{ color: 'red' }}>Not Available <HiStatusOffline /></p>
              }
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className='p-text'>Full Stack Web Developer <CgWebsite /></p>

            <a className='resume-button' download='resume_yahya.pdf' target="blank" href='https://cdn.sanity.io/files/8qw5kgvs/production/1f07f1cae080c2e4892f9198634aac0bb356ad31.pdf'>GET RESUME <BsFillFilePersonFill /></a>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={'./SAVE_20221026_110125-ai-brush-removebg-lw8v0xp-min-min.png'} alt="profile_bg" />

        <motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.profile}
          alt="profile_cycle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >

        {skills.map((circle, index) =>
          <Fragment key={`circle-${index}`}>
            <div className={`circle-cmp circle-cmp-number${index} app__flex`} data-tip data-for={circle.name}>
              <img src={urlFor(circle.icon)} alt="profile_bg" />


            </div>
            <ReactTooltip
              id={circle.name}
              effect="solid"
              arrowColor="#fff"
              className="skills-tooltip">
              {circle.desc}
            </ReactTooltip>
          </Fragment>


        )
        }

      </motion.div >
    </div >
  )
}

export default AppWrap(Header, 'home')
