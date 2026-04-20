export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="meta-text mx-auto max-w-4xl px-6 py-8 text-center text-gray-500">
        © {new Date().getFullYear()} Carlos Rodrigues. All rights reserved.
      </div>
    </footer>
  )
}
