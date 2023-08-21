import React from "react";

const Header = () => {
  const links = [
    "About",
    "Community",
    "Support us",
    "Sign in",
    <i class="bi bi-brightness-high mx-lg-3 "></i>,
  ];

  return (
    <>
      <header>
        <div className="py-3 text-center bg-light">
          <p className="m-0  text-secondary fw-medium">
            <span className="me-2 fw-normal bg-success-subtle px-1 rounded">
              New!
            </span>
            Coding Education for All: Join us in supporting the Umaxcode Project
            <a href="/" className="ms-2 text-dark fw-bold">
              Learn more <i class="bi bi-arrow-right"></i>
            </a>
          </p>
        </div>
      </header>
      <nav class="navbar navbar-expand-lg ">
        <div class="container-lg">
          <a class="navbar-brand fw-medium fs-5" href="#">
            <i class="bi bi-emoji-sunglasses-fill me-3 fs-2"></i>
            The Umaxcode Project
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              {links.map((element, index) => (
                <li class="nav-item" key={index}>
                  <a
                    class="nav-link fw-medium fs-5"
                    aria-current="page"
                    href="#"
                  >
                    {element}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="/"
              class="btn btn-success px-3 py-2 fs-5 fw-medium"
              type="submit"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
