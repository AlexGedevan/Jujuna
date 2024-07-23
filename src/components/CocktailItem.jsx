function CocktailItem({ item }) {
  return (
    <div className="bg-black text-white">
      <h1>{item.name}</h1>
    </div>
  );
}

export default CocktailItem;
