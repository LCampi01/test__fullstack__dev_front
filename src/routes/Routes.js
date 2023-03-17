import {useRoutes} from 'react-router-dom';

import offlineRoutes from './offline';

function Routes() {
  return useRoutes(offlineRoutes);
}

Routes.propTypes = {};

Routes.defaultProps = {};

export default Routes;
