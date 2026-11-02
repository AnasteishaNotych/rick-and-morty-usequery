import type { Character } from "../../types/character";
import CharacterCard from "../CharacterCard/CharacterCard";
// import "./CharacterList.module.css";

interface CharacterListProps {
  items: Character[];
}

function CharacterList({ items }: CharacterListProps) {
  return (
    <ul>
      {items.map((item) => (
        <CharacterCard character={item} key={item.id} />
      ))}
    </ul>
  );
}

export default CharacterList;
