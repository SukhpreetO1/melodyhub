import { NavLink, USERS_SIGNUP } from '../../routes/routes.jsx';

const Footer = () => {
  return (
    <>
      <NavLink to={USERS_SIGNUP} className='flex justify-between items-center bg-[linear-gradient(90deg,#af2896,#509bf5)] p-3 m-3'>
        <div className='flex flex-col text-base'>
          <span>Preview of MelodyHub</span>
          <span>Sign up to get unlimited songs and podcasts without ads.</span>
        </div>
        <span className="block py-3 px-3 md:border-0 border-b-2 md:bg-white md:text-black md:rounded-full md:w-36 md:text-center md:font-bold hover:scale-110 transition duration-200 ease-in-out">Sign Up Free</span>
      </NavLink>
    </>
  )
}

export default Footer
