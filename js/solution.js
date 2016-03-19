(function (root) {
    var EMPTY = root.maze.EMPTY;
    var WALL = root.maze.WALL;
    var PATH = root.maze.PATH;
    var CURRENT = root.maze.CURRENT;

    /**
     * Функция находит путь к выходу и возвращает найденный маршрут
     *
     * @param {number[][]} maze карта лабиринта представленная двумерной матрицей чисел
     * @param {number} x координата точки старта по оси X
     * @param {number} y координата точки старта по оси Y
     * @returns {[number, number][]} маршрут к выходу представленный списоком пар координат
     */
    function solution(maze, x, y) {
        var cell = {
                x: y,
                y: x,
                cameFrom: null
            },
            path = [
                [
                    cell.y,
                    cell.x
                ]
            ];

        /**
         * Функция делает один шаг по лабиринту
         *
         * @param {string} axis ось передвижения
         * @param {boolean} increment переключатель направления движения по оси axis
         * @param {string} cameFrom указатель на клетку из которой пришли
         */
        function step(axis, increment, cameFrom) {
            if (increment) {
                cell[axis]++;
            } else {
                cell[axis]--;
            }
            cell.cameFrom = cameFrom;
            path.push([cell.y, cell.x]);
        }

        while (cell.x < maze.length - 1) {
            switch (cell.cameFrom) {
            case "N":
                if (maze[cell.x][cell.y + 1] === 0) {
                    step("y", true, "E");
                } else if (maze[cell.x - 1][cell.y] === 0) {
                    step("x", false, "N");
                } else if (maze[cell.x][cell.y - 1] === 0) {
                    step("y", false, "W");
                } else if (maze[cell.x + 1][cell.y] === 0) {
                    step("x", true, "S");
                }
                break;

            case "E":
                if (maze[cell.x + 1][cell.y] === 0) {
                    step("x", true, "S");
                } else if (maze[cell.x][cell.y + 1] === 0) {
                    step("y", true, "E");
                } else if (maze[cell.x - 1][cell.y] === 0) {
                    step("x", false, "N");
                } else {
                    step("y", false, "W");
                }
                break;

            case "S":
                if (maze[cell.x][cell.y - 1] === 0) {
                    step("y", false, "W");
                } else if (maze[cell.x + 1][cell.y] === 0) {
                    step("x", true, "S");
                } else if (maze[cell.x][cell.y + 1] === 0) {
                    step("y", true, "E");
                } else if (maze[cell.x - 1][cell.y] === 0) {
                    step("x", false, "N");
                }
                break;

            case "W":
                if (maze[cell.x - 1][cell.y] === 0) {
                    step("x", false, "N");
                } else if (maze[cell.x][cell.y - 1] === 0) {
                    step("y", false, "W");
                } else if (maze[cell.x + 1][cell.y] === 0) {
                    step("x", true, "S");
                } else if (maze[cell.x][cell.y + 1] === 0) {
                    step("y", true, "E");
                }
                break;

            case null:
                if (maze[cell.x + 1][cell.y] === 0) {
                    step("x", true, "S");
                } else if (maze[cell.x][cell.y + 1] === 0) {
                    step("y", true, "E");
                } else if (maze[cell.x - 1][cell.y] === 0) {
                    step("x", false, "N");
                } else {
                    step("y", false, "W");
                }
                break;

            default:
                console.log(cell.cameFrom + " is an unknown value of cell.cameFrom");
            }
        }

        return path;
    }

    root.maze.solution = solution;
})(this);
