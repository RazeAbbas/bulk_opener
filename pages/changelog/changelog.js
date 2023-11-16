/**
 * changelog.js
 *
 * Code for the index.html page.
 */

/* Event Listeners */

document.getElementById("view-source").addEventListener("click", () => {
    openExternalURL("https://euan.link/buo-github");
});

document.getElementById("closeModal").addEventListener("click", () => {
    if (checkHostType() === "firefox") {
        alert("Unable to close window due to Firefox security policy. Please close this window manually.");
    // window.close();
    } else if (checkHostType() === "chrome") {
        window.close();
    } else if (checkHostType() === "electron") {
        goHome();
    }
});

document.getElementById("openGithubChangelog").addEventListener("click", () => {
    openExternalURL("https://euan.link/buo-github-changelog");
});

if (document.getElementById("goHome")) document.getElementById("goHome").addEventListener("click", goHome);

/* End Of Event Listeners */

(() => {
    document.getElementById("changelog-footer").innerText = getFooterText();
})();

function goHome() {
    window.location.replace("../../popup.html");
}
