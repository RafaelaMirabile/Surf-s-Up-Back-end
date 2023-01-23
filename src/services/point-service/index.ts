import pointRepository from "../../repositories/point-repository";


async function getPoints() {
const points = await pointRepository.findPoints();
if(!points){
    throw Error;
}
return points;
}

const pointServices = {
    getPoints
};

export default pointServices;