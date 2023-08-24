local keymap = vim.keymap

g.mapleader = " " -- Make sure to set `mapleader` before lazy so your mappings are correct

-- Telescope mappings
local builtin = require('telescope.builtin')
keymap.set('n', '<leader>ff', builtin.find_files, {})
keymap.set('n', '<leader>fg', builtin.live_grep, {})
keymap.set('n', '<leader>fb', builtin.buffers, {})
keymap.set('n', '<leader>fh', builtin.help_tags, {})
