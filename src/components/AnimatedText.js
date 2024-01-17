import { motion } from 'framer-motion'

const quote = {
  animate: {
    transition: {
      delay: 1,
      staggerChildren: 0.1,
    },
  },
}

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
}

const AnimatedText = ({ text, className = '' }) => {
  return (
    <div className="w-full max-auto py-2 flex items-center justify-center text-center overflow-hidden">
      <motion.h1
        className={`inline-block w-full  font-bold capitalize text-dark  dark:text-light text-8xl  ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(' ').map((word, index) => {
          return (
            <motion.span
              key={index}
              className="inline-block"
              variants={singleWord}
            >
              {word}&nbsp;
            </motion.span>
          )
        })}
      </motion.h1>
    </div>
  )
}
export default AnimatedText
