import React from "react";

function Footer() {
  var currentyear = new Date().getFullYear();

  return (
    <div>
      <footer>
        <p>Copyright @ {currentyear}</p>
      </footer>
    </div>
  );
}

export default Footer;
