function formatPokemonId(id?: number) {
  if (id === undefined) return '';
  const stringId = String(id);
  if (stringId.length === 1) return `00${stringId}`;
  if (stringId.length === 2) return `0${stringId}`;
  return stringId;
}

export default formatPokemonId;
