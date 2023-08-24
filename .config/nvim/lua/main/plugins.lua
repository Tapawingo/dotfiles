local lazypath = vim.fn.stdpath('data') .. '/lazy/lazy.nvim'
if not vim.loop.fs_stat(lazypath) then
  print('Installing lazy.nvim....')
  vim.fn.system({
    'git',
    'clone',
    '--filter=blob:none',
    'https://github.com/folke/lazy.nvim.git',
    '--branch=stable', -- latest stable release
    lazypath,
  })
  print('Done.')
end

opt.rtp:prepend(lazypath)

-- https://github.com/nvim-tree/nvim-tree.lua


-- Install Plugins
require('lazy').setup({
    { "sainnhe/gruvbox-material", priority = 1000 }, -- ColorScheme
    { "nvim-lualine/lualine.nvim" }, -- statusline
    { "NvChad/nvim-colorizer.lua" }, -- Colorize
    { "lukas-reineke/indent-blankline.nvim" }, -- Indentation guides
    { "nvim-tree/nvim-tree.lua" }, -- file tree
    { "nvim-tree/nvim-web-devicons" }, -- file tree icon
    { "ErichDonGubler/lsp_lines.nvim" }, -- LSP Diagnostics lines
    { "windwp/nvim-autopairs" }, -- Autopairs

    -- LSP
    {
        'VonHeikemen/lsp-zero.nvim',
        branch = 'v2.x',
        dependencies = {
            -- LSP Support
            {'neovim/nvim-lspconfig'},
            {'williamboman/mason.nvim'},
            {'williamboman/mason-lspconfig.nvim'},

            -- Autocompletion
            {'hrsh7th/nvim-cmp'},
            {'hrsh7th/cmp-path'},
            {'tamago324/cmp-zsh'},
            {'hrsh7th/cmp-nvim-lsp'},
            {'hrsh7th/cmp-nvim-lsp-signature-help'},
            {'SirVer/ultisnips'},
            {'quangnguyen30192/cmp-nvim-ultisnips'},
        }
    },

    -- Which key
    {
        "folke/which-key.nvim",
        event = "VeryLazy",
        init = function()
            o.timeout = true
            o.timeoutlen = 300
        end,
        opts = {}
    },
    
    -- Telescope fuzzy finder
    {
        'nvim-telescope/telescope.nvim', tag = '0.1.2',
        dependencies = { 'nvim-lua/plenary.nvim' }
    }
})
require "main.plugins.misc"
require "main.plugins.lualine"
require "main.plugins.tree"
require "main.plugins.lsp"
