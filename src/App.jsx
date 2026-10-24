
import { Link, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EmployeeForm from './pages/EmployeeForm';

export default function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
        <Link className="navbar-brand fw-bold" to="/">
          Employee Dashboard
        </Link>

        <div className="navbar-nav ms-auto flex-row gap-3">
          <Link className="nav-link text-white" to="/">
            Home
          </Link>
          <Link className="nav-link text-white" to="/employee-form">
            Employee Form
          </Link>
        </div>
      </nav>

      <main className="container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee-form" element={<EmployeeForm />} />
        </Routes>
      </main>
    </>
  );
}
