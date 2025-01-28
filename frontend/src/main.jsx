import { createRoot } from 'react-dom/client';
import { StrictMode, BrowserRouter, Route, Routes, Login, Signup, ToastContainer, AuthRoute, ForgotPassword, Homepage, EmailGlobalProvider, AdminRoute, AdminHomepage } from './routes/routes.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <>
    <EmailGlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='login' element={<AuthRoute><Login /></AuthRoute>} />
          <Route path='signup' element={<AuthRoute><Signup /> </AuthRoute>} />
          <Route path='forgot_password' element={<AuthRoute><ForgotPassword /> </AuthRoute>} />

          <Route path='/admin/*' element={<AdminRoute><AdminHomepage /></AdminRoute>} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-right" />
    </EmailGlobalProvider>
  </>
  // </StrictMode>,
)
