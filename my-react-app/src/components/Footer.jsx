import { Link } from "react-router-dom";

const Footer=()=>{
    return(
        <>
        <footer className="bg-amber-900 text-white py-10 mt-16">
            <div className="max-w-6xl mx-auto px-6 md:grid-cols-3 gap-10 text-center md:text-left">
                {/* column 1 */}
                <div>
                    <h2 className="text-2xl font-bold mb-3">☕ Café Aroma</h2>
                    <p className="text-gray-300">
            Brewing happiness, one cup at a time. Visit us for the perfect blend
            of taste and comfort.
                    </p>
                </div>
                {/* column 2 */}
                <div>
                    <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li>
                            <Link to="/" className=" hover:text-white transition duration-200 cursor-pointer"
                            >Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/profile" className=" hover:text-white transition duration-200 cursor-pointer"
                            >Profile
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className=" hover:text-white transition duration-200 cursor-pointer"
                            >Contacts
                            </Link>
                        </li>
                        <li>
                            <Link to="/menu" className=" hover:text-white transition duration-200 cursor-pointer"
                            >Menu
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a className="hover:text-amber-300 text-gray-200 transition duration-200" href="">🌐</a>
                        <a className="hover:text-amber-300 text-gray-200 transition duration-200" href="">📸</a>
                        <a className="hover:text-amber-300 text-gray-200 transition duration-200" href="">🐦</a>
                    </div>
                </div>
            </div>
      <div className="border-t border-amber-800 mt-10 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Café Aroma. All rights reserved.
      </div>
        </footer>
        </>
    )
}
export default Footer;