export default function destructor({ special }) {
  const result = [];

  special.forEach(({
    name, id, icon, description = 'Описание недоступно',
  }) => {
    result.push({
      name,
      id,
      icon,
      description,
    });
  });
  return result;
}
