import { useState } from "react";
// import "./App.css";
// import SearchForm from "../SearchForm/SearchForm";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchCharacter } from "../../services/getCharacter";
// import CharacterCard from "../CharacterCard/CharacterCard";
import SearchForm from "../SearchForm/SearchForm";
import CharacterList from "../CharactersList/CharactersList";
// import Pagination from "../Pagination/Pagination";

function App() {
  // const [characterId, setCharacterId] = useState<number>(1);
  // const [currentCharacter, setCurrentCharacter]=useState<Character|null>(null);
  const [characterName, setCharacterName] = useState<string>("");
  // const [currentPage, setCurrrentPage] = useState<number>(1);

  // const queryData = useQuery({
  //   queryKey: ["character", characterName],
  //   queryFn: ()=>fetchCharacter(characterName),
  //   enabled: characterName!== null,
  //   placeholderData: keepPreviousData,
  // });

  // const handleSelectedPage = (pageNumber: number) => {
  //   setCurrrentPage(pageNumber);
  // };

  // const characterData = useQuery({
  //   queryKey: ["character", characterName, currentPage],
  //   queryFn: () => fetchCharacter(characterName, currentPage),
  //   enabled: characterName !== "",
  //   placeholderData: keepPreviousData,
  //   staleTime: 10000 * 1000,
  // });

  const handleSubmitForm = (name: string) => {
    setCharacterName(name);
  };

  const {
    data,
    isError,
    fetchNextPage,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["cards", characterName],
    queryFn: ({ pageParam }) => fetchCharacter(characterName, pageParam),
    enabled: characterName !== "",
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.info.next ? allPages.length + 1 : undefined,
  });
  // const totalPages = data?.;

  // console.log("currentPage:", currentPage);
  const charactersList = data?.pages.flatMap((page) => page.results) ?? [];

  return (
    <>
      <section id="center">
        <div className="hero">
          {/* <SearchForm onSubmit={setCharacterName}/> */}
          <div>
            <p>Second task</p>
            <SearchForm onSubmit={handleSubmitForm} />
            {/* {characterData.data && (
              <CharacterCard character={characterData.data} />
            )} */}
            {charactersList && <CharacterList items={charactersList} />}
            {isLoading && <p>Loading...</p>}
            {isError && <p>Oops, something went wrong</p>}

            {/* <button
              type="button"
              onClick={() => {
                setCharacterId(characterId - 1);
              }}
              disabled={characterId === 1}
            >
              Prev
            </button>
            <button
              type="button"
              onClick={() => {
                setCharacterId(characterId + 1);
              }}
            >
              Next
            </button> */}
            {/* {totalPages && (
              <Pagination
                pageCount={totalPages}
                onPageSelect={handleSelectedPage}
                currentPage={currentPage}
              />
            )} */}
            {hasNextPage ? (
              <button
                type="button"
                disabled={isFetchingNextPage}
                onClick={() => fetchNextPage()}
              >
                {isFetchingNextPage ? "Loading ... " : "Load more!"}{" "}
              </button>
            ) : charactersList.length > 0 ? (
              <p> Nothing to load </p>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
