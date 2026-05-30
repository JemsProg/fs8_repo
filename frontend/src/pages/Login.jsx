import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Login form is ready for backend API integration.");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <Header />
      <main className="mx-auto flex w-full max-w-6xl justify-center px-5 py-14 lg:px-8">
        <section className="w-full max-w-md rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#061947]">
            Sign in
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-950">
            Welcome back
          </h1>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700"
              >
                Email or username
              </label>
              <input
                id="email"
                name="email"
                type="text"
                required
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#061947] focus:ring-2 focus:ring-[#061947]/20"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#061947] focus:ring-2 focus:ring-[#061947]/20"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#061947] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0b255f]"
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-600">
            Need an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-[#061947] hover:underline"
            >
              Register
            </Link>
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
