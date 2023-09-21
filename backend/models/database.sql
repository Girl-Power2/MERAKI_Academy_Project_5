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
FOREIGN KEY (role_id) REFERENCES roles(role_id),
FOREIGN KEY (permission_id) REFERENCES permissions(permission_id),
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
  FOREIGN KEY (role_id) REFERENCES roles(role_id),
  PRIMARY KEY (user_id)
);
>>>>>>>>>>>>>>>>>>>>>>>>>>>
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
FOREIGN KEY (role_id) REFERENCES roles(role_id),
FOREIGN KEY (category_id) REFERENCES categories(category_id),
is_deleted SMALLINT DEFAULT 0
)
>>>>>>>>>>>>>>>>>>>>>>>>>>>>
CREATE TABLE services(

service_id SERIAL PRIMARY KEY NOT NULL ,
service VARCHAR(1000) NOT NULL ,
price-per-hour VARCHAR(255),
provider_id INT
FOREIGN KEY (provider_id) REFERENCES providers(provider_id),

is_deleted SMALLINT DEFAULT 0
);
>>>>>>>>>>>>>>>>>>>>>>>>>>>>
CREATE TABLE orders(
order_id SERIAL PRIMARY KEY NOT NULL ,
service_id INT NOT NULL ,
provider_id INT NOT NULL,
user_id INT NOT NULL ,
created_at TIMESTAMP DEFAULT NOW(),
is_deleted SMALLINT DEFAULT 0,
status VARCHAR DEFAULT 'pending',
schedule_id INT,
FOREIGN KEY (schedule_id) REFERENCES schedules(schedule_id),
FOREIGN KEY (user_id) REFERENCES users(user_id),
FOREIGN KEY (provider_id) REFERENCES providers(provider_id),
FOREIGN KEY (service_id) REFERENCES services(service_id)
);
>>>>>>>>>>>>>>>>>>>>>>>>>>>
CREATE TABLE provider_info(
provider_id SERIAL PRIMARY KEY NOT NULL,
img TEXT,
bio TEXT NOT NULL,
qualifications TEXT NOT NULL,
is_deleted SMALLINT DEFAULT 0
);
-------------------
CREATE TABLE provider_notes(
provider_note_id SERIAL PRIMARY KEY NOT NULL ,
user_id INT NOT NULL,
FOREIGN KEY (user_id) REFERENCES users(user_id),
provider_id INT,
FOREIGN KEY (provider_id) REFERENCES providers(provider_id),
visitied_on TIMESTAMP DEFAULT NOW (),
note MEDIUMTEXT NOT NULL,
is_deleted SMALLINT DEFAULT 0
);
>>>>>>>>>>>>>>>>>>>>>>>>>>>
CREATE TABLE medical_history(
medical_history_id SERIAL PRIMARY KEY NOT NULL,
user_id INT
FOREIGN KEY (user_id) REFERENCES users(user_id),
history MEDIUMTEXT,
medications MEDIUMTEXT,
chronic_diseases  MEDIUMTEXT,
,
is_deleted SMALLINT DEFAULT 0
);
>>>>>>>>>>>>>>>>>>>>>>>>>>>
CREATE TABLE categories(
category_id SERIAL PRIMARY KEY NOT NULL ,
category VARCHAR(255),
is_deleted SMALLINT DEFAULT 0
);
>>>>>>>>>>>>>>>>>>>>>>>>>>>
CREATE TABLE schedules(
schedule_id SERIAL PRIMARY KEY NOT NULL ,
date DATE ,
provider_id INT,
FOREIGN KEY (provider_id) REFERENCES providers(provider_id),
is_deleted SMALLINT DEFAULT 0,
user_id INT,
FOREIGN KEY (user_id) REFERENCES users(user_id),
booked BOOLEAN DEFAULT false
)