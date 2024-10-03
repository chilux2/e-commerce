const express = require('express');
const router = express.Router();

const { getUserById }= require('../services/UserService');

//const UserServiceInstance = new UserService();

module.exports = (app) => {

  app.use( '/user',router);

  router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await getUserById(id);

        if (!user) return res.status(404).send('user not found');

        res.status(200).send(user);

    } catch (error) {
        res.status(500).send(error.message)
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;

        const user = await getUserById(id);
        if (!user) return res.status(404).send('user not found');

        const response = await updateUser(id, data);
        res.send(response);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const user = await getUserById(id);
        if (!user) return res.status(404).send('user not found');

        await deleteUser(id);
        res.status(204).send('Successfully deleted user');
    } catch (error) {
        res.status(500).send(error.message);
    }
})

  /*router.get('/:userId', async (req, res, next) => {

    try {
      //const { userId } = req.params;
      const { id } = req.params;

      const user = await UserService.getUser(id);
    
      //const response = await UserServiceInstance.get({ id: userId });
      if (!user) return res.status(404).send('user not found');


      res.status(200).send(response);
    } catch(err) {
      //next(err);
      res.status(500).send(error.message);
    }
  });

  router.put('/:userId', async (req, res, next) => {
    try {
      const { userId } = req.params;
      const data = req.body;

      const response = await UserServiceInstance.update({ id: userId, ...data });
      res.status(200).send(response);
    } catch(err) {
      next(err);
    }
  });*/

}