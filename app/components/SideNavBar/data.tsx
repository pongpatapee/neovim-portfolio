import { TreeNodeData } from ".";

const data: TreeNodeData = {
  name: "~/dotfiles/.config/portfolio",
  open: true,
  path: "/",
  children: [
    {
      name: "pongpatapee",
      open: true,
      children: [
        {
          name: "experience",
          open: true,
          children: [
            {
              name: "experience.md",
              open: true,
              path: "/experience",
            },
          ],
        },
        {
          name: "projects",
          open: true,
          children: [
            {
              name: "projects.md",
              open: true,
              path: "/projects",
            },
          ],
        },
        {
          name: "dev_tools",
          open: true,
          children: [
            {
              name: "dev_tools.md",
              open: true,
              path: "/devtools",
            },
          ],
        },
        {
          name: "blogs",
          open: true,
          children: [
            {
              name: "blogs.md",
              open: true,
              path: "/blogs",
            },
          ],
        },
      ],
    },
    {
      name: "README.md",
      open: true,
      path: "/",
    },
  ],
};

export default data;
