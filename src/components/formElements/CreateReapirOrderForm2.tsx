import React, { useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";

// Define the type for the options array
interface OptionType {
  name: string;
  id: number;
}

// TypeScript requires specifying the types of options and state
const options: OptionType[] = [
  { id: 1, name: "Uayan, King James" },
  { id: 2, name: "Manolo, Mc Johnson" },
  { id: 3, name: "Dalauta, Kelvin" },
  // Add more options as needed
];

const MultipleSelectionInput: React.FC = () => {
  // multiSelections will hold an array of selected options (of type OptionType[])
  const [multiSelections, setMultiSelections] = useState<OptionType[]>([]);

  return (
    <>
      <Typeahead
        id="basic-typeahead-multiple"
        labelKey="name" // Match this to the key in the options object
        multiple
        onChange={(selected) => setMultiSelections(selected as OptionType[])} // Cast selected to OptionType[]
        options={options} // Pass options with the defined type
        placeholder="Choose Employee..."
        selected={multiSelections} // Bind selections to the state
      />
    </>
  );
};

export default MultipleSelectionInput;
