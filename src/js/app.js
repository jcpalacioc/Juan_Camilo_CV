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

  const fileName = window.location.pathname.split("/").pop(); 
  // obtiene el nombre del archivo actual, ej: "index_es.html"

  //Create the header template
  let header_el=document.querySelector('.header-main');

  if (fileName.endsWith("_es.html")) {
      header_el.innerHTML=`
      <a href='../es/index.html' class="enlace-logo">
            <h1 class="logo">Juan Camilo Palacio Castaño</h1>
        </a>
        <nav class="navbar navbar-expand-lg bg-body-indigo-100 navegacion">


            <div class="nav-item dropdown">
                <button class="btn btn-primary dropdown-toggle menu" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Creaciones
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="../html/cursos_es.html">Cursos Creados</a></li>
                </ul>
            </div>

            <div class="nav-item dropdown">
                <button class="btn btn-primary dropdown-toggle menu" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Experiencia
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="../html/experience_es.html">Experiencia Completa</a></li>
                </ul>
            </div>


            
            <div class="nav-item dropdown">
                <button class="btn btn-primary dropdown-toggle menu" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Certificados
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="../html/cert_it_es.html">Certificados de Tecnología de la Información</a></li>
                    <li><a class="dropdown-item" href="../html/cert_investor_es.html">Certificados como Gestor de Activos</a></li>
                </ul>
            </div>
        </nav>
      `;
  } else {
      header_el.innerHTML=`
      <a href='../index.html' class="enlace-logo"><h1 class="logo">Juan Camilo Palacio Castaño</h1></a>
      <nav class="navbar navbar-expand-lg bg-body-indigo-100 navegacion">

            <div class="nav-item dropdown">
              <button class="btn btn-primary dropdown-toggle menu" type="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Experience
              </button>
              <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="experience.html">Complete Experience</a></li>
              </ul>
            </div>

            <div class="nav-item dropdown"> 
                <button class="btn btn-primary dropdown-toggle menu" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Careers
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="it.html">Career In Information Technology</a></li>
                    <li><a class="dropdown-item" href="investor.html">Career As Investor</a></li>
                    <li><a class="dropdown-item" href="elec.html">Career As Electrical Engineer</a></li>
                </ul>
            </div>
            <div class="nav-item dropdown">
                <button class="btn btn-primary dropdown-toggle menu" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Certificates
                </button>
                <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="cert_it.html">Information Technology Certificates</a></li>
                      <li><a class="dropdown-item" href="cert_investor.html">Investor Certificates</a></li>
                      <li><a class="dropdown-item" href="cert_elec.html">Electrical Engineer Curriculum</a></li>
                </ul>
            </div>
            <div class="nav-item dropdown">
                <button class="btn btn-primary dropdown-toggle menu" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Projects
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="proj_it.html">IT Projects</a></li>
                    <li><a class="dropdown-item" href="proj_investor.html">Investor Projects</a></li>
                    <li><a class="dropdown-item" href="proj_elec.html">Electrical Engineer Projects</a></li>
                </ul>
            </div>

          
      </nav>
      `;
  }


  


  ///////////////////////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////////////////////



  //Change the footer last update
  let footer=document.querySelector('.footer');
  //const footer_date=footer.childNodes[3];
  //footer_date.textContent='Last update 2025-12-18.'
  //const footer_content=footer.childNodes[5]
  //footer_content.textContent='Designed by Juan Camilo Palacio Castaño'
  footer.innerHTML=`
        <p class="fw-bold">Juan Camilo Palacio Castaño. Website &#169</p>
        <p class="fs-2">Ultima Actualización 2025-12-11.</p>
        <p class="fs-2">Designed by Juan Camilo Palacio Castaño</p>
    `;

  // Function to select a specific table column by index
  function selectTableColumn(table, columnIndex) {
    const rows = table.rows;
    

    for (let i = 0; i < rows.length; i++) {
      const cells = rows[i].cells;
      
      if (cells.length > columnIndex) {
        // Select the cell in the specified column
        const selectedCell = cells[columnIndex];
        console.log(selectedCell)
        // Do something with the selected cell (e.g., change its style)
        if(selectedCell.textContent.charAt(0)=='+'){
            selectedCell.style.color='green';
        }else if(selectedCell.textContent.charAt(0)=='-'){
            selectedCell.style.color='red';
        }
        
      }
    }
  }
  function parsePercentageString(percentageString) {
    // Remove the '+' sign and '%' symbol
    const numericPart = percentageString.replace(/[+%]/g, '');
  
    // Convert the numeric part to a decimal number
    const decimalNumber = parseFloat(numericPart);
  
    // Check if the conversion was successful
    if (!isNaN(decimalNumber)) {
      // Convert the decimal number to a percentage
      const percentageValue = decimalNumber / 100;
      return percentageValue;
    } else {
      // Handle the case where the input is not a valid number
      console.error('Invalid percentage string:', percentageString);
      return null;
    }
  }

  // Usage example: select the second column (index 1)
  const myTable = document.getElementById('table-metrics');
  selectTableColumn(myTable, 2);
  selectTableColumn(myTable, 3);
})

