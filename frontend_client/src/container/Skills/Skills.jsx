import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import { TbGripVertical } from 'react-icons/tb'


import './Skills.scss';

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  



  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name} data-for="aa"
            >
              <div
                className="app__flex"
                style={{ border: '3px solid ' + skill.bgColor, boxShadow: '0px 0px 30px -6px ' + skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>

              {/* <ReactTooltip id="aa" place="top" effect="solid" textColor='black' backgroundColor='white'>
                ASDASDWADs
              </ReactTooltip> */}

              


            </motion.div>



          ))}


        </motion.div>
        <div className="app__skills-exp">
          {experiences?.map((experience, index) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year + index}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
                <br />

                <TbGripVertical style={{ textAlign: 'center', top: '-20px', position: 'relative', margin: 'auto', width: '36px', height: '20px' }} />
                <br />
                <TbGripVertical style={{ textAlign: 'center', top: '-27px', position: 'relative', margin: 'auto', width: '36px', height: '20px' }} />

              </div>

              <motion.div className="app__skills-exp-works">
                {experience.works?.map((work, index) => (
                  <div key={work.name + index}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name + index}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);