const container = document.querySelector(".container");

const ROW_ELEMENT_TYPE = "div";
const CELL_ELEMENT_TYPE = "div";

const ROW_CLASS_NAME = "row";
const CELL_CLASS_NAME = "cell";

const ROW_COUNT = 16;
const COLUMN_COUNT = 16;

resetGrid(ROW_COUNT, COLUMN_COUNT);

function resetGrid(rowCount, columnCount) {
    container.replaceChildren();  // remove all existing cells from the grid

    for (let i = 0; i < rowCount; i++) {
        row = document.createElement(ROW_ELEMENT_TYPE);
        row.classList.add(ROW_CLASS_NAME);

        for (let j = 0; j < columnCount; j++) {
            cell = document.createElement(CELL_ELEMENT_TYPE);
            cell.classList.add(CELL_CLASS_NAME);
            row.appendChild(cell);
        }

        container.appendChild(row);
    }
}

container.addEventListener(
    "mouseover",
    e => e.target.classList.add("sketched"),
);
