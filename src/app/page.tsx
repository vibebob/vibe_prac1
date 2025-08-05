import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 p-8 flex justify-between items-start text-xs tracking-wider">
        <div className="text-gray-600">YOUR NAME</div>
        <div className="text-right">
          <div className="text-gray-600">REACH OUT</div>
          <div className="text-gray-600">YOURNAME.COM</div>
          <div className="text-gray-600">SEOUL [12:00 PM]</div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 px-8 pb-16">
        {/* Hero Section */}
        <section className="mb-24">
          <h1 className="text-8xl font-bold leading-none mb-12">
            YOUR<br />
            NAME<br />
            DIGITAL<br />
            DESIGNER
          </h1>
          
          <div className="max-w-2xl">
            <div className="text-sm text-gray-500 mb-4 tracking-wider">[ABOUT]</div>
            <p className="text-lg leading-relaxed text-gray-800">
              I craft digital experiences that blend creativity with precision, 
              transforming ideas into captivating designs that resonate seamlessly with audiences.
            </p>
          </div>
        </section>

        {/* Work Gallery */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <div className="aspect-square bg-gray-100 mb-4 flex items-center justify-center">
                <div className="text-4xl text-gray-400">01</div>
              </div>
              <div className="text-sm text-gray-500 tracking-wider">[PROJECT ONE]</div>
            </div>
            
            <div className="group">
              <div className="aspect-square bg-gray-100 mb-4 flex items-center justify-center">
                <div className="text-4xl text-gray-400">02</div>
              </div>
              <div className="text-sm text-gray-500 tracking-wider">[PROJECT TWO]</div>
            </div>
            
            <div className="group">
              <div className="aspect-square bg-gray-100 mb-4 flex items-center justify-center">
                <div className="text-4xl text-gray-400">03</div>
              </div>
              <div className="text-sm text-gray-500 tracking-wider">[PROJECT THREE]</div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-24">
          <div className="text-sm text-gray-500 mb-4 tracking-wider">[SKILLS]</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Technical</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Web Development</li>
                <li>UI/UX Design</li>
                <li>Problem Solving</li>
                <li>Creative Direction</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Soft Skills</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Communication</li>
                <li>Team Collaboration</li>
                <li>Project Management</li>
                <li>Client Relations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <div className="text-sm text-gray-500 mb-4 tracking-wider">[REACH OUT]</div>
          <div className="text-6xl font-bold leading-none">
            EMAIL<br />
            BEHANCE<br />
            LINKEDIN<br />
            GITHUB
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 p-8 flex justify-between items-end text-xs tracking-wider">
        <div className="text-gray-600">YOUR NAME &apos;24</div>
        <div className="text-gray-600">ALL RIGHTS RESERVED</div>
      </footer>
    </div>
  );
}
