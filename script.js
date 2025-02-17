//your code here
let draggedElement = null;

document.querySelectorAll('.image').forEach(box => {
    box.addEventListener('dragstart', function (e) {
        draggedElement = this;
        this.classList.add("dragging");
    });

    box.addEventListener('dragend', function (e) {
        this.classList.remove("dragging");
    });

    box.addEventListener('dragover', function (e) {
        e.preventDefault();
    });

    box.addEventListener('drop', function () {
        if (draggedElement !== this) {
            let tempBg = this.style.backgroundImage;
            this.style.backgroundImage = draggedElement.style.backgroundImage;
            draggedElement.style.backgroundImage = tempBg;
        }
    });
});
