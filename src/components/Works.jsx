import Tilt from 'react-tilt';
import { motion } from 'framer-motion'

import { styles} from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn,  textVariant } from '../utils/motion'


const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p 
          variants={fadeIn("", "", 0.1, 0.1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The following projects demonstrate my skills and experience 
          through real-world examples of my work. Each project is 
          briefly described and includes links to code repositories 
          and live demos. They showcase my ability to solve complex problems, 
          work with various technologies, and effectively manage projects.
        </motion.p>

      </div>
    </>
  )
}

export default SectionWrapper(Works, "")