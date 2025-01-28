import { Footer, Navbar, Sidebar, getTokenFromCookie } from "../../routes/routes.jsx";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      { getTokenFromCookie('token') || getTokenFromCookie('admin_token') ? "" : <Footer />  }
    </div>
  )
}

export default Homepage
