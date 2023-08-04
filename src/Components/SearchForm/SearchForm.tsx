import { useForm, SubmitHandler } from "react-hook-form";
import "./SearchForm.scss";

interface SearchProps {
  setSearchData: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  titleButtonSearch: string;
  regex: RegExp | undefined;
}

interface FormValues {
  searchForm: string;
  titleButtonSearch: string;
}

export const SearchForm = ({
  setSearchData,
  placeholder,
  titleButtonSearch,
  regex,
}: SearchProps) => {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setSearchData(data.searchForm);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="search-form">
      <input
        {...register("searchForm", { required: true, pattern: regex })}
        placeholder={placeholder}
        type="text"
      />
      <button>{titleButtonSearch}</button>
    </form>
  );
};
