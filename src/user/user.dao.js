import db from '../db/models';
class ClientDAO {
  static async updatePreferencesData(data) {
    const { clientPreference } = db;
    const preferences = await clientPreference.findOne({
      where: { clientId: 1 },
    });
    if (preferences) {
      return preferences.update(data);
    }

    const newPreferences = await clientPreference.create({
      ...data,
      clientId: 1,
    });
    return newPreferences;
  }

  static async associateLikeForPetsByClient(petId, clientId = 1) {
    const { client, pet } = db;
    const currentPet = await pet.findByPk(petId);
    const currentClient = await client.findByPk(clientId);
    await currentPet.addClient(currentClient);
  }

  static async getClientById(id) {
    const { client, clientPreference } = db;
    return client.findByPk(id, { include: { model: clientPreference } });
  }

  static getAllDogs() {
    const { client, pet } = db;
    return pet.findAll({
      include: [
        { model: client, attributes: ['id'], through: { attributes: [] } },
      ],
    });
  }
}

export default ClientDAO;
