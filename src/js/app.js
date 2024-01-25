// When the user scrolls the page, execute myFunction
document.addEventListener('DOMContentLoaded',function(){
  window.onscroll = function() {myFunction()};
  // Get the header
  var header = document.getElementById("header");
  
  // Get the offset position of the navbar
  var sticky = header.offsetTop;
  
  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.scrollY > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

  //Create the header template
  let header_el=document.querySelector('.header-main');
  header_el.innerHTML=`
  <a href='index.html' class="enlace-logo"><h1 class="logo">Juan Camilo Palacio Castaño</h1></a>
  <nav class="navbar navbar-expand-lg bg-body-indigo-100 navegacion">
      <div class="nav-item dropdown">
          <button class="btn btn-primary dropdown-toggle menu" type="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Careers
          </button>
          <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="it.html">Career In Information Technology</a></li>
              <li><a class="dropdown-item" href="#">Career As Investor</a></li>
              <li><a class="dropdown-item" href="#">Career As Electrical Engineer</a></li>
          </ul>
      </div>
      <div class="nav-item dropdown">
          <button class="btn btn-primary dropdown-toggle menu" type="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Certificates
          </button>
          <ul class="dropdown-menu">
              <li><button class="dropdown-item" type="button">Career As Information Technology</button></li>
              <li><button class="dropdown-item" type="button">Career As Investor</button></li>
              <li><button class="dropdown-item" type="button">Career As Electrical Engineer</button></li>
          </ul>
      </div>
      <div class="nav-item dropdown">
          <button class="btn btn-primary dropdown-toggle menu" type="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Projects
          </button>
          <ul class="dropdown-menu">
              <li><button class="dropdown-item" type="button">Career As Information Technology</button></li>
              <li><button class="dropdown-item" type="button">Career As Investor</button></li>
              <li><button class="dropdown-item" type="button">Career As Electrical Engineer</button></li>
          </ul>
      </div>
  </nav>
  `;
})

