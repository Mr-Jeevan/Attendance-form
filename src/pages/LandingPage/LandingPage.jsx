import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div className="font-sans min-h-screen text-gray-800">
        {/* Navbar */}
        <header className="bg-white shadow fixed top-0 w-full z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">SmartFace</h1>
            <nav className="space-x-6 hidden md:flex">
              <a href="#features" className="hover:text-blue-600">Features</a>
              <a href="#contact" className="hover:text-blue-600">Contact</a>
            </nav>
            <div className="flex space-x-4">
              <Link to="/login">
              <p className="hover:text--600 text-white bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-400 hover:to-blue-500 transition duration-300 ease-in-out p-2 rounded">Sign-In</p>
              </Link>
              <Link to="/register">
              <p  className="hover:text--600 text-white bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-400 hover:to-blue-500 transition duration-300 ease-in-out p-2 rounded">Sign-Up</p>
              </Link>
            </div>
            <button className="md:hidden text-gray-700">
              ☰
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <section className=" bg-gradient-to-b h-200 from-blue-50 to-blue-100 flex justify-center items-center">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Intelligent Facial Attendance System
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Automate attendance tracking with real-time facial recognition powered by AI.
            </p>
            {/* <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
              Get Started
            </button> */}
          </div>
        </section>

        {/* Features */}
        <section id="features" className=" pt-30 py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-3xl font-semibold text-center mb-12">Core Features</h3>
            <div className="grid md:grid-cols-3 gap-10">
              <FeatureCard
                title="Real-Time Detection"
                desc="Instantly recognize faces and mark attendance without delays."
                icon="👁️"
              />
              <FeatureCard
                title="Secure & Accurate"
                desc="High precision recognition with encrypted facial data."
                icon="🔒"
              />
              <FeatureCard
                title="Dashboard Insights"
                desc="View attendance logs, reports, and insights in one place."
                icon="📊"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white py-16 text-center">
          <h4 className="text-3xl font-semibold mb-4">Ready to go Touchless?</h4>
          <p className="mb-6">Start your journey towards smarter attendance tracking today.</p>
          <Link to="/login" className="bg-white text-blue-600 px-6 py-3 rounded hover:bg-blue-100 transition">
            Log-In
          </Link>
        </section>

        {/* Footer */}
        <footer id="contact" className="bg-gray-800 text-gray-300 py-8 text-center">
          <p>© {new Date().getFullYear()} SmartFace AI. All rights reserved.</p>
          <p>Email: support@smartface.ai</p>
        </footer>
      </div>
    </>
  );
};

const FeatureCard = ({ title, desc, icon }) => (
  <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
    <div className="text-4xl mb-4">{icon}</div>
    <h4 className="text-xl font-semibold mb-2">{title}</h4>
    <p className="text-gray-600">{desc}</p>
  </div>
);

export default LandingPage;
