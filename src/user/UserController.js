import similarity from 'compute-cosine-similarity';
import _ from 'lodash';
import ClientDAO from './user.dao';

class UserController {
  updatePreferences = (dataToUpdate) => {
    return ClientDAO.updatePreferencesData(dataToUpdate);
  };

  like = (dogId) => {
    return ClientDAO.associateLikeForPetsByClient(dogId);
  };

  getSuggestions = async (clientId = 1) => {
    const client = await ClientDAO.getClientById(clientId);
    const allDogs = await ClientDAO.getAllDogs();

    const y = [
      client.clientPreference.size,
      client.clientPreference.color,
      client.clientPreference.area,
      1,
    ];

    const ratedDogs = allDogs.map((dog) => {
      const x = [dog.size, dog.color, dog.area, dog.clients.length > 0 ? 1 : 0];
      const rate = similarity(x, y);
      return { ...dog.dataValues, index: rate };
    });

    return _.orderBy(ratedDogs, ['index'], ['desc']);
  };
}

export default UserController;
