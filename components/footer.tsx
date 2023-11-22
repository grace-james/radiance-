const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t py-12 h-32">
      <div className="max-w-5xl mx-auto flex justify-between">
        <div className="flex items-center space-x-4">
        <img
            src="/sun-logo.png"
            alt="React Bricks"
            className="w-8"
          />
          <div className="uppercase text-sm tracking-wider">Contact Julie!</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
