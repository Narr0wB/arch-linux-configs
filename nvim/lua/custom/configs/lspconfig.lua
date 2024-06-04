local base = require("plugins.configs.lspconfig")
local on_attach = base.on_attach 
local capabilites = base.capabilities

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

for _, v in pairs(servers) do
  local name, config = unpack(v)

  vim.validate {
    name = { name, "string", false },
    config = { config, "table", true },
  }

  lspconfig[name].setup(config or {})
end
