const body = document.body;
const themeColor = document.getElementById("themeColor");
const modeToggle = document.getElementById("modeToggle");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const backTop = document.getElementById("backTop");

themeColor.addEventListener("change", function () {
    body.dataset.theme = this.value;
});

modeToggle.addEventListener("click", function () {
    body.classList.toggle("light-mode");

    modeToggle.textContent = body.classList.contains("light-mode")
        ? "☾ Dark Mode"
        : "☀ Light Mode";
});

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("open");

    menuToggle.textContent = navLinks.classList.contains("open")
        ? "✕"
        : "☰";
});

document.querySelectorAll(".nav-link").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuToggle.textContent = "☰";

        document.querySelectorAll(".nav-link").forEach(function (item) {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });
});

document.getElementById("welcomeBtn").addEventListener("click", function () {
    alert("Hello! Thank you for visiting my portfolio. Feel free to contact me about my projects and learning journey!");
});

const readMoreBtn = document.getElementById("readMoreBtn");
const extraInfo = document.getElementById("extraInfo");

readMoreBtn.addEventListener("click", function () {
    const isHidden = extraInfo.hidden;

    extraInfo.hidden = !isHidden;
    readMoreBtn.textContent = isHidden ? "Read Less ↑" : "Read More ↗";
});

function updateClock() {
    const now = new Date();

    document.getElementById("currentTime").textContent =
        now.toLocaleTimeString("en-PH", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true
        });
}

updateClock();
setInterval(updateClock, 1000);

document.getElementById("currentYear").textContent = new Date().getFullYear();

window.addEventListener("scroll", function () {
    backTop.classList.toggle("show", window.scrollY > 350);

    const sections = document.querySelectorAll("main section[id]");
    let currentSection = "home";

    sections.forEach(function (section) {
        if (window.scrollY >= section.offsetTop - 160) {
            currentSection = section.id;
        }
    });

    document.querySelectorAll(".nav-link").forEach(function (link) {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + currentSection
        );
    });
});

backTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

document.getElementById("copyEmailBtn").addEventListener("click", async function () {
    const email = "zaijanmarcusepodrido@gmail.com";

    try {
        await navigator.clipboard.writeText(email);
        this.textContent = "Copied!";
    } catch (error) {
        const tempInput = document.createElement("textarea");
        tempInput.value = email;
        tempInput.style.position = "fixed";
        tempInput.style.opacity = "0";

        document.body.appendChild(tempInput);
        tempInput.select();

        const copied = document.execCommand("copy");
        tempInput.remove();

        this.textContent = copied ? "Copied!" : "Copy Failed";
    }

    setTimeout(() => {
        this.textContent = "Copy";
    }, 2000);
});