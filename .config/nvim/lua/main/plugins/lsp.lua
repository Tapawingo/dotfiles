local lsp = require('lsp-zero').preset({})

lsp.on_attach(function(client, bufnr)
  lsp.default_keymaps({buffer = bufnr})
end)

lsp.setup()

cmd [[
let g:UltiSnipsJumpForwardTrigger='<Tab>'
let g:UltiSnipsJumpBackwardTrigger='<S-Tab>'
]]

-- Set icons
local kind_icons = {
  Class = "ﴯ",
  Color = "",
  Constant = "",
  Constructor = "",
  Enum = "",
  EnumMember = "",
  Event = "",
  Field = "",
  File = "",
  Folder = "",
  Function = "",
  Interface = "",
  Keyword = "",
  Method = "",
  Module = "",
  Operator = "",
  Property = "ﰠ",
  Reference = "",
  Snippet = "",
  Struct = "",
  Text = "",
  TypeParameter = "",
  Unit = "",
  Value = "",
  Variable = "",
}

local cmp_autopairs = require('nvim-autopairs.completion.cmp')
local cmp = require('cmp')
cmp.setup({
    snippet = {
        expand = function(args)
            vim.fn["UltiSnips#Anon"](args.body)
        end,
    },
    formatting = {
        format = function(entry, vim_item)
            -- Kind icons
            vim_item.kind = string.format("%s %s", kind_icons[vim_item.kind], vim_item.kind) --Concatonate the icons with name of the item-kind
            vim_item.menu = ({
                nvim_lsp = "[LSP]",
                spell = "[Spellings]",
                zsh = "[Zsh]",
                buffer = "[Buffer]",
                ultisnips = "[Snip]",
                treesitter = "[Treesitter]",
                calc = "[Calculator]",
                nvim_lua = "[Lua]",
                path = "[Path]",
                nvim_lsp_signature_help = "[Signature]",
                cmdline = "[Vim Command]"
            })[entry.source.name]
            return vim_item
        end,
    },
    mapping = {
        ['<C-n>'] = cmp.mapping(cmp.mapping.select_next_item(), { 'i', 'c' }),
        ['<C-p>'] = cmp.mapping(cmp.mapping.select_prev_item(), { 'i', 'c' }),
        ['<C-M-k>'] = cmp.mapping(cmp.mapping.scroll_docs(-4), { 'i', 'c' }),
        ['<C-M-j>'] = cmp.mapping(cmp.mapping.scroll_docs(4), { 'i', 'c' }),
        ['<C-Space>'] = cmp.mapping(cmp.mapping.complete(), { 'i', 'c' }),
        ['<C-y>'] = cmp.config.disable,
        ['<C-e>'] = cmp.mapping({
            i = cmp.mapping.abort(),
            c = cmp.mapping.close(),
        }),
        ['<CR>'] = cmp.mapping.confirm({ select = false }),
    },
    completion = {
        keyword_length = 1,
    },
    matching = {
        disallow_fuzzy_matching = true,
    },
    sources = cmp.config.sources({
        { name = 'nvim_lsp' },
        -- For ultisnips users
        { name = 'ultisnips' },
    }, {
        { name = 'buffer' },
    }, {
        { name = 'nvim_lsp_signature_help' },
    }, {
        { name = 'path' },
    })
})

cmp.event:on(
  'confirm_done',
  cmp_autopairs.on_confirm_done()
)
