import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linksLinks = links.map((element, index) => {
    return <a key={index} href={'#' + element} >{element}</a>
  })

  return <nav>{linksLinks}</nav>;
}

export default NavBar;
