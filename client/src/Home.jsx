import React from 'react'

const Home = () => {
  return (
    <>
         <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-xl font-semibold">My Website</h1>
            <nav className="space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Services</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 ">
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Welcome to My Website</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula semper mi, eu gravida lectus efficitur sed. Donec ac nisi in urna consequat blandit sit amet ut nulla.</p>
        </section>

        <section className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white shadow rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-2">Service 1</h4>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-2">Service 2</h4>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-2">Service 3</h4>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 My Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </>
  )
}

export default Home