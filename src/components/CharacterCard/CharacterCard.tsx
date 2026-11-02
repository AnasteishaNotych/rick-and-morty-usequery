import type { Character } from "../../types/character";
// import "./CharacterCard.module.css";

interface CharacterCardProps {
  character: Character;
}

function CharacterCard({ character }: CharacterCardProps) {
  return (
    <li>
      <img alt={character.name} src={character.image} />
      <h3> {character.name}</h3>
      <p>{character.id}</p>
      <p>{character.status}</p>
    </li>
  );
}

export default CharacterCard;
