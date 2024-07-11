const router = require("express").Router();
const Usuario = require("../modelos/User.model")

router.get("/", async (req, res) => {
    try { 
      const user = await Usuario.findAll();
      res.send(user);
    } catch (error) {
      res.status(500).json({ error: "Ha ocurrido un error" });
    }
  });
  
  router.get("/buscar", async (req, res) => {
    const { email, password } = req.query;
    try {
      const user = await Usuario.findOne({ where: { email, password } });
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Ha ocurrido un error" });
    }
  });
  
  
  router.post("/add", async (req, res) => {
    const {name, email, role, password } = req.body;
    try { 
      await Usuario.sync()
      const usuario = await Usuario.create({
        name: name,
        email: email,
        role: role,
        password: password
      });
      res.json(usuario);
    } catch (error) {
      res.status(500).json({ error: "Ha ocurrido un error" });
      console.log(error);
    }
  });
  
  router.put("/update/:usuario_id", async (req, res) => {
    const id = req.params.id;
    const { nombre, email } = req.body;
    try { 
      const usuario = await Usuario.update({
        nombre: nombre,
        email: email
      }, { where: { id: id} });
      console.log(usuario);
      res.send("Usuario modificado correctamente");
    } catch (error) {
      res.status(500).json({ error: "Ha ocurrido un error" });
    }
  });
  
  router.delete("/delete/:id", async (req, res) => {
    try { 
      const usuario = await Usuario.destroy({ where: { id: req.params.id} });
      res.send("Usuario eliminado correctamente");
    } catch (error) {
      res.status(500).json({ error: "Ha ocurrido un error" });
      console.log(error);
    }
  });
  module.exports = router;