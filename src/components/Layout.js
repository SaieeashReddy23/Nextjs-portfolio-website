const Layout = ({ children, className = '' }) => {
  return (
    <div
      className={` w-full h-full z-0 p-32 bg-light dark:bg-dark  xl:p-24 lg:p-16 
      md:p-12 sm:p-8 !pt-0 md:!pt-16 sm:!pt-1  ${className}`}
    >
      {children}
    </div>
  )
}
export default Layout
