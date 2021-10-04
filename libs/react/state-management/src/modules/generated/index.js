import * as companyDetails from './companyDetails';
import * as aboutKpiNetwork from './aboutKpiNetwork';
import * as adminPage from './adminPage';
import * as cohortDetails from './cohortDetails';
import * as myCohorts from './myCohorts';
import * as myPortfolio from './myPortfolio';

export default {
  ...Object.values({
    companyDetails,

    aboutKpiNetwork,

    adminPage,

    cohortDetails,

    myCohorts,

    myPortfolio,
  }),
};
