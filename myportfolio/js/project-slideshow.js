let project = document.getElementsByClassName("project");
let slideIndex = 1;

showProject(slideIndex);

function showProject(num) {
  
  if (num > project.length) {
    slideIndex = 1;
  }
  
  if (num < 1) {
    slideIndex = project.length;
  }

  for (let i = 0; i < project.length; i++) {
    project[i].style.display = "none";
  }
  project[slideIndex - 1].style.display = "flex";
}

function navigateProject(num) {
  showProject((slideIndex += num));
}

// Show the Certificates Modal
function showCertificates() {
  let modal = document.getElementById("certificates");
  modal.style.display = "flex"; // Ensure it appears
  setTimeout(() => { modal.style.opacity = "1"; }, 10); // Add delay for smooth transition
}

// Hide the Certificates Modal
function hideCertificates() {
  let modal = document.getElementById("certificates");
  modal.style.opacity = "0"; // Fade out
  setTimeout(() => {
      modal.style.display = "none"; // Hide after transition
  }, 300);
}

// Filter Certificates Based on Category
function filterCertificates(type) {
  let certificates = document.querySelectorAll(".certificate");

  // Hide all certificates first
  certificates.forEach(cert => {
      cert.style.display = "none";
  });

  // Show only the selected category
  certificates.forEach(cert => {
      if (type === "all" || cert.classList.contains(type)) {
          cert.style.display = "block";
      }
  });
}

//certificates enlargement
/*function toggleEnlarge(img) {
  const overlay = document.getElementById("overlay");
  img.classList.toggle("enlarged"); // Toggle enlargement

  if (img.classList.contains("enlarged")) {
    overlay.classList.add("active"); // Show overlay
  } else {
    overlay.classList.remove("active"); // Hide overlay
  }
}

// Close enlarged image when clicking outside
document.getElementById("overlay").addEventListener("click", function () {
  const enlargedImg = document.querySelector(".certificate-img.enlarged");
  if (enlargedImg) {
    enlargedImg.classList.remove("enlarged");
    this.classList.remove("active");
  }
});
*/
function openModal(imgSrc) {
  let modal = document.getElementById("imageModal");
  let modalImg = document.getElementById("modalImage");

  modal.style.display = "flex"; // Show modal
  modalImg.src = imgSrc; // Set image source

  // Close modal when clicking on the image itself
  modalImg.onclick = function () {
      closeModal();
  };
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none"; // Hide modal
}

// Close modal when clicking outside the image
document.getElementById("imageModal").addEventListener("click", function (event) {
  if (event.target === this) {
      closeModal();
  }
});


