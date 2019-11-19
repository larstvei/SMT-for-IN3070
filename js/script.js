function blurPython() {
    blocksToBlur = document.getElementsByClassName('src-python');
    // Note: Skipping the two first code blocks
    for (var i = 1; i < blocksToBlur.length; i++) {
        const block = blocksToBlur[i]
        block.setAttribute("style", "cursor: pointer;");
        block.classList.toggle("blur");
        block.addEventListener("click", function () {
            block.classList.toggle("blur");
        });
    }
}

document.addEventListener('DOMContentLoaded', function(){
    blurPython();
}, false);
