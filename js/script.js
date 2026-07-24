/*==========================================
 WEBSITE PROFIL DESA
 File : script.js
==========================================*/


/*==========================================
MENU MOBILE
==========================================*/

const menuButton = document.getElementById("menu-button");
const menu = document.querySelector(".menu");

if(menuButton){

    menuButton.addEventListener("click", function(){

        menu.classList.toggle("active");

    });

}


/*==========================================
NAVBAR AKTIF
==========================================*/

const currentPage = window.location.pathname.split("/").pop();

const menuLink = document.querySelectorAll(".menu a");

menuLink.forEach(link=>{

    if(link.getAttribute("href")===currentPage){

        link.classList.add("active");

    }

});


/*==========================================
BACK TO TOP
==========================================*/

const backButton = document.createElement("button");

backButton.innerHTML="↑";

backButton.id="backToTop";

document.body.appendChild(backButton);

backButton.style.position="fixed";

backButton.style.bottom="30px";

backButton.style.right="30px";

backButton.style.width="50px";

backButton.style.height="50px";

backButton.style.borderRadius="50%";

backButton.style.border="none";

backButton.style.background="#2E7D32";

backButton.style.color="white";

backButton.style.cursor="pointer";

backButton.style.display="none";

backButton.style.fontSize="20px";

window.addEventListener("scroll",function(){

    if(window.scrollY>300){

        backButton.style.display="block";

    }

    else{

        backButton.style.display="none";

    }

});

backButton.addEventListener("click",function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*==========================================
VALIDASI FORM KONTAK
==========================================*/

const form = document.getElementById("contactForm");

if(form){

    form.addEventListener("submit", function(e){

        e.preventDefault();

        const nama = document.getElementById("nama").value.trim();

        const email = document.getElementById("email").value.trim();

        const telepon = document.getElementById("telepon").value.trim();

        const pesan = document.getElementById("pesan").value.trim();

        if(nama.length < 3){

            alert("Nama minimal 3 karakter.");

            return;

        }

        if(pesan.length < 10){

            alert("Pesan minimal 10 karakter.");

            return;

        }

        alert("Terima kasih! Pesan Anda berhasil dikirim.");

        form.reset();

        if(counter){

            counter.textContent = "0 / 300 karakter";

        }

    });

}


/*==========================================
PENGHITUNG KARAKTER PESAN
==========================================*/

const textarea = document.getElementById("pesan");

if(textarea){

    const counter = document.createElement("small");

    counter.id = "counter";

    counter.style.display = "block";

    counter.style.marginTop = "5px";

    counter.style.color = "#666";

    counter.textContent = "0 / 300 karakter";

    textarea.parentNode.insertBefore(counter, textarea.nextSibling);

    textarea.addEventListener("input", function(){

        counter.textContent =

        textarea.value.length + " / 300 karakter";

    });

}


/*==========================================
SHOW / HIDE INFORMASI
==========================================*/

const informasi = document.querySelector(".informasi");

if(informasi){

    const tombol = document.createElement("button");

    tombol.textContent = "Sembunyikan Informasi";

    tombol.style.marginBottom = "20px";

    tombol.style.background = "#2E7D32";

    tombol.style.color = "#fff";

    tombol.style.border = "none";

    tombol.style.padding = "10px 20px";

    tombol.style.borderRadius = "8px";

    tombol.style.cursor = "pointer";

    informasi.parentNode.insertBefore(tombol, informasi);

    tombol.addEventListener("click", function(){

        if(informasi.style.display === "none"){

            informasi.style.display = "block";

            tombol.textContent = "Sembunyikan Informasi";

        }

        else{

            informasi.style.display = "none";

            tombol.textContent = "Tampilkan Informasi";

        }

    });

}

const darkModeButton = document.createElement("button");

darkModeButton.id = "darkMode";
darkModeButton.innerHTML = "🌙";
darkModeButton.title = "Dark Mode";

document.body.appendChild(darkModeButton);

// Posisi tombol (kanan atas)
darkModeButton.style.position = "fixed";
darkModeButton.style.top = "90px";
darkModeButton.style.right = "20px";
darkModeButton.style.width = "50px";
darkModeButton.style.height = "50px";
darkModeButton.style.border = "none";
darkModeButton.style.borderRadius = "50%";
darkModeButton.style.background = "#2E7D32";
darkModeButton.style.color = "#fff";
darkModeButton.style.fontSize = "20px";
darkModeButton.style.cursor = "pointer";
darkModeButton.style.boxShadow = "0 4px 10px rgba(0,0,0,.3)";
darkModeButton.style.zIndex = "9999";

// Jika sebelumnya pengguna pernah memilih Dark Mode
if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark");
    darkModeButton.innerHTML = "☀️";

}

// Event klik tombol
darkModeButton.addEventListener("click", function(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        darkModeButton.innerHTML = "☀️";
        localStorage.setItem("theme","dark");

    }else{

        darkModeButton.innerHTML = "🌙";
        localStorage.setItem("theme","light");

    }

});



const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function(){

    if(window.scrollY > 50){

        navbar.style.background = "#ffffff";

        navbar.style.boxShadow = "0 2px 15px rgba(0,0,0,.2)";

        navbar.style.padding = "10px 0";

    }else{

        navbar.style.background = "transparent";

        navbar.style.boxShadow = "none";

        navbar.style.padding = "15px 0";

    }

});


/*==========================================
ANIMASI MUNCUL SAAT SCROLL
==========================================*/

const cards = document.querySelectorAll(".card,.gallery-card,.berita-card");

function tampilScroll(){

    cards.forEach(function(card){

        const posisi = card.getBoundingClientRect().top;

        const tinggi = window.innerHeight;

        if(posisi < tinggi - 100){

            card.style.opacity = "1";

            card.style.transform = "translateY(0)";

        }

    });

}

cards.forEach(function(card){

    card.style.opacity = "0";

    card.style.transform = "translateY(40px)";

    card.style.transition = "0.6s";

});

window.addEventListener("scroll", tampilScroll);

tampilScroll();


/*==========================================
POPUP GALERI
==========================================*/

const gambar = document.querySelectorAll(".gallery-card img");

gambar.forEach(function(img){

    img.style.cursor = "pointer";

    img.addEventListener("click", function(){

        const popup = document.createElement("div");

        popup.style.position = "fixed";
        popup.style.left = "0";
        popup.style.top = "0";
        popup.style.width = "100%";
        popup.style.height = "100%";
        popup.style.background = "rgba(0,0,0,.8)";
        popup.style.display = "flex";
        popup.style.justifyContent = "center";
        popup.style.alignItems = "center";
        popup.style.zIndex = "9999";

        const foto = document.createElement("img");

        foto.src = img.src;

        foto.style.maxWidth = "90%";

        foto.style.maxHeight = "90%";

        foto.style.borderRadius = "10px";

        popup.appendChild(foto);

        document.body.appendChild(popup);

        popup.addEventListener("click", function(){

            popup.remove();

        });

    });

});


/*==========================================
TAHUN FOOTER OTOMATIS
==========================================*/

const footer = document.querySelector("footer");

if(footer){

    const tahun = new Date().getFullYear();

    footer.innerHTML = `

    <p>© ${tahun} Pemerintah Desa Harmoni</p>

    <p>Jl. Raya Desa Harmoni No.1</p>

    <p>Email : desaharmoni@email.com</p>

    `;

}