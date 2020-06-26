import {
  addNewPlayer,
  getPlayers,
  getPlayerById,
  updatePlayer,
  deletePlayer,
} from '../controllers/playerController';

const routes = (app) => {
  app
    .route('/players')
    // get endpoint
    .get(getPlayers)
    // post endpoint
    .post(addNewPlayer);

  app
    .route('/player/:PlayerId')
    //get individual player endpoint
    .get(getPlayerById)
    // update specific player
    .put(updatePlayer)
    // delete specific player
    .delete(deletePlayer);
};

export default routes;
