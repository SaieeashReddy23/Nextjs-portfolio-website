import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useRef } from 'react'
import LiIcon from './LiIcon'

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null)

  return (
    <li
      ref={ref}
      className="  my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, type: 'spring' }}
      >
        <h3 className="font-bold text-2xl text-dark dark:text-light ">
          {type}
        </h3>

        <span className="font-medium text-dark/75 capitalize  dark:text-light/75">
          {time} | {place}
        </span>

        <p className="font-medium  dark:text-light">{info}</p>
      </motion.div>
    </li>
  )
}

const Education = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  })

  return (
    <div className="mb-64">
      <h2 className="font-bold text-center text-8xl my-16  w-full dark:text-light md:text-4xl">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className=" absolute left-9 top-5 w-[4px] h-full bg-dark origin-top dark:bg-primaryDark "
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Bachelor Of Science In Computer Science"
            time="2016-2020"
            place="Massachusetts Institute Of Technology (MIT)"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                Intelligence."
          />

          <Details
            type="master Of Computer Science"
            time="2020-2022"
            place="Stanford University"
            info="Completed a master's project on deep learning, developing a new neural network architecture for natural 
                language understanding."
          />
          <Details
            type="Online Coursework"
            time="2016-2020"
            place="Coursera And EdX"
            info="Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Machine 
                Learning Engineering."
          />
        </ul>
      </div>
    </div>
  )
}
export default Education
