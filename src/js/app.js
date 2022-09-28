export default function destructor(obj) {
  const { special } = obj;
  for (const i of special) {
    if (i.description === undefined) {
      i.description = "Описание недоступно";
    }
  }
  return special;
}
