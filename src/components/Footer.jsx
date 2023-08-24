const Footer = () => {
    return (
        <footer className="footer-container mb-5">
            <p className="text-bold text-pink-200">
                Anna Tasheva &bull; <span>{new Date().getFullYear()}</span>
            </p>
        </footer>
    );
};

export default Footer;
