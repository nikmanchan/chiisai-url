CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "username" VARCHAR UNIQUE,
  "password" VARCHAR
  );


CREATE TABLE "shortened_URLs" (
   "id" SERIAL PRIMARY KEY,
   "original_URL" VARCHAR UNIQUE,
   "hit_count" INT DEFAULT 0,
   "user_id" INT REFERENCES "users"
   );
