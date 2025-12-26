export default function Login({ handleLoginSubmit, handleLoginChange, loginData }) {
    return (
        <form onSubmit={handleLoginSubmit}>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    required
                    value={loginData.email}
                    onChange={handleLoginChange}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    required
                    value={loginData.password}
                    onChange={handleLoginChange}
                />
            </div>

            <button className="btn btn-dark w-100">
                Iniciar sesión
            </button>
        </form>
    )
}