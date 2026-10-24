
import { useState } from 'react';

export default function EmployeeForm() {
  const [form, setForm] = useState({
    name: '',
    designation: '',
    location: '',
    salary: ''
  });

  const [message, setMessage] = useState('');

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setMessage('Employee form submitted successfully!');
    console.log('Employee Details:', form);
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-8 col-lg-6">
        <div className="card shadow p-4">
          <h2 className="mb-4">Employee Form</h2>

          {message && (
            <div className="alert alert-success">{message}</div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                className="form-control"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Designation</label>
              <input
                className="form-control"
                name="designation"
                value={form.designation}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Location</label>
              <input
                className="form-control"
                name="location"
                value={form.location}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label">Salary</label>
              <input
                className="form-control"
                type="number"
                name="salary"
                min="0"
                value={form.salary}
                onChange={handleChange}
                required
              />
            </div>

            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
