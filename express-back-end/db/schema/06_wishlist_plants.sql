DROP TABLE IF EXISTS wishlist_plants CASCADE;
CREATE TABLE wishlist_plants ( 
  id SERIAL PRIMARY KEY NOT NULL,
  plant_id INTEGER REFERENCES user_plants(id) ON DELETE CASCADE,
  wishlist_user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMP
);