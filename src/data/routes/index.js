import Landing from '../../components/landing/Landing';
import About from '../../components/about/About';
import Story from '../../components/about/Story';
import Career from '../../components/about/Career';
import Projects from '../../components/projects/Projects';
import OculysHealthInformatics from '../../components/projects/OculysHealthInformatics';
import FGFBrands from '../../components/projects/FGFBrands';
import Serenity from '../../components/projects/Serenity';
import Huddle from '../../components/projects/Huddle';
import UserAuth from '../../components/projects/UserAuth';
import Weatherly from '../../components/projects/Weatherly';
import FitBud from '../../components/projects/Fitbud';
import Photography from '../../components/photography/Photography';
import LosAngeles from '../../components/photography/LosAngeles';
import Banff from '../../components/photography/Banff';
import Calgary from '../../components/photography/Calgary';
import Toronto from '../../components/photography/Toronto';

const routes = [
  {
    path: '/',
    component: Landing,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/about/story',
    component: Story,
  },
  {
    path: '/about/career',
    component: Career,
  },
  {
    path: '/work',
    component: Projects,
  },
  {
    path: '/work/oculyshealthinformatics',
    component: OculysHealthInformatics,
  },
  {
    path: '/work/fgfbrands',
    component: FGFBrands,
  },
  {
    path: '/work/serenity',
    component: Serenity,
  },
  {
    path: '/work/huddle',
    component: Huddle,
  },
  {
    path: '/work/userauth',
    component: UserAuth,
  },
  {
    path: '/work/weatherly',
    component: Weatherly,
  },
  {
    path: '/work/fitbud',
    component: FitBud,
  },
  {
    path: '/photography',
    component: Photography,
  },
  {
    path: '/photography/losangeles',
    component: LosAngeles,
  },
  {
    path: '/photography/banff',
    component: Banff,
  },
  {
    path: '/photography/calgary',
    component: Calgary,
  },
  {
    path: '/photography/toronto',
    component: Toronto,
  },
];

export default routes;
