const db = require("../dao/models");

const bannerAPI =
{
    getAll : async (req, res) =>
    {
        const arregloBanner = await db.Banner.findAll();
        res.json(
        {
            data : arregloBanner,
            msg : ""
        })
    }
}

module.exports = bannerAPI;