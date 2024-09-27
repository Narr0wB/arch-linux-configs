local base = require("plugins.configs.lspconfig")
local on_attach = base.on_attach
local capabilities = base.capabilities
local utils = require("lspconfig/util")
local lspconfig = require("lspconfig")

local servers = {
  {
    "tsserver",
  },
  {
    "clangd",
    {
      on_attach = function(client, bufnr)
        client.server_capabilities.signatureHelpProvider = false
        on_attach(client, bufnr)
      end,
    }
  }
}

lspconfig.glsl_analyzer.setup({})

lspconfig.rust_analyzer.setup({
  on_attach = on_attach,
  capabilities = capabilities,
  filetypes = {"rust"},
  root_dir = utils.root_pattern("Cargo.toml"),
  settings = {
    ["rust-analyzer"] = {
      cargo = {
        allFeatures = true,
      }
    }
  }
})

for _, v in pairs(servers) do
  local name, config = unpack(v)

  vim.validate {
    name = { name, "string", false },
    config = { config, "table", true },
  }

  lspconfig[name].setup(config or {})
end
