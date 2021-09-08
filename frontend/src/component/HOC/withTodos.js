import useAxiosFetch from "../customHook/useAxiosFetch";
import useAxiosPost from "../customHook/useAxiosPost";

const hocFetchAPI = (WrappedComponent, selectData) => {
  const EnchancedComponent = (props) => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const { data, isLoading, error } = useAxiosFetch(url);

    return <WrappedComponent data={data} isLoading={isLoading} error={error} />;
  };

  return EnchancedComponent;
};

export default hocFetchAPI;
