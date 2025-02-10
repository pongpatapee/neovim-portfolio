import { TreeNodeData } from ".";

const data: TreeNodeData = {
  name: "~/dotfiles/.config/portfolio",
  link: "/",
  children: [
    {
      name: "pongpatapee",
      children: [
        {
          name: "experience",
          children: [
            {
              name: "README.md",
              link: "/experience",
            },
          ],
        },
        {
          name: "projects",
          children: [
            {
              name: "README.md",
              link: "/projects",
            },
          ],
        },
        {
          name: "dev_tools",
          children: [
            {
              name: "README.md",
              link: "/devtools",
            },
          ],
        },
        {
          name: "blogs",
          children: [
            {
              name: "README.md",
              link: "/blogs",
            },
          ],
        },
      ],
    },
    {
      name: "README.md",
      link: "/",
    },
  ],
};

export default data;
