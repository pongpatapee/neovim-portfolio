const data = {
  name: "dotfiles/.config/portfolio",
  children: [
    {
      name: "ftplugin",
      children: [
        {
          name: "lua",
          children: [
            {
              name: "whifty",
              children: [
                {
                  name: "config",
                  children: [
                    { name: "autocmds.lua" },
                    { name: "keymaps.lua" },
                    { name: "lazy.lua" },
                    { name: "options.lua" },
                  ],
                },
                {
                  name: "plugins",
                  children: [
                    { name: "autotag.lua" },
                    { name: "codeium.lua" },
                    { name: "lazydev.lua" },
                    { name: "mini-ai.lua" },
                    { name: "mini-comment.lua" },
                    { name: "mini-pair.lua" },
                    { name: "surround.lua" },
                    { name: "ts-comments.lua" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    { name: "init.lua" },
    { name: "lazy-lock.json" },
    { name: "stylua.toml" },
  ],
};

export default data;
