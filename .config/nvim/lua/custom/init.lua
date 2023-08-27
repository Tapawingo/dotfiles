local autocmd = vim.api.nvim_create_autocmd

-- Create a column at 80 characters
vim.opt.colorcolumn = "80";

-- Use smartcase for searching
vim.opt.ignorecase = true;
vim.opt.smartcase = true;

-- Persistent history
vim.opt.undofile = true;

-- Set numbers
vim.wo.number = true
vim.opt.number = true
vim.opt.relativenumber = true

-- Set tab settings
vim.o.tabstop = 4
vim.o.shiftwidth = 4
vim.o.expandtab = true

-- disable netrw
vim.g.loaded_netrw = 1
vim.g.loaded_netrwPlugin = 1

