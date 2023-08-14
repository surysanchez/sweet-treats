const Cake = require('../../models/cake');

module.exports = {
    getAllCakes,
    createCake,
    getCakeById,
    deleteCake,
    updateCake
};

async function getAllCakes(req, res){
    try{
        const cakes = await Cake.find({});
        res.json(cakes);
    } catch (error){
        res.status(500).json({error: 'Failed to retrieve cakes'});

    }
}

async function createCake(req, res) {
    try {
      const { Ocassion, size, filling, flavour, comments } = req.body;
      // const userId = req.user._id;
  
      const newCake = new Cake({
        Ocassion,
        size,
        filling,
        flavour,
        comments,
        // user: userId,
      });
      const savedCake = await newCake.save();
      res.status(201).json(savedCake);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to create cake" });
    }
  }
  
  async function getCakeById(req, res) {
    try {
      const cakeId = req.params.id;
  
      const cake = await Cake.findById(cakeId);
      // (cakeId).populate("user");
  
      if (!cake) {
        return res.status(404).json({ error: "Cake not found" });
      }
  
      res.json(cakeId);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to get cake" });
    }
  }
  
  async function deleteCake(req, res) {
    try {
      const cakeId = req.params.id;
  
      // Find the cake by ID
      const cake = await Cake.findByIdAndDelete(cakeId);
  
      if (!cake) {
        return res.status(404).json({ error: "Cake not found" });
      }
  
      res.json({ message: "Cake deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to delete tcake" });
    }
  }
  
  async function updateCake(req, res) {
    // console.log("req", req.body);
    try {
      const { Ocassion, size, flavour, filling, comments } = req.body;
      const cakeId = req.params.id;
      // console.log(cakeId);
      // Find the cake by ID"
      const cake = await Cake.findByIdAndUpdate(
        cakeId,
        { Ocassion, size, flavour, filling, comments },
        { new: true }
      );
      // console.log(cake)
      if (!cake) {
        return res.status(404).json({ error: "Cake not found" });
      }
  
      res.json(cake);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to update cake" });
    }
  }
  