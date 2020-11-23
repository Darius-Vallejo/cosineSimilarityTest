import express from 'express';
import UserController from './UserController';

const router = express.Router();

router.put('/preferences', async (req, res, next) => {
  try {
    const dataToUpdate = req.body;
    const userController = new UserController();
    const result = await userController.updatePreferences(dataToUpdate);
    res.jsonp(result);
  } catch (error) {
    next(error);
  }
});

router.post('/like', async (req, res, next) => {
  try {
    const { dogId } = req.body;
    const userController = new UserController();
    const result = await userController.like(dogId);
    res.jsonp(result);
  } catch (error) {
    next(error);
  }
});

router.get('/pets-by-clients', async (req, res, next) => {
  try {
    const userController = new UserController();
    const result = await userController.getSuggestions();
    res.jsonp(result);
  } catch (error) {
    next(error);
  }
});

export default router;
