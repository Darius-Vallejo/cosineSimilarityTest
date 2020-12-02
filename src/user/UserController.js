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

  median = (arr) => {
    const mid = Math.floor(arr.length / 2),
      nums = [...arr].sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  };

  getSuggestions = async (clientId = 1) => {
    const client = await ClientDAO.getClientById(clientId);
    const allDogs = await ClientDAO.getAllDogs();

    if (!client.clientPreference) {
      throw new Error('Lo sentimos no tiene preferencias');
    }

    console.log({ c: client.clientPreference });

    const hasLike = allDogs.find((dog) => dog.clients.length > 0);
    const dogsAccumulated = allDogs.reduce(
      (accumulated, dog) => {
        if (dog.clients.length > 0) {
          const a = {
            size: [...accumulated.size, dog.size],
            color: [...accumulated.color, dog.color],
            area: [...accumulated.area, dog.area],
            counter: accumulated.counter + 1,
          };
          console.log(a);
          return a;
        }

        return accumulated;
      },
      {
        size: [client.clientPreference.size],
        color: hasLike ? [] : [client.clientPreference.color],
        area: [client.clientPreference.area],
        counter: 1,
      },
    );

    const y = [
      this.median(dogsAccumulated.size),
      this.median(dogsAccumulated.color),
      this.median(dogsAccumulated.area),
      100,
    ];

    console.log({
      y,
      dogsAccumulated,
      c: allDogs.length > 0 ? [] : [client.clientPreference.color],
    });

    const ratedDogs = allDogs.map((dog) => {
      const x = [
        dog.size,
        dog.color,
        dog.area,
        dog.clients.length > 0 ? 100 : -100,
      ];
      const rate = similarity(x, y);
      console.log({ rate, n: dog.name });
      return {
        ...dog.dataValues,
        index: rate,
        path: `http://localhost:1337/pets/${dog.path}`,
      };
    });

    const all = _.orderBy(ratedDogs, ['index'], ['desc']);
    // console.log({ all });
    return all;
  };
}

export default UserController;
