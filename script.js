// Get Refresh Button

const refreshButton =
    document.getElementById("refreshButton");


// Get AI Button

const runAI =
    document.getElementById("runAI");


// Refresh dashboard

refreshButton.addEventListener(
    "click",
    function () {

        alert(
            "Dashboard refreshed successfully!"
        );

    }
);


// Run AI Detection

runAI.addEventListener(
    "click",
    function () {

        const bustElement =
            document.getElementById("busts");

        let currentBusts =
            Number(bustElement.innerText);

        currentBusts += 1;

        bustElement.innerText =
            currentBusts;

        alert(
            "AI Detection completed!\n\n" +
            "New forecast bust detected."
        );

    }
);