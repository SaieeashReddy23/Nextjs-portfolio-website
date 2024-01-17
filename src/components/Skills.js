import { motion } from 'framer-motion'

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center bg-dark text-light dark:bg-light dark:text-dark py-6 px-6 rounded-full font-semibold  cursor-pointer absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3  xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{
        scale: 1.05,
      }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  )
}

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-center text-8xl mt-32 mb-8  - w-full dark:text-light md:text-5xl">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center bg-circularLight dark:bg-circularDark mb-64 md:mb-32 rounded-full lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd  sm:bg-circularLightSm sm:dark:bg-circularDarkSm lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]">
        <motion.div
          className="flex items-center justify-center bg-dark text-light  dark:bg-light dark:text-dark py-6 px-6 rounded-full font-semibold  cursor-pointer"
          whileHover={{
            scale: 1.05,
          }}
        >
          web
        </motion.div>

        <Skill name="HTML" x="-20vw" y="-10vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="JAVASCRIPT" x="20vw" y="6vw" />
        <Skill name="NEXTJS" x="0vw" y="12vw" />
        <Skill name="REACTJS" x="-20vw" y="-15v2" />
        <Skill name="FIREBASE" x="15vw" y="-12vh" />
        <Skill name="TAILWINDCSS" x="32vw" y="-15vw" />
        <Skill name="GATSBY" x="0vw" y="-20vw" />
        <Skill name="WEBDESIGN" x="-25vw" y="18vw" />
        <Skill name="JAVA" x="18vw" y="18vw" />
      </div>
    </>
  )
}
export default Skills
