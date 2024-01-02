import { useSearchParams } from "react-router-dom";
import Select from "../../ui/Select";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleChange = (e) => {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  };

  return <Select options={options} onChange={handleChange} type="white" />;
}

export default SortBy;
