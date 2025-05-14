import useData from "./useDataFetch";

interface platforms{
  id:number;
  name:string;
  slug:string
}
const usePlatforms=()=>useData<platforms>('/platforms/lists/parents');

export default usePlatforms;