export default function destructor(obj) {
  const { special } = obj;
  for (const i of special) {
    if (!('description' in i)) {
      i.description = 'Описание недоступно';
    }
  }
  return special;
}
