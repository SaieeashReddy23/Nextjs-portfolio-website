import Link from 'next/link'
import Layout from './Layout'

const Footer = () => {
  return (
    <div className=" w-full border-t-2 border-solid border-dark dark:border-light dark:text-light text-lg font-medium ">
      <Layout className="py-8 flex items-center justify-between xl:flex-col xl:gap-2 ">
        <span>{new Date().getFullYear()} &copy; , All RIghts Reserved.</span>
        <span className="flex items-center">
          Built with{' '}
          <span className=" text-primary px-2 text-2xl">&#9825;</span> by
          Saieeash Reddy
        </span>
        <Link
          href="/"
          className="underline font-medium underline-offset-4 capitalize"
        >
          Say hello
        </Link>
      </Layout>
    </div>
  )
}
export default Footer
