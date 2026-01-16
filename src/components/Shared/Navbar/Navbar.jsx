import React, { useContext, useEffect, useMemo, useState } from "react";
import { Link, NavLink } from "react-router";
import { toast } from "react-hot-toast";

import { IoIosHome } from "react-icons/io";
import { MdBallot, MdContactPhone, MdSpaceDashboard } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";
import { LuLogIn, LuLogOut, LuUserRoundPlus } from "react-icons/lu";

import useAuth from "../../../hooks/useAuth";
import WebLogo from "../WebLogo";
import avatarImg from "../../../assets/images/placeholder.jpg";
import { ThemeContext } from "../../../providers/ThemeProvider";

/**
 * Reusable helper: active link style
 * primary highlights on active route
 */
const navLinkClass = ({ isActive }) =>
  [
    "rounded-lg px-3 py-2 font-semibold transition",
    "hover:bg-primary/10 hover:text-info",
    isActive ? "text-white bg-primary" : "text-base-content",
  ].join(" ");

const Navbar = () => {
  const { user, logOut } = useAuth();
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleThemeToggle = (checked) => {
    setTheme(checked ? 'dark' : 'light');
  };

  const handleLogout = async () => {
    try {
      await logOut();
      toast.success("Logged out successfully");
    } catch (err) {
      toast.error(err?.message || "Logout failed");
    }
  };

  // Nav items (logged-out: min 3 routes, logged-in: min 5 routes)
  const navLinks = useMemo(
    () => (
      <>
        <li>
          <NavLink to="/" className={navLinkClass}>
            <span className="flex items-center gap-2">
              <IoIosHome /> Home
            </span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/all-loans" className={navLinkClass}>
            <span className="flex items-center gap-2">
              <MdBallot /> All Loans
            </span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/about-us" className={navLinkClass}>
            <span className="flex items-center gap-2">
              <FaInfoCircle /> About
            </span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact-us" className={navLinkClass}>
            <span className="flex items-center gap-2">
              <MdContactPhone /> Contact
            </span>
          </NavLink>
        </li>

        {user && (
          <li>
            <NavLink to="/dashboard" className={navLinkClass}>
              <span className="flex items-center gap-2">
                <MdSpaceDashboard /> Dashboard
              </span>
            </NavLink>
          </li>
        )}
      </>
    ),
    [user]
  );

  return (
    <header className="w-full sticky top-0 z-50 bg-base-100/90 backdrop-blur border-b border-base-300">
      {/** global spacing rule */}
      <nav className="container mx-auto px-6 md:px-12">
        <div className="navbar px-0">
          {/* LEFT */}
          <div className="navbar-start">
            {/* Mobile menu */}
            <div className="dropdown lg:hidden">
              <label
                tabIndex={0}
                className="btn btn-ghost bg-primary/10 hover:bg-primary/20 mr-3"
                aria-label="Open menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 w-60 rounded-box bg-base-100 p-2 shadow border border-base-300"
              >
                {navLinks}
              </ul>
            </div>

            <WebLogo />
          </div>

          {/* CENTER (desktop) */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-2">{navLinks}</ul>
          </div>

          {/* RIGHT */}
          <div className="navbar-end gap-2">

            {/* Avatar dropdown */}
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar"
                aria-label="Open profile menu"
              >
                <div className="w-10 rounded-full ring-2 ring-primary/30">
                  <img
                    src={user?.photoURL || avatarImg}
                    alt="User avatar"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </label>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 w-56 rounded-box bg-base-100 p-2 shadow border border-base-300"
              >
                {/* user info small header */}
                <li className="px-2 py-2 pointer-events-none">
                  <div className="flex flex-col">
                    <span className="font-bold leading-tight">
                      {user?.displayName || "Guest"}
                    </span>
                    <span className="text-xs text-base-content/70">
                      {user?.email || "Not logged in"}
                    </span>
                  </div>
                </li>
                <div className="divider my-1" />

                {user ? (
                  <>
                    <li onClick={handleLogout}>
                      <span className="flex items-center gap-2">
                        <LuLogOut /> Logout
                      </span>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/login" className="flex items-center gap-2">
                        <LuLogIn /> Login
                      </Link>
                    </li>

                    <li>
                      <Link to="/signup" className="flex items-center gap-2">
                        <LuUserRoundPlus /> Register
                      </Link>
                    </li>
                  </>
                )}

                <div className="divider my-1" />

                {/* Theme toggle */}
                <li className="px-2 py-2">
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="font-semibold">Dark Mode</span>
                    <input
                      type="checkbox"
                      className="toggle"
                      checked={theme === 'dark'}
                      onChange={(e) => handleThemeToggle(e.target.checked)}
                    />
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
