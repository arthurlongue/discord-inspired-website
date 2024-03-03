import React, { useState } from "react";
import { BsHash } from "react-icons/bs";
import { FaChevronDown, FaChevronRight, FaPlus } from "react-icons/fa";

const topics: string[] = ["tailwind-css", "react"];
const questions: string[] = ["jit-compilation", "purge-files", "dark-mode"];
const random: string[] = ["variants", "plugins"];

const ChannelBar: React.FC = () => {
  return (
    <div className="channel-bar flex w-56 flex-col items-center justify-start bg-gray-800 shadow-lg">
      <ChannelBlock />
      <div className="channel-container m-0 flex flex-col items-center justify-start px-4">
        <Dropdown header="Topics" selections={topics} />
        <Dropdown header="Questions" selections={questions} />
        <Dropdown header="Random" selections={random} />
      </div>
    </div>
  );
};

interface DropdownProps {
  header: string;
  selections: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ header, selections }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="dropdown m-0 w-full pb-2 transition duration-300 ease-in-out">
      <div
        onClick={() => setExpanded(!expanded)}
        className="dropdown-header mx-0 flex cursor-pointer flex-row items-center justify-evenly text-gray-500"
      >
        <ChevronIcon expanded={expanded} />
        <h5
          className={
            expanded
              ? "dropdown-header-text-selected text-lg font-bold text-blue-500 text-opacity-90"
              : "dropdown-header-text cursor-default text-lg font-semibold text-gray-500 text-opacity-90"
          }
        >
          {header}
        </h5>
        <FaPlus
          size="12"
          className="text-accent my-auto ml-auto text-opacity-80"
        />
      </div>
      {expanded &&
        selections &&
        selections.map((selection, key) => (
          <TopicSelection selection={selection} key={key} />
        ))}
    </div>
  );
};

interface ChevronIconProps {
  expanded: boolean;
}

const ChevronIcon: React.FC<ChevronIconProps> = ({ expanded }) => {
  const chevClass = "text-accent text-opacity-80 my-auto mr-1";
  return expanded ? (
    <FaChevronDown size="14" className={chevClass} />
  ) : (
    <FaChevronRight size="14" className={chevClass} />
  );
};

interface TopicSelectionProps {
  selection: string;
}

const TopicSelection: React.FC<TopicSelectionProps> = ({ selection }) => (
  <div className="dropdown-selection ml-2 mr-auto mt-1 flex cursor-pointer flex-row items-center justify-evenly transition duration-300 ease-in-out">
    <BsHash size="24" className="text-gray-400" />
    <h5 className="dropdown-selection-text mr-auto cursor-pointer font-semibold tracking-wide text-gray-500 transition duration-300 ease-in-out hover:text-gray-500">
      {selection}
    </h5>
  </div>
);

const ChannelBlock: React.FC = () => (
  <div className="channel-block m-0 flex h-16 items-center justify-center p-0">
    <h5 className="channel-block-text my-auto ml-4 mr-auto align-middle text-lg font-bold tracking-wider text-gray-400">
      Channels
    </h5>
  </div>
);

export default ChannelBar;
