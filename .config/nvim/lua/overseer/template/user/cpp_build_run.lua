return {
    name = "g++: Build & Run",
    builder = function()
        -- Full path to current file (see :help expand())
        local file = vim.fn.expand("%:p")
        local output = vim.fn.expand("%:p:r")
        return {
            cmd = {
                "g++"
            },
            args = {
                file,
                "-o",
                output,
                "&&",
                output
            },
            components = {
                { "run_after", task_names = { "shell", cmd = output } },
                { "on_output_quickfix", open = true },
                "default"
            },
        }
    end,
    desc = "Builds C++ project with g++ and runs it",
    priority = 99,
    condition = {
        filetype = { "cpp" },
    },
}
