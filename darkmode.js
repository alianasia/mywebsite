document.addEventListener("DOMContentLoaded", function () {
    const showDarkModeBtn = document.getElementById("showDarkModeBtn");
    const darkModeToggle = document.getElementById("darkModeToggle");

    // Dark Mode tugmachasini chiqarish
    showDarkModeBtn.addEventListener("click", function () {
        darkModeToggle.style.display = "block"; // Tugmachani ko‘rsatish
    });

    // Dark Mode holatini tekshirish va tiklash
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
    }

    // Dark Mode tugmachasini bosganda yoqish/o‘chirish
    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        // Holatni saqlash
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });
});