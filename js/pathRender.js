(function (root) {
    var EMPTY = root.maze.EMPTY;
    var WALL = root.maze.WALL;
    var PATH = root.maze.PATH;
    var CURRENT = root.maze.CURRENT;

    /**
     * Функция рисует маршрут path
     *
     * @param {[number, number][]} [path] маршрут
     */
    function pathRender(path) {
        "use strict";

        var maze = document.getElementsByClassName("maze")[0].childNodes,
            i = 0;

        /**
         * Функция рекурсивной отрисовки маршрута по клеткам path
         */
        function walk() {
            setTimeout(function () {
                maze[path[i][1]].childNodes[path[i][0]].classList.add("maze__cell_path");
                i++;
                if (i < path.length - 1) {
                    walk();
                } else {
                    maze[path[path.length - 1][1]].childNodes[path[path.length - 1][0]].classList.add("maze__cell_current");
                }
            }, 500);
        }

        if (path && path.length) {
            walk();
        }
    }

    root.maze.pathRender = pathRender;
})(this);
