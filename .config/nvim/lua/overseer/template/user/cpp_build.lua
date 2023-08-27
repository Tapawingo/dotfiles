return {
    name = "g++: Build",
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
                output
            },
            components = { { "on_output_quickfix", open = true }, "default" },
        }
    end,
    desc = "Builds C++ project with g++",
    priority = 100,
    condition = {
        filetype = { "cpp" },
    },
}
