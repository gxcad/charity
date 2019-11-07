const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URI
});

module.exports = {
  query: ({ text, params }) => {
    pool.query(text, params);
  },
  pool,
};


/*
CREATE TABLE "Users" (
	"_id" serial NOT NULL,
	"username" varchar(255) NOT NULL UNIQUE,
	"password" varchar(255) NOT NULL,
	CONSTRAINT "Users_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Sessions" (
	"_id" serial NOT NULL,
	"ssid" serial(255) NOT NULL,
	"username" varchar(255) NOT NULL,
	CONSTRAINT "Sessions_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Donations" (
	"_id" serial NOT NULL,
	"username" varchar(255) NOT NULL,
	"amount" DECIMAL(255) NOT NULL,
	"charityName" varchar(255) NOT NULL,
	"date" DATE(255),
	CONSTRAINT "Donations_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "Sessions" ADD CONSTRAINT "Sessions_fk0" FOREIGN KEY ("username") REFERENCES "Users"("username");

ALTER TABLE "Donations" ADD CONSTRAINT "Donations_fk0" FOREIGN KEY ("username") REFERENCES "Users"("username");

*/