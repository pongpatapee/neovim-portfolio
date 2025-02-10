"use client";
import { useState } from "react";
import data from "@/app/components/SideNavBar/data";

export type TreeNodeData = {
  name: string;
  link?: string;
  children?: TreeNodeData[];
};

type TreeNodeProps = {
  node: TreeNodeData;
  level?: number;
};

const TreeNode = ({ node, level = 0 }: TreeNodeProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const hasChildren = node.children && node.children.length > 0;

  return (
    <div>
      <div
        className="flex items-center gap-1 hover:bg-gray-700/50 py-0.5 cursor-pointer"
        style={{ paddingLeft: `${level * 16}px` }}
        onClick={() => hasChildren && setIsOpen(!isOpen)}
      >
        {hasChildren ? (
          <span className="w-4 h-4 flex items-center justify-center">
            {isOpen ? <span>{" "}</span> : <span>{" "}</span>}
          </span>
        ) : (
          <span className="w-4" />
        )}

        {!hasChildren ? <span>File</span> : null}

        <span className="ml-2 text-sm text-gray-300">{node.name}</span>
      </div>

      {/* Explicit node.children check because typescript cannot infer from hasChildren */}
      {isOpen && node.children && node.children.length > 0 && (
        <div>
          {node.children.map((child: TreeNodeData, index: number) => (
            <TreeNode
              key={`${child.name}-${index}`}
              node={child}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};
const SideNavBar = () => {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg w-64 select-none">
      <div className="text-[#98C379] text-sm font-mono mb-2">File Explorer</div>
      <TreeNode node={data} />
    </div>
  );
};

export default SideNavBar;
