const sketchBoard = document.querySelector(".sketch-board");
const resetButton = document.querySelector("button.reset");

const ROW_ELEMENT_TYPE = "div";
const CELL_ELEMENT_TYPE = "div";

const ROW_CLASS_NAME = "row";
const CELL_CLASS_NAME = "cell";

const DEFAULT_ROW_COUNT = 16;
const MAX_ROW_COUNT = 100;
const DEFAULT_COLUMN_COUNT = 16;
const MAX_COLUMN_COUNT = 100;

resetGrid(DEFAULT_ROW_COUNT, DEFAULT_COLUMN_COUNT);

function resetGrid(rowCount, columnCount) {
    sketchBoard.replaceChildren();  // remove all existing cells from the grid

    for (let i = 0; i < rowCount; i++) {
        row = document.createElement(ROW_ELEMENT_TYPE);
        row.classList.add(ROW_CLASS_NAME);

        for (let j = 0; j < columnCount; j++) {
            cell = document.createElement(CELL_ELEMENT_TYPE);
            cell.classList.add(CELL_CLASS_NAME);
            row.appendChild(cell);
        }

        sketchBoard.appendChild(row);
    }
}

sketchBoard.addEventListener(
    "mouseover",
    e => e.target.classList.add("sketched"),
);

resetButton.addEventListener(
    "click",
    () => {
        const rowCount = Number.parseInt(prompt(`How many rows? (Max ${MAX_ROW_COUNT})`));
        const columnCount = Number.parseInt(prompt(`How many columns? (Max ${MAX_COLUMN_COUNT})`));

        resetGrid(
            Math.min(rowCount, MAX_ROW_COUNT),
            Math.min(columnCount, MAX_COLUMN_COUNT),
        );
    }
)
