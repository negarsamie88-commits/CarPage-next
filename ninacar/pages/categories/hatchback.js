import CarList from "../../components/templates/CarList";
import carsData from "../../data/carsData"

function Hatchback() {
    const hatchbackCars = carsData.filter((car) => car.category === "hatchback");
    console.log(hatchbackCars);
  return (
    <CarList data={hatchbackCars}/>
  )
}

export default Hatchback;