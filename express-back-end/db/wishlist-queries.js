const db = require('./index');

const getWishlist = () => {
  return db.query(`SELECT * FROM wishlist_plants JOIN user_plants ON wishlist_plants.plant_id=user_plants.id JOIN species ON user_plants.species_id=species.species_id;`)
    .then((res) => {
      // console.log('res.rows[0]', res.rows[0]);
      return res.rows;
    })
    .catch((err) => {
      console.log('DB error fetching wishlist plants: ' + err.message);
    });
};

const insertWishlistPlant = (data) => {
  // eslint-disable-next-line camelcase
  const { plant_id, wishlist_user_id } = data;
  return db.query(
    `
      INSERT INTO wishlist_plants (plant_id, wishlist_user_id, created_at) VALUES ($1, $2, $3) RETURNING *;
    `,
    // eslint-disable-next-line camelcase
    [plant_id, wishlist_user_id, new Date()]
  )
    .then((res) => {
      // console.log('res.rows[0] EEEEE', res.rows[0]);
      return res.rows;
    })
    .catch((err) => {
      console.log('DB error inserting wishlist: ' + err.message);
    });
};

module.exports = {
  getWishlist,
  insertWishlistPlant
};
