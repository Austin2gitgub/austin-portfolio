const Footer = () => {
    return (
        <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            {/*<div className="text-white-500 flex gap-2">*/}
            {/*    <p>Terms & Conditions</p>*/}
            {/*    <p>|</p>*/}
            {/*    <p>Privacy Policy</p>*/}
            {/*</div>*/}

            <div className="flex gap-3">
                <div className="social-icon">
                    <a href="https://github.com/Austin2gitgub" target="_blank" className="w-7/12 h-3/5 left-1/2">
                        <img src="/assets/github.svg" alt="github"/>
                    </a>
                </div>
                <a href="https://www.linkedin.com/in/austin-samuel-a87a2a213/" target="_blank">
                    <div className="social-icon">
                        <img src="/assets/linkedin-new.png" alt="linkedin" className="w-1/2"/>
                    </div>
                </a>
                <a href="https://www.salesforce.com/trailblazer/pfjow62830sk4097ui" target="_blank">
                    <div className="social-icon">
                            <img src="/assets/sdfc-3.png" alt="instagram" className="w-1/2 h-1/2"/>
                    </div>
                </a>
            </div>

            <p className="text-white-500">© 2025 Austin Samuel. All rights reserved.</p>
        </footer>
    );
};

export default Footer;