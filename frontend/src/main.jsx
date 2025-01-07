import { createRoot } from 'react-dom/client';
import { StrictMode, BrowserRouter, Route, Routes, Login, Signup, ToastContainer, AuthRoute, ForgotPassword, Homepage } from './routes/routes.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/'>
          <Route path='login' element={<AuthRoute><Login /></AuthRoute>} />
          <Route path='signup' element={<AuthRoute><Signup /> </AuthRoute>} />
          <Route path='forgot_password' element={<AuthRoute><ForgotPassword /> </AuthRoute>} />
        </Route>
      </Routes>
    </BrowserRouter>
    <ToastContainer position="top-right" />
  </>
  // </StrictMode>,
)
