import { BsGithub, BsLinkedin } from "react-icons/bs";

function Header() {
    return (
        <header className="flex flex-col justify-center w-full ">
            <div className="flex items-center justify-center md:justify-end mt-4 lg:gap-7 md:gap-5 gap-3 text-white">
                <a
                    href="https://github.com/AnnaTas77"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-5 transition-colors duration-300 hover:text-cyan-400 focus:outline-none"
                >
                    <div>
                        <BsGithub className="text-2xl md:text-3xl " />
                    </div>
                </a>
                <a
                    href="https://www.linkedin.com/in/anna-tasheva-48074085/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center mr-8 transition-colors duration-300 hover:text-cyan-400 focus:outline-none"
                >
                    <div>
                        <BsLinkedin className="text-2xl md:text-3xl" />
                    </div>
                </a>
            </div>
            <h1 className="main-title text-center text-gradient font-bold text-2xl lg:text-3xl">
                Meteorite Landings Data Visualization
            </h1>
        </header>
    );
}

export default Header;
