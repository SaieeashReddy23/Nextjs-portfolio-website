import { motion, useScroll } from 'framer-motion'

const LiIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ['center end', 'center center'],
  })

  return (
    <figure className="absolute left-0 stroke-dark">
      <svg width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="20"
          className="stroke-primary stroke-1 fill-none dark:stroke-primaryDark"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="20"
          className=" stroke-[5px] fill-light dark:fill-dark dark:stroke-primaryDark"
          style={{ pathLength: scrollYProgress }}
        />
        <motion.circle
          cx="50"
          cy="50"
          r="10"
          className="stroke-1 fill-primary animate-pulse  dark:fill-primaryDark"
        />
      </svg>
    </figure>
  )
}
export default LiIcon
