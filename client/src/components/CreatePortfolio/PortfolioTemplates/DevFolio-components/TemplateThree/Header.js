import React from 'react';
import './TemplateThree.css';

function Header({ userData, Resume }) {
  return (
    <header id="headerThree">
  <div class="d-flex flex-column">
    <div class="profileThree">
      <img src="/assets/img/SDE-profile.webp" alt="" class="img-fluid rounded-circle profile-img" />
      <h1 class="profile-name">{userData.fname}</h1>
      <div class="social-linksThree mt-3">
        <a href="#" class="github"><i class="bx bxl-github"></i></a>
        <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
      </div>
    </div>


        <nav id="navbarThree" className="nav-menuThree navbarThree">
          <ul>
            <li><a href="#heroThree" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
            <li><a href="#aboutThree" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
            <li><a href="#resumeThree" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
            <li><a href="#contactThree" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
