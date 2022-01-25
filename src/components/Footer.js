export default function Footer() {
  return (
    <footer className="py-20 bg-gray-900 flex items-start gap-10">
      <h2 className="text-2xl font-bold ml-20 text-slate-50 mr-20">Shortly</h2>

      <ul className="footer-links">
        <li className="mb-4 font-bold">Features</li>
        <li>Link Shortening</li>
        <li>Branded Links</li>
        <li>Analytics</li>
      </ul>

      <ul className="footer-links">
        <li className="mb-4 font-bold">Resources</li>
        <li>Blog</li>
        <li>Developers</li>
        <li>Support</li>
      </ul>

      <ul className="footer-links">
        <li className="mb-4 font-bold">Company</li>
        <li>About</li>
        <li>Our Team</li>
        <li>Careers</li>
        <li>Conduct</li>
      </ul>
    </footer>
  );
}
