import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page");
  const handleChange = (e) => {
    if (page) searchParams.set("page", 1);
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  };

  return <Select options={options} onChange={handleChange} type="white" />;
}

export default SortBy;
