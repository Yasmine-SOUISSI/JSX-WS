import Cards from "../Components/Cards";

const CardList = () => {
  return (
    <div className="card-list">
      {[1, 2, 3, 4].map((item) => (
        <Cards key={item} />
      ))}
    </div>
  );
};
export default CardList;
