import pointRepository from "../../repositories/point-repository/index.js";


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