DROP TABLE IF EXISTS user_plants CASCADE;
CREATE TABLE user_plants ( 
  id SERIAL PRIMARY KEY NOT NULL,
  species_id INTEGER REFERENCES species(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  nickname VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);