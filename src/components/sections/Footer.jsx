
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p className="font-bold text-center md:text-end">
            © {new Date().getFullYear()} Hodut Darius. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;