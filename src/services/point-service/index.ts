import pointRepository from "../../repositories/point-repository/index.js";


async function getPoints() {
const points = await pointRepository.findPoints();
if(!points){
    throw Error;
}
return points;
}

async function getReport(pointId : number) {
    const reports = await pointRepository.findReports(pointId);
    
    if(!reports){
        throw Error;
    }
    return reports;
}

const pointServices = {
    getPoints,
    getReport
};

export default pointServices;