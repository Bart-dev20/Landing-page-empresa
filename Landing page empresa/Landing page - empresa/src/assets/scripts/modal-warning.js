document.addEventListener("click", (e) => {
    const open_modal_warning = e.target.dataset.action;

    if (!open_modal_warning) return;

    if (open_modal_warning === "open-modal-warning") {

        setTimeout(() => {
            document.querySelector(".modal-warning").style.cssText = "display: flex;"
            document.querySelector(".container-processing").style.cssText = "display: none";
        }, 3000);

        document.querySelector(".container-processing").style.cssText = "display: flex";
    }

    // console.log(open_modal_warning);
});

document.querySelector(".btn-confirm-close").addEventListener("click", () => {
    document.querySelector(".modal-warning").style.cssText = "display: none;"
});