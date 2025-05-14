import useData from "./useDataFetch";


interface Genre{
  id:number;
  name:string
}

const useGenres=()=> useData<Genre>('/genres');

export default useGenres;