opt = vim.opt
o = vim.o
g = vim.g
wo = vim.wo
cmd = vim.cmd

require("main.plugins")
require("main.mappings")

-- Set Syntax Highlighting
opt.termguicolors = true
cmd([[syntax on]])

-- Set theme
o.background = "dark"
g.gruvbox_material_transparent_background = true
cmd([[colorscheme gruvbox-material]])

-- Set nowrap
o.wrap = false

-- search
opt.ignorecase = true
opt.smartcase = true

-- Set persistent undo and redo
opt.undofile = true

-- Line padding when scrolling
opt.scrolloff = 1

-- Enable global clipboard
opt.clipboard:append { 'unnamed', 'unnamedplus' }

-- Set numbers
wo.number = true
opt.number = true
opt.relativenumber = true

-- Set tab settings
o.tabstop = 4
o.shiftwidth = 4
o.expandtab = true

-- disable netrw
vim.g.loaded_netrw = 1
vim.g.loaded_netrwPlugin = 1

-- Create custom command to elevate when saving
cmd([[cmap w!! %!sudo tee > /dev/null %]])
