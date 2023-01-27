export const createObjectMap = (items: any[]) =>
  items.reduce(
    (items: { [id: string]: any }, item: any) => ({
      ...items,
      [item.id]: item,
    }),
    {}
  );
