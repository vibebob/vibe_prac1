export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <img 
            src="https://via.placeholder.com/200x200" 
            alt="Profile Picture" 
            className="w-48 h-48 rounded-full mx-auto mb-6 shadow-lg"
          />
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Hello, I'm [Your Name]</h1>
          <p className="text-xl text-gray-600">Welcome to my introduction page</p>
        </header>

        <main className="max-w-4xl mx-auto space-y-8">
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Me</h2>
            <p className="text-gray-700 leading-relaxed">
              I'm a passionate individual who loves learning new things and taking on challenges. 
              I enjoy working with technology and creating meaningful solutions.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Web Development
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Problem Solving
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Communication
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Team Collaboration
              </li>
            </ul>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Interests</h2>
            <p className="text-gray-700 leading-relaxed">
              When I'm not working, I enjoy reading, exploring new technologies, and spending time outdoors.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get In Touch</h2>
            <div className="space-y-2 text-gray-700">
              <p>Email: your.email@example.com</p>
              <p>LinkedIn: linkedin.com/in/yourprofile</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
