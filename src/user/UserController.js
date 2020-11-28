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

    if (!client.clientPreference) {
      throw new Error('Lo sentimos no tiene preferencias');
    }

    const dogsAccumulated = allDogs.reduce(
      (accumulated, dog) => {
        if (dog.clients.length > 0) {
          return {
            size: accumulated.size + dog.size,
            color: accumulated.color + dog.color,
            area: accumulated.area + dog.area,
            counter: accumulated.counter + 1,
          };
        }

        return accumulated;
      },
      {
        size: client.clientPreference.size,
        color: client.clientPreference.color,
        area: client.clientPreference.area,
        counter: 1,
      },
    );

    const y = [
      dogsAccumulated.size / dogsAccumulated.counter,
      dogsAccumulated.color / dogsAccumulated.counter,
      dogsAccumulated.area / dogsAccumulated.counter,
      1,
    ];

    console.log({ y, dogsAccumulated });

    const ratedDogs = allDogs.map((dog) => {
      const x = [
        dog.size,
        dog.color,
        dog.area,
        dog.clients.length > 0 ? 1 : -100,
      ];
      const yLike = [1];
      const xLike = [dog.clients.length > 0 ? 1 : -100];
      const rate = similarity(x, y);
      return {
        ...dog.dataValues,
        index: rate,
        path: `http://localhost:1337/pets/${dog.path}`,
      };
    });

    return _.orderBy(ratedDogs, ['index'], ['desc']);
  };
}

export default UserController;
