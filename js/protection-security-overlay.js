
const overlay = document.getElementById("securityOverlay");

function showSecurityOverlay() {
    document.body.classList.add("content-hidden");
    overlay.classList.add("active");
}

function hideSecurityOverlay() {
    document.body.classList.remove("content-hidden");
    overlay.classList.remove("active");
}

window.addEventListener("blur", function () {
    showSecurityOverlay();
});

window.addEventListener("focus", function () {
    hideSecurityOverlay();
});

document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
        showSecurityOverlay();
    } else {
        hideSecurityOverlay();
    }
});


document.addEventListener("keyup", async function (event) {
    if (event.key === "PrintScreen") {
        showSecurityOverlay();

        try {
            await navigator.clipboard.writeText("");
        } catch (error) {
            console.warn("No se pudo limpiar el portapapeles.");
        }
    }
});