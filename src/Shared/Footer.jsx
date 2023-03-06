import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-40">
      <footer className="footer p-10 border-t text-base-content logo-font hidden md:footer">
        <div>
          <span className="footer-title">Services</span>
          <Link className="link link-hover">Branding</Link>
          <Link className="link link-hover">Design</Link>
          <Link className="link link-hover">Marketing</Link>
          <Link className="link link-hover">Advertisement</Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Jobs</Link>
          <Link className="link link-hover">Press kit</Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </div>
        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control   w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered rounded-sm w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-sm rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>

      <footer className="footer flex justify-center px-10 py-4 border-t logo-font md:hidden">
        <div className="text-center">
          <h1 className="text-center text-xl w-full">infinity</h1>
          <p>
            ACME Industries Ltd. <br />
            Providing reliable tech since 1992
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
