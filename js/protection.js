
document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
});

document.addEventListener("selectstart", function (event) {
    event.preventDefault();
});

document.addEventListener("copy", function (event) {
    event.preventDefault();
});

document.addEventListener("cut", function (event) {
    event.preventDefault();
});

document.addEventListener("dragstart", function (event) {
    event.preventDefault();
});

document.addEventListener("keydown", function (event) {
    const key = event.key.toLowerCase();

    const blockedCtrlKeys = ["c", "s", "u", "p", "a"];
    const blockedCtrlShiftKeys = ["i", "j", "c"];

    if (event.key === "F12") {
        event.preventDefault();
        return false;
    }

    if (event.ctrlKey && blockedCtrlKeys.includes(key)) {
        event.preventDefault();
        return false;
    }

    if (event.ctrlKey && event.shiftKey && blockedCtrlShiftKeys.includes(key)) {
        event.preventDefault();
        return false;
    }

    if (event.metaKey && blockedCtrlKeys.includes(key)) {
        event.preventDefault();
        return false;
    }

    if (event.metaKey && event.altKey && key === "i") {
        event.preventDefault();
        return false;
    }
});


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