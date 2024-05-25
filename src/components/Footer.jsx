function Footer() {
    return <>
        <footer className="footer p-10 bg-neutral text-neutral-content grid grid-cols-2 md:grid-cols-4 gap-2">
            <nav>
                <h6 className="footer-title">Social Media</h6>
                <a className="link link-hover" href="https://www.facebook.com/profile.php?id=61554728202989" target="_blank">Facebook</a>
                <a className="link link-hover" href="https://www.linkedin.com/in/mir-kamrul-ahsan-asif-7a19a62b7/" target="_blank">LinkedIn</a>
                <a className="link link-hover" href="https://x.com/mir_asif000111" target="_blank">Twitter</a>
                <a className="link link-hover" href="https://github.com/mir-asif01" target="_blank">Github</a>
            </nav>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    </>
}
export default Footer