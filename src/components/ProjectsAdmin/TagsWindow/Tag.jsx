export const Tag = ({ id, name, localValues }) => {
  const { LocalTags, setLocalTags, newTags, setNewTags, deletedTags, setDeletedTags } =
    localValues;

  const onDelete = () => {
    // Agregar a deleted tags si y solo si el tag a eliminar no se encuentra en newTags:
    //
    // Si se encuentra en newtags, eliminar de newtags y de localtags y no modificar deletedTags.
    // Si no se encuentra en newtags, eliminar de localtags, agregar a deletedtags y no modificar newtags.
    for (const tag of newTags) {
      if (tag.id === id) {
        // Eliminar de newTags y de LocalTags, luego salir de la función
        setNewTags(newTags.filter((tag) => tag.id !== id));
        setLocalTags(LocalTags.filter((tag) => tag.id !== id));
        return;
      }
    }

    // Eliminar de localtags y agregar a deletedtags
    setLocalTags(LocalTags.filter((tag) => tag.id !== id));
    setDeletedTags([...deletedTags, id])
  };

  return (
    <span className="static-tag">
      #{name}
      <i className="fa-solid fa-trash" onClick={onDelete}></i>
    </span>
  );
};
