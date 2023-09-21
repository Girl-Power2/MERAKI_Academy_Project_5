CREATE TABLE roles (
  role_id SERIAL NOT NULL,
  role VARCHAR(255) NOT NULL,
  PRIMARY KEY (role_id)
);

CREATE TABLE permissions (
permission_id SERIAL NOT NULL,
permission VARCHAR(255) NOT NULL,
PRIMARY KEY (permission_id)
);



CREATE TABLE role_permissions(
role_permission_id SERIAL NOT NULL,
role_id INT,
permission_id INT,
FOREIGN KEY (role_id) REFERENCES roles(role_id) ON UPDATE CASCADE  ON DELETE CASCADE,
FOREIGN KEY (permission_id) REFERENCES permissions(permission_id) ON UPDATE CASCADE ON DELETE CASCADE,
PRIMARY KEY (role_permission_id)
);

CREATE TABLE users(
  user_id SERIAL NOT NULL,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  birthDate DATE NOT NULL,
  city VARCHAR(255),
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  phoneNumber VARCHAR(100) NOT NULL,
  role_id INT,
  gender VARCHAR (100) ,
  is_deleted SMALLINT DEFAULT 0,
  FOREIGN KEY (role_id) REFERENCES roles(role_id)ON UPDATE CASCADE ON DELETE CASCADE,
  PRIMARY KEY (user_id)
);

CREATE TABLE categories(
category_id SERIAL PRIMARY KEY NOT NULL ,
category VARCHAR(255),
is_deleted SMALLINT DEFAULT 0
);

CREATE TABLE providers(
provider_id SERIAL PRIMARY KEY NOT NULL,
fName VARCHAR(255) NOT NULL,
lName VARCHAR(255) NOT NULL,
birthDAte DATE ,
email VARCHAR(255) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL ,
phoneNumber VARCHAR(100) NOT NULL,
city VARCHAR(255) ,
gender  VARCHAR(255) NOT NULL,
category_id INT NOT NULL ,
role_id INT ,
FOREIGN KEY (role_id) REFERENCES roles(role_id)ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (category_id) REFERENCES categories(category_id) ON UPDATE CASCADE ON DELETE CASCADE,
is_deleted SMALLINT DEFAULT 0

);

CREATE TABLE reviews(
review_id SERIAL PRIMARY KEY NOT NULL ,
user_id INT ,
FOREIGN KEY (user_id) REFERENCES users(user_id)ON UPDATE CASCADE ON DELETE CASCADE,
provider_id INT ,
FOREIGN KEY (provider_id) REFERENCES providers(provider_id)ON UPDATE CASCADE ON DELETE CASCADE,
created_at TIMESTAMP DEFAULT NOW() ,
is_deleted SMALLINT DEFAULT 0
);


CREATE TABLE services(
service_id SERIAL PRIMARY KEY NOT NULL ,
service VARCHAR(1000) NOT NULL ,
price_per_hour VARCHAR(255),
provider_id INT,
FOREIGN KEY (provider_id) REFERENCES providers(provider_id)ON UPDATE CASCADE ON DELETE CASCADE,
is_deleted SMALLINT DEFAULT 0
);

CREATE TABLE schedules(
schedule_id SERIAL PRIMARY KEY NOT NULL ,
date DATE ,
provider_id INT,
FOREIGN KEY (provider_id) REFERENCES providers(provider_id)ON UPDATE CASCADE ON DELETE CASCADE,
is_deleted SMALLINT DEFAULT 0,
user_id INT,
FOREIGN KEY (user_id) REFERENCES users(user_id)ON UPDATE CASCADE ON DELETE CASCADE,
booked BOOLEAN DEFAULT false
)

CREATE TABLE orders(
order_id SERIAL PRIMARY KEY NOT NULL ,
service_id INT NOT NULL ,
FOREIGN KEY (service_id) REFERENCES services(service_id)ON UPDATE CASCADE ON DELETE CASCADE,
provider_id INT NOT NULL,
FOREIGN KEY (provider_id) REFERENCES providers(provider_id)ON UPDATE CASCADE ON DELETE CASCADE,
user_id INT NOT NULL ,
FOREIGN KEY (user_id) REFERENCES users(user_id)ON UPDATE CASCADE ON DELETE CASCADE,
created_at TIMESTAMP DEFAULT NOW(),
is_deleted  SMALLINT DEFAULT 0,
status VARCHAR DEFAULT 'pending',
schedule_id INT,
FOREIGN KEY (schedule_id) REFERENCES schedules(schedule_id)ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE provider_info(
provider_id SERIAL PRIMARY KEY NOT NULL,
img TEXT,
bio TEXT NOT NULL,
qualifications TEXT NOT NULL,
is_deleted SMALLINT DEFAULT 0
);

CREATE TABLE provider_notes(
provider_note_id SERIAL PRIMARY KEY NOT NULL ,
user_id INT NOT NULL,
FOREIGN KEY (user_id) REFERENCES users(user_id)ON UPDATE CASCADE ON DELETE CASCADE,
provider_id INT,
FOREIGN KEY (provider_id) REFERENCES providers(provider_id)ON UPDATE CASCADE ON DELETE CASCADE,
visitied_on TIMESTAMP DEFAULT NOW (),
note TEXT NOT NULL,
is_deleted SMALLINT DEFAULT 0
);

CREATE TABLE medical_history(
medical_history_id SERIAL PRIMARY KEY NOT NULL,
user_id INT,
FOREIGN KEY (user_id) REFERENCES users(user_id)ON UPDATE CASCADE ON DELETE CASCADE,
history TEXT,
medications TEXT,
chronic_diseases  TEXT,
is_deleted SMALLINT DEFAULT 0
);



