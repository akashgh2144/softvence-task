import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import NewsLetter from '../Home/NewsLetter';
import footer_logo from '../../assets/footer_logo.png'
export default function Footer() {

    const style = {
        background: 'linear-gradient(to right, #6797FFAF 10%,  #d5e3ff6d 50%, #f1f4ff)'
    };
    return (




        <footer style={style} className=" text-[#2c2c2c] text-sm py-12 px-6 md:px-20">
            <NewsLetter></NewsLetter>


            <div className="lg:w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pt-8 w-full">
                {/* Logo + Description */}
                <div>
                    <div className="flex items-center gap-2 text-xl font-semibold mb-4">

                        <img src={footer_logo} alt="" />
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        SalesRank.AI offers a comprehensive suite of AI-powered solutions to help you find expert sales professionals who can elevate every aspect of your business. From performance rankings and skill verification to industry benchmarking and real-time analytics, we provide the insights and tools to optimize your sales strategy and drive growth.
                    </p>
                    <div className="flex gap-4 mt-4 text-gray-600 text-lg">
                        <FaFacebookF />
                        <FaTwitter />
                        <FaLinkedinIn />
                        <FaInstagram />
                    </div>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="font-semibold text-[#1d1d1f] mb-3">Navigation</h3>
                    <ul className="space-y-2 text-gray-700">
                        <li>Service</li>
                        <li>Agency</li>
                        <li>Case Study</li>
                        <li>Resource</li>
                        <li>Contact</li>
                    </ul>
                </div>

                {/* Licence */}
                <div>
                    <h3 className="font-semibold text-[#1d1d1f] mb-3">Licence</h3>
                    <ul className="space-y-2 text-gray-700">
                        <li>Privacy Policy</li>
                        <li>Copyright</li>
                        <li>Email Address</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="font-semibold text-[#1d1d1f] mb-3">Contact</h3>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-center gap-2"><FaPhone /> (406) 555-0120</li>
                        <li className="flex items-center gap-2"><FaEnvelope /> Hey@boostim.com</li>
                        <li className="flex items-center gap-2"><FaMapMarkerAlt /> 2972 Westheimer Rd. Santa Ana, Illinois 85486</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
