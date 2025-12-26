export default function Register({ handleRegisterSubmit, handleRegisterChange, registerData }) {
    return (
        <form onSubmit={handleRegisterSubmit}>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    required
                    value={registerData.email}
                    onChange={handleRegisterChange}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    required
                    value={registerData.password}
                    onChange={handleRegisterChange}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input
                    type="password"
                    name="confirmPassword"
                    className="form-control"
                    required
                    value={registerData.confirmPassword}
                    onChange={handleRegisterChange}
                />
            </div>

            <div className="form-check mb-3">
                <input
                    className="form-check-input"
                    type="checkbox"
                    name="terms"
                    id="terms"
                    checked={registerData.terms}
                    onChange={handleRegisterChange}
                />
                <label className="form-check-label" htmlFor="terms">
                    Acepto los términos y condiciones
                </label>
            </div>

            <button className="btn btn-dark w-100">
                Registrarse
            </button>
        </form>
    )
}