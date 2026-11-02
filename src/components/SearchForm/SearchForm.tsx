import "./SearchForm.module.css";

interface SearchFormProps {
  onSubmit: (characterName: string) => void;
}

function SearchForm({ onSubmit }: SearchFormProps) {
  const handleSubmit = (formData: FormData) => {
    const characterName = (formData.get("characterName") as string).trim();
    if (characterName === "") {
      return;
    }
    onSubmit(characterName);
  };

  return (
    <div>
      <form action={handleSubmit}>
        <input type="text" name="characterName" />
        <button type="submit">Search!</button>
      </form>
    </div>
  );
}

export default SearchForm;
