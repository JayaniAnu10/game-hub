import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <div>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          width="1100px"
          borderRadius={20}
          variant="filled"
          placeholder="Search Games..."
        />
      </InputGroup>
    </div>
  );
};

export default SearchInput;
