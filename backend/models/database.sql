DROP DATABASE cureapp_5;
CREATE DATABASE cureapp_5;

\c cureapp_5;


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
FOREIGN KEY (role_id) REFERENCES roles(role_id)
ON UPDATE CASCADE
ON DELETE CASCADE,
FOREIGN KEY (permission_id) REFERENCES permissions(permission_id)
ON UPDATE CASCADE
ON DELETE CASCADE,
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
FOREIGN KEY (role_id) REFERENCES roles(role_id)
ON UPDATE CASCADE
ON DELETE CASCADE,
gender VARCHAR (100) ,
is_deleted SMALLINT DEFAULT 0,
 
PRIMARY KEY (user_id),
CHECK users_email_key (email like '%_@__%.__%') 


);

CREATE TABLE categories(
category_id SERIAL PRIMARY KEY NOT NULL ,
category VARCHAR(255),
img TEXT,
is_deleted SMALLINT DEFAULT 0
);

CREATE TABLE providers(
provider_id SERIAL PRIMARY KEY NOT NULL,
fName VARCHAR(255) NOT NULL,
lName VARCHAR(255) NOT NULL,
birthDate DATE NOT NULL,
email VARCHAR(255) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL ,
phoneNumber VARCHAR(100) NOT NULL,
city VARCHAR(255) ,
gender  VARCHAR(255) NOT NULL,
category_id INT NOT NULL ,
role_id INT ,
FOREIGN KEY (role_id) REFERENCES roles(role_id)
ON UPDATE CASCADE
 ON DELETE CASCADE,
FOREIGN KEY (category_id) REFERENCES categories(category_id)
ON UPDATE CASCADE
 ON DELETE CASCADE,
is_deleted SMALLINT DEFAULT 0

);

CREATE TABLE services(
service_id SERIAL PRIMARY KEY NOT NULL ,
service VARCHAR(1000) NOT NULL ,
price_per_hour INT,
provider_id INT,
FOREIGN KEY (provider_id) REFERENCES providers(provider_id)
ON UPDATE CASCADE
ON DELETE CASCADE,

is_deleted SMALLINT DEFAULT 0
);

CREATE TABLE schedules(
schedule_id SERIAL PRIMARY KEY NOT NULL ,
time_from TIME NOT NULL,
time_to TIME NOT NULL,
DATE date ,
provider_id INT,
FOREIGN KEY (provider_id) REFERENCES providers(provider_id)
ON UPDATE CASCADE
ON DELETE CASCADE,
is_deleted SMALLINT DEFAULT 0,

user_id INT, --to be removed
FOREIGN KEY (user_id) REFERENCES users(user_id)
ON UPDATE CASCADE
ON DELETE CASCADE,

Date DATE ,


booked BOOLEAN DEFAULT false,
chosen BOOLEAN DEFAULT true,
is_viewed SMALLINT DEFAULT 1
);

create table reviews(
review_id SERIAL PRIMARY KEY NOT NULL,
user_id INT,
FOREIGN KEY (user_id) REFERENCES users(user_id)
ON UPDATE CASCADE
ON DELETE CASCADE,
provider_id INT,
FOREIGN KEY (provider_id) REFERENCES providers(provider_id)
ON UPDATE CASCADE
ON DELETE CASCADE,
review TEXT,
created_at TIMESTAMP DEFAULT NOW(),
is_deleted SMALLINT DEFAULT  0

);






CREATE TABLE orders(
order_id SERIAL PRIMARY KEY NOT NULL ,
service_id INT NOT NULL ,
FOREIGN KEY (service_id) REFERENCES services(service_id)
ON UPDATE CASCADE 
ON DELETE CASCADE,
provider_id INT NOT NULL,
FOREIGN KEY (provider_id) REFERENCES providers(provider_id)
ON UPDATE CASCADE 
ON DELETE CASCADE,
user_id INT NOT NULL ,
FOREIGN KEY (user_id) REFERENCES users(user_id)
ON UPDATE CASCADE
ON DELETE CASCADE,
created_at TIMESTAMP DEFAULT NOW(),
is_deleted  SMALLINT DEFAULT 0,
status VARCHAR DEFAULT 'pending',
schedule_id INT,
FOREIGN KEY (schedule_id) REFERENCES schedules(schedule_id)
ON UPDATE CASCADE
ON DELETE CASCADE
);

CREATE TABLE provider_info(
provider_info_id SERIAL PRIMARY KEY NOT NULL,
img TEXT DEFAULT 'http://res.cloudinary.com/drzcyo3sv/image/upload/v1696194434/tlkwzcr0pyidz3g2125d.png',
bio TEXT NOT NULL,
qualifications TEXT NOT NULL,
provider_id INT NOT NULL,
FOREIGN KEY (provider_id) REFERENCES providers(provider_id)

ON UPDATE CASCADE

ON DELETE CASCADE,
is_deleted SMALLINT DEFAULT 0
);

CREATE TABLE provider_notes(
provider_note_id SERIAL PRIMARY KEY NOT NULL ,
user_id INT NOT NULL,
FOREIGN KEY (user_id) REFERENCES users(user_id)
ON UPDATE CASCADE
ON DELETE CASCADE,
provider_id INT,
FOREIGN KEY (provider_id) REFERENCES providers(provider_id)
ON UPDATE CASCADE ON DELETE CASCADE,
visitied_on TIMESTAMP DEFAULT NOW (),
note TEXT NOT NULL,
is_deleted SMALLINT DEFAULT 0
);

CREATE TABLE medical_history(
medical_history_id SERIAL PRIMARY KEY NOT NULL,
user_id INT,
FOREIGN KEY (user_id) REFERENCES users(user_id)
ON UPDATE CASCADE
ON DELETE CASCADE,
history TEXT,
medications TEXT,
chronic_diseases  TEXT,
is_deleted SMALLINT DEFAULT 0
);

INSERT INTO roles (role) VALUES ('Admin'),('User'),('Provider'); 
INSERT INTO permissions (permission) VALUES (''),(''),(''); 
INSERT INTO role_permissions (role_id,permission_id) VALUES ('',''),('',''),('',''); 

---=========================== insert category =========================
 INSERT INTO categories (category,img) VALUES ('General Medicine','img'),('Nursing',''),('Physiotherapy',''),('Occupational Therapy',''),('Speech Therapy',''),('Baby Sitting','');


INSERT INTO categories (category ,img)VALUES ('Babysitting' ,'https://www.shutterstock.com/shutterstock/photos/1686880690/display_1500/stock-vector-mother-playing-with-kids-at-home-educational-toys-children-playing-designer-cubes-developmental-1686880690.jpg') 
INSERT INTO categories (category ,img)VALUES ('Speech Therapy' ,'https://www.starhealth.in/blog/wp-content/uploads/2022/06/SPEECH-THERAPY.jpg') 
INSERT INTO categories (category ,img)VALUES ('Occupational Therapy','https://web.goodhealthcontent.com//imagecache/App__Models__CMS__Item__Image__ImageResource__5690//1280__0__c3.jpg') 
INSERT INTO categories (category ,img)VALUES ('Physiotherapy' ,'https://blogs.dpuerp.in/images/blog/7/362-physiotherapy-decoding-myths-and-facts.jpg') 
INSERT INTO categories (category,img)VALUES ('Laboratory','https://static.vecteezy.com/system/resources/thumbnails/007/192/085/small/two-scientists-working-isolated-on-a-white-background-vector.jpg') 
INSERT INTO categories (category ,img)VALUES ('Nursing' ,'https://clipartix.com/wp-content/uploads/2016/06/Search-results-search-results-for-nurse-pictures-graphics-cliparts.jpg') 
INSERT INTO categories (category , img) VALUES ('	General Medicine','https://igch.in/public/uploads/2019-06-23/general-medicine.jpg')

--===========================insert provider======================================
--===================genera medicine ===================
INSERT INTO providers  (fname,
  lname,
  birthdate,
  gender,
  email,
  password,
  city,
  phonenumber,
  role_id,
  category_id) VALUES('khaled','tarawneh','1995-8-20','male','khaled@gmail.com','12369874','Amman','962791486451',3, 'general medicine') RETURNING *


  INSERT INTO provider_info  (img,bio,qualifications, provider_id) VALUES ('','test ','test',21) RETURNING *

  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('test',20,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('test',60,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('test',30,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('test',50,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('test',40,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('test',10,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('test',15,8) RETURNING *


--=====================================================
INSERT INTO providers  (fname,
  lname,
  birthdate,
  gender,
  email,
  password,
  city,
  phonenumber,
  role_id,
  category_id) VALUES('Ahmed','Alajloni','1990-8-2','male','Ahmed@gmail.com','258741369','Ajlone','962789412656',3, 'general medicine') RETURNING *

  INSERT INTO provider_info  (img,bio,qualifications, provider_id) VALUES ('','test ','test',21) RETURNING *

   INSERT INTO services (service,price_per_hour,provider_id) VALUES ('test',20,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('test',40,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('test',30,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('test',35,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('test',25,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('test',10,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('test',15,8) RETURNING *
--====================================================
INSERT INTO providers  (fname,
  lname,
  birthdate,
  gender,
  email,
  password,
  city,
  phonenumber,
  role_id,
  category_id) VALUES('Husam','Tarawneh','1993-2-20','male','husam@gmail.com','12369874','Al-Karak','96316974151',3, 'general medicine') RETURNING *

INSERT INTO provider_info  (img,bio,qualifications, provider_id) VALUES ('','test ','test',21) RETURNING *

 INSERT INTO services (service,price_per_hour,provider_id) VALUES ('test',20,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('test',60,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('test',30,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('test',50,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('test',40,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('test',10,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('test',15,8) RETURNING *
--=====================================================
INSERT INTO providers  (fname,
  lname,
  birthdate,
  gender,
  email,
  password,
  city,
  phonenumber,
  role_id,
  category_id) VALUES('Nawal','Mousa','1986-4-7','female','nawal@gmail.com','12369874','Irbid','9631486451',3, 'general medicine') RETURNING *

INSERT INTO provider_info  (img,bio,qualifications, provider_id) VALUES ('','test ','test',21) RETURNING *
--==================================================
  INSERT INTO providers  (fname,
  lname,
  birthdate,
  gender,
  email,
  password,
  city,
  phonenumber,
  role_id,
  category_id) VALUES('Malak','Mansor','1990-7-20','female','malak@gmail.com','12369874','Zarqa','9631486451',3, 'general medicine') RETURNING *
INSERT INTO provider_info  (img,bio,qualifications, provider_id) VALUES ('','test ','test',21) RETURNING *

--===================================================
INSERT INTO providers  (fname,
  lname,
  birthdate,
  gender,
  email,
  password,
  city,
  phonenumber,
  role_id,
  category_id) VALUES('Naya','Al-zoubi','1991-6-20','female','naya@gmail.com','12369874','As-salt','9631486451',3, 'general medicine') RETURNING *
INSERT INTO provider_info  (img,bio,qualifications, provider_id) VALUES ('','test ','test',21) RETURNING *
--===================== nurse============================
INSERT INTO providers  (fname,
  lname,
  birthdate,
  gender,
  email,
  password,
  city,
  phonenumber,
  role_id,
  category_id) VALUES('Muhamad','Hasan','1995-8-20','male','muhamad@gmail.com','12369874','Amman','9631486451',3, 'Nurse') RETURNING *
INSERT INTO provider_info  (img,bio,qualifications, provider_id) VALUES ('','test ','test',21) RETURNING *

 INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Intravenous (IV) care, including injections, IV hydration and IV feeding',15,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Medication management and supervision',25,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Respiratory care and therapy',20,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Medical monitoring, including tracking of vital signs and medical condition',30,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Specialty services, like stroke, cardiac, orthopedic',40,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Complex wound care, such as care and dressing of surgical wounds or specialized care of decubutis ulcers (bed sores)',35,8) RETURNING *
 
--======================================================
  INSERT INTO providers  (fname,
  lname,
  birthdate,
  gender,
  email,
  password,
  city,
  phonenumber,
  role_id,
  category_id) VALUES('Yazan','Abdullah','1996-3-20','male','yazan@gmail.com','12369874','Mafraq',
  '9631486451',3, 'nurse') RETURNING *

INSERT INTO provider_info  (img,bio,qualifications, provider_id) VALUES ('','test ','test',21) RETURNING *
 INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Intravenous (IV) care, including injections, IV hydration and IV feeding',15,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Medication management and supervision',25,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Respiratory care and therapy',20,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Medical monitoring, including tracking of vital signs and medical condition',30,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Specialty services, like stroke, cardiac, orthopedic',40,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Complex wound care, such as care and dressing of surgical wounds or specialized care of decubutis ulcers (bed sores)',35,8) RETURNING *
--======================================================
   INSERT INTO providers  (fname,
  lname,
  birthdate,
  gender,
  email,
  password,
  city,
  phonenumber,
  role_id,
  category_id) VALUES('Obada','Ahmed','1995-9-7','male','obada@gmail.com','12369874','Zarqa','9631486451',3, 'nurse') RETURNING *

INSERT INTO provider_info  (img,bio,qualifications, provider_id) VALUES ('','test ','test',21) RETURNING *
 INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Intravenous (IV) care, including injections, IV hydration and IV feeding',15,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Medication management and supervision',25,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Respiratory care and therapy',20,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Medical monitoring, including tracking of vital signs and medical condition',30,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Specialty services, like stroke, cardiac, orthopedic',40,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Complex wound care, such as care and dressing of surgical wounds or specialized care of decubutis ulcers (bed sores)',35,8) RETURNING *
--====================================================


   INSERT INTO providers  (fname,
  lname,
  birthdate,
  gender,
  email,
  password,
  city,
  phonenumber,
  role_id,
  category_id) VALUES('Othman','Awawdeh','1998-5-20','male','othman@gmail.com','12369874','As-salat','9631486451',3, 'nurse') RETURNING *

INSERT INTO provider_info  (img,bio,qualifications, provider_id) VALUES ('','test ','test',21) RETURNING *
 INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Intravenous (IV) care, including injections, IV hydration and IV feeding',15,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Medication management and supervision',25,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Respiratory care and therapy',20,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Medical monitoring, including tracking of vital signs and medical condition',30,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Specialty services, like stroke, cardiac, orthopedic',40,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Complex wound care, such as care and dressing of surgical wounds or specialized care of decubutis ulcers (bed sores)',35,8) RETURNING *
--=====================================================
   INSERT INTO providers  (fname,
  lname,
  birthdate,
  gender,
  email,
  password,
  city,
  phonenumber,
  role_id,
  category_id) VALUES('Dema','Alshami','2000-9-4','female','dema@gmail.com','12369874','Az-zarqa','9631486451',3, 'nurse') RETURNING *


INSERT INTO provider_info  (img,bio,qualifications, provider_id) VALUES ('','test ','test',21) RETURNING *
 INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Intravenous (IV) care, including injections, IV hydration and IV feeding',15,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Medication management and supervision',25,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Respiratory care and therapy',20,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Medical monitoring, including tracking of vital signs and medical condition',30,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Specialty services, like stroke, cardiac, orthopedic',40,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Complex wound care, such as care and dressing of surgical wounds or specialized care of decubutis ulcers (bed sores)',35,8) RETURNING *
--====================================================
 INSERT INTO providers  (fname,
  lname,
  birthdate,
  gender,
  email,
  password,
  city,
  phonenumber,
  role_id,
  category_id) VALUES('Rahaf','Mahmud','1999-3-20','female','rahaf@gmail.com','12369874','Ajlone','9631486451',3, 'nurse') RETURNING *

INSERT INTO provider_info  (img,bio,qualifications, provider_id) VALUES ('','test ','test',21) RETURNING *

 INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Intravenous (IV) care, including injections, IV hydration and IV feeding',15,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Medication management and supervision',25,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Respiratory care and therapy',20,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Medical monitoring, including tracking of vital signs and medical condition',30,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Specialty services, like stroke, cardiac, orthopedic',40,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Complex wound care, such as care and dressing of surgical wounds or specialized care of decubutis ulcers (bed sores)',35,8) RETURNING *
--==================== laboratory ====================
 INSERT INTO providers  (fname,
  lname,
  birthdate,
  gender,
  email,
  password,
  city,
  phonenumber,
  role_id,
  category_id) VALUES('Mazen','Abdullah','1996-3-20','male','mazen@gmail.com','12369874','Amman','9631486451',3, 'laboratory') RETURNING *

INSERT INTO provider_info  (img,bio,qualifications, provider_id) VALUES ('','test ','test',21) RETURNING 
*
--======================================================

 INSERT INTO providers  (fname,
  lname,
  birthdate,
  gender,
  email,
  password,
  city,
  phonenumber,
  role_id,
  category_id) VALUES('Mariam','Khalilah','1997-5-20','female','mariam@gmail.com','12369874','Az-zarqa','9631486451',3, 'laboratory') RETURNING *

INSERT INTO provider_info  (img,bio,qualifications, provider_id) VALUES ('','test ','test',21) RETURNING *

 INSERT INTO services (service,price_per_hour,provider_id) VALUES ('CBC (Complete Blood Count),ESR (Erythrocyte Sedimentation Rate)Test',15,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('TSH (Thyroid Stimulating Hormone),FT3 (Free Triiodothyronine),FT4 (Free Thyroxine)',20,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Hemoglobin A1C(HBA1C),FBC(Fasting Blood Sugur)',15,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Vitamin B12,Ferritin,Vitamin D3',35,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Lipid Panel(HDL,LDL,TRIG,CHOL)',30,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Kidny Function Test (Urea,Createnine) ,Electrolyts (Na,K,CL)',10,8) RETURNING *
--===========================================================
 INSERT INTO providers  (fname,
  lname,
  birthdate,
  gender,
  email,
  password,
  city,
  phonenumber,
  role_id,
  category_id) VALUES('Shahed','Muhamad','1996-3-20','female','shahed@gmail.com','12369874','Maan','9631486451',3, 'laboratory') RETURNING *

  INSERT INTO provider_info  (img,bio,qualifications, provider_id) VALUES ('','test ','test',21) RETURNING *

 INSERT INTO services (service,price_per_hour,provider_id) VALUES ('CBC (Complete Blood Count),ESR (Erythrocyte Sedimentation Rate)Test',15,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('TSH (Thyroid Stimulating Hormone),FT3 (Free Triiodothyronine),FT4 (Free Thyroxine)',20,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Hemoglobin A1C(HBA1C),FBC(Fasting Blood Sugur)',15,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Vitamin B12,Ferritin,Vitamin D3',35,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Lipid Panel(HDL,LDL,TRIG,CHOL)',30,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Kidny Function Test (Urea,Createnine) ,Electrolyts (Na,K,CL)',10,8) RETURNING *
  --============================================================

 INSERT INTO providers  (fname,
  lname,
  birthdate,
  gender,
  email,
  password,
  city,
  phonenumber,
  role_id,
  category_id) VALUES('Duha','Jehad','2000-7-7','female','duha@gmail.com','12369874','Amman','9631486451',3, 'laboratory') RETURNING *

INSERT INTO provider_info  (img,bio,qualifications, provider_id) VALUES ('','test ','test',21) RETURNING *

 INSERT INTO services (service,price_per_hour,provider_id) VALUES ('CBC (Complete Blood Count),ESR (Erythrocyte Sedimentation Rate)Test',15,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('TSH (Thyroid Stimulating Hormone),FT3 (Free Triiodothyronine),FT4 (Free Thyroxine)',20,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Hemoglobin A1C(HBA1C),FBC(Fasting Blood Sugur)',15,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Vitamin B12,Ferritin,Vitamin D3',35,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Lipid Panel(HDL,LDL,TRIG,CHOL)',30,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Kidny Function Test (Urea,Createnine) ,Electrolyts (Na,K,CL)',10,8) RETURNING *
--==============================================================


 INSERT INTO providers  (fname,
  lname,
  birthdate,
  gender,
  email,
  password,
  city,
  phonenumber,
  role_id,
  category_id) VALUES('Mamon','Subhi','1996-3-20','male','mamon@gmail.com','12369874','Aqaba','9631486451',3, 'laboratory') RETURNING *

  INSERT INTO provider_info  (img,bio,qualifications, provider_id) VALUES ('','test ','test',21) RETURNING *

 INSERT INTO services (service,price_per_hour,provider_id) VALUES ('CBC (Complete Blood Count),ESR (Erythrocyte Sedimentation Rate)Test',15,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('TSH (Thyroid Stimulating Hormone),FT3 (Free Triiodothyronine),FT4 (Free Thyroxine)',20,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Hemoglobin A1C(HBA1C),FBC(Fasting Blood Sugur)',15,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Vitamin B12,Ferritin,Vitamin D3',35,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Lipid Panel(HDL,LDL,TRIG,CHOL)',30,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Kidny Function Test (Urea,Createnine) ,Electrolyts (Na,K,CL)',10,8) RETURNING *
  --================================================================

 INSERT INTO providers  (fname,
  lname,
  birthdate,
  gender,
  email,
  password,
  city,
  phonenumber,
  role_id,
  category_id) VALUES('Mustafa','Khaled','1998-5-20','male','mustafa@gmail.com','12369874','Amman','9631486451',3, 'laboratory') RETURNING *

INSERT INTO provider_info  (img,bio,qualifications, provider_id) VALUES ('','test ','test',21) RETURNING *

 INSERT INTO services (service,price_per_hour,provider_id) VALUES ('CBC (Complete Blood Count),ESR (Erythrocyte Sedimentation Rate)Test',15,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('TSH (Thyroid Stimulating Hormone),FT3 (Free Triiodothyronine),FT4 (Free Thyroxine)',20,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Hemoglobin A1C(HBA1C),FBC(Fasting Blood Sugur)',15,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Vitamin B12,Ferritin,Vitamin D3',35,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Lipid Panel(HDL,LDL,TRIG,CHOL)',30,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Kidny Function Test (Urea,Createnine) ,Electrolyts (Na,K,CL)',10,8) RETURNING *
--============================ Physiotherapy ==================
 INSERT INTO providers  (fname,
  lname,
  birthdate,
  gender,
  email,
  password,
  city,
  phonenumber,
  role_id,
  category_id) VALUES('Mustafa','Khaled','1998-5-20','male','mustafa22@gmail.com','12369874','Amman','9631486451',3, 'Physiotherapy') RETURNING *

INSERT INTO provider_info  (img,bio,qualifications, provider_id) VALUES ('','test ','test',21) RETURNING *

 INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Sports Physiotherapy',10,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Geriatric Physiotherapy',20,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Orthopedic Physiotherapy',15,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Pediatric Physiotherapy',35,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Neurological Physiotherapy',30,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Cardiovascular Physiotherapy',40,8) RETURNING *
--============================================================
 INSERT INTO providers  (fname,
  lname,
  birthdate,
  gender,
  email,
  password,
  city,
  phonenumber,
  role_id,
  category_id) VALUES('Khaldon','Marar','1998-5-20','male','khaldon@gmail.com','12369874','Az-zarqa','9631486451',3, 'Physiotherapy') RETURNING *

INSERT INTO provider_info  (img,bio,qualifications, provider_id) VALUES ('','test ','test',21) RETURNING *
 INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Sports Physiotherapy',10,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Geriatric Physiotherapy',20,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Orthopedic Physiotherapy',15,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Pediatric Physiotherapy',35,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Neurological Physiotherapy',30,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Cardiovascular Physiotherapy',40,8) RETURNING *
--===========================================================
 INSERT INTO providers  (fname,
  lname,
  birthdate,
  gender,
  email,
  password,
  city,
  phonenumber,
  role_id,
  category_id) VALUES('Ammer','Mohsen','1995-8-10','male','Ammer@gmail.com','12369874','Mafraq','9631486451',3, 'Physiotherapy') RETURNING *

INSERT INTO provider_info  (img,bio,qualifications, provider_id) VALUES ('','test ','test',21) RETURNING *
 INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Sports Physiotherapy',10,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Geriatric Physiotherapy',20,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Orthopedic Physiotherapy',15,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Pediatric Physiotherapy',35,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Neurological Physiotherapy',30,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Cardiovascular Physiotherapy',40,8) RETURNING *
--============================================================
 INSERT INTO providers  (fname,
  lname,
  birthdate,
  gender,
  email,
  password,
  city,
  phonenumber,
  role_id,
  category_id) VALUES('Zaid','Ammar','1999-5-20','male','zaid@gmail.com','12369874','As-salt','9631486451',3, 'Physiotherapy') RETURNING *

  INSERT INTO provider_info  (img,bio,qualifications, provider_id) VALUES ('','test ','test',21) RETURNING *

   INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Sports Physiotherapy',10,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Geriatric Physiotherapy',20,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Orthopedic Physiotherapy',15,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Pediatric Physiotherapy',35,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Neurological Physiotherapy',30,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Cardiovascular Physiotherapy',40,8) RETURNING *
  --===========================================================

 INSERT INTO providers  (fname,
  lname,
  birthdate,
  gender,
  email,
  password,
  city,
  phonenumber,
  role_id,
  category_id) VALUES('Mrah','Khaled','1995-5-5','female','marah@gmail.com','12369874','Al-karak','9631486451',3, 'Physiotherapy') RETURNING *

INSERT INTO provider_info  (img,bio,qualifications, provider_id) VALUES ('','test ','test',21) RETURNING *
 INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Sports Physiotherapy',10,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Geriatric Physiotherapy',20,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Orthopedic Physiotherapy',15,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Pediatric Physiotherapy',35,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Neurological Physiotherapy',30,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Cardiovascular Physiotherapy',40,8) RETURNING *
--==============================================================
 INSERT INTO providers  (fname,
  lname,
  birthdate,
  gender,
  email,
  password,
  city,
  phonenumber,
  role_id,
  category_id) VALUES('Sabren','Mohamad','2000-9-20','female','sabren@gmail.com','12369874','Jarash','9631486451',3, 'Physiotherapy') RETURNING *

INSERT INTO provider_info  (img,bio,qualifications, provider_id) VALUES ('','test ','test',21) RETURNING *
 INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Sports Physiotherapy',10,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Geriatric Physiotherapy',20,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Orthopedic Physiotherapy',15,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Pediatric Physiotherapy',35,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Neurological Physiotherapy',30,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Cardiovascular Physiotherapy',40,8) RETURNING *
--========================	Occupational Therapy ===================
	
INSERT INTO providers  (fname,
  lname,
  birthdate,
  gender,
  email,
  password,
  city,
  phonenumber,
  role_id,
  category_id) VALUES('Amal','Gazi','2000-9-20','female','amal@gmail.com','12369874','Az-zarqa','9631486451',3, 'Occupational Therapy') RETURNING *


INSERT INTO provider_info  (img,bio,qualifications, provider_id) VALUES ('','test ','test',21) RETURNING *

 INSERT INTO services (service,price_per_hour,provider_id) VALUES ('working at a job',25,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('getting together with friends',20,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('taking a class, cooking a meal',15,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('getting dressed, playing a sport',35,8) RETURNING *
 
--===============================================================
INSERT INTO providers  (fname,
  lname,
  birthdate,
  gender,
  email,
  password,
  city,
  phonenumber,
  role_id,
  category_id) VALUES('Afnan','Mohamad','2000-2-20','female','afnan@gmail.com','12369874','Amman','9631486451',3, 'Occupational Therapy') RETURNING *

INSERT INTO provider_info  (img,bio,qualifications, provider_id) VALUES ('','test ','test',21) RETURNING *

 INSERT INTO services (service,price_per_hour,provider_id) VALUES ('working at a job',25,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('getting together with friends',20,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('taking a class, cooking a meal',15,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('getting dressed, playing a sport',35,8) RETURNING *
--============================================================
INSERT INTO providers  (fname,
  lname,
  birthdate,
  gender,
  email,
  password,
  city,
  phonenumber,
  role_id,
  category_id) VALUES('Aya','Abdulhaq','1997-7-20','female','aya@gmail.com','12369874','Mafraq','9631486451',3, 'Occupational Therapy') RETURNING *

INSERT INTO provider_info  (img,bio,qualifications, provider_id) VALUES ('','test ','test',21) RETURNING *

 INSERT INTO services (service,price_per_hour,provider_id) VALUES ('working at a job',25,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('getting together with friends',20,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('taking a class, cooking a meal',15,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('getting dressed, playing a sport',35,8) RETURNING *
--==========================================================
INSERT INTO providers  (fname,
  lname,
  birthdate,
  gender,
  email,
  password,
  city,
  phonenumber,
  role_id,
  category_id) VALUES('Mutaz','Mansour','1992-9-20','male','mutaz@gmail.com','12369874','Jarash','9631486451',3, 'Occupational Therapy') RETURNING *

INSERT INTO provider_info  (img,bio,qualifications, provider_id) VALUES ('','test ','test',21) RETURNING *

 INSERT INTO services (service,price_per_hour,provider_id) VALUES ('working at a job',25,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('getting together with friends',20,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('taking a class, cooking a meal',15,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('getting dressed, playing a sport',35,8) RETURNING *
--===============================================================
INSERT INTO providers  (fname,
  lname,
  birthdate,
  gender,
  email,
  password,
  city,
  phonenumber,
  role_id,
  category_id) VALUES('Wael','Hakem','1996-9-20','male','wael@gmail.com','12369874','Ajlone','9631486451',3, 'Occupational Therapy') RETURNING *

INSERT INTO provider_info  (img,bio,qualifications, provider_id) VALUES ('','test ','test',21) RETURNING *
 INSERT INTO services (service,price_per_hour,provider_id) VALUES ('working at a job',25,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('getting together with friends',20,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('taking a class, cooking a meal',15,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('getting dressed, playing a sport',35,8) RETURNING *
--============================================================
INSERT INTO providers  (fname,
  lname,
  birthdate,
  gender,
  email,
  password,
  city,
  phonenumber,
  role_id,
  category_id) VALUES('Adel','Gazi','2000-9-20','male','adel@gmail.com','12369874','Amman','9631486451',3, 'Occupational Therapy') RETURNING *

INSERT INTO provider_info  (img,bio,qualifications, provider_id) VALUES ('','test ','test',21) RETURNING *
 INSERT INTO services (service,price_per_hour,provider_id) VALUES ('working at a job',25,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('getting together with friends',20,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('taking a class, cooking a meal',15,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('getting dressed, playing a sport',35,8) RETURNING *
--========================	Speech Therapy =================================

INSERT INTO providers  (fname,
  lname,
  birthdate,
  gender,
  email,
  password,
  city,
  phonenumber,
  role_id,
  category_id) VALUES('Ahmed','Hejazi','1996-6-2','male','ahmed11@gmail.com','12369874','Az-zarqa','9631486451',3, 'Speech Therapy') RETURNING *

INSERT INTO provider_info  (img,bio,qualifications, provider_id) VALUES ('','test ','test',21) RETURNING *

 INSERT INTO services (service,price_per_hour,provider_id) VALUES ('
Perception exercises, for example to differentiate between individual sounds and syllables.',25,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Exercises to produce certain sounds and improve the fluency of speech.',20,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Exercises to improve breathing, swallowing and the voice',15,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('facilitate a learners use of natural gestures by providing communication opportunities while playing with a child on a structured learning task',35,8) RETURNING *
--================================================================
INSERT INTO providers  (fname,
  lname,
  birthdate,
  gender,
  email,
  password,
  city,
  phonenumber,
  role_id,
  category_id) VALUES('Alia','Yousef','2000-2-15','female','Alia@gmail.com','12369874','Az-zarqa','9631486451',3, 'Speech Therapy') RETURNING *

INSERT INTO provider_info  (img,bio,qualifications, provider_id) VALUES ('','test ','test',21) RETURNING *


 INSERT INTO services (service,price_per_hour,provider_id) VALUES ('
Perception exercises, for example to differentiate between individual sounds and syllables.',25,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Exercises to produce certain sounds and improve the fluency of speech.',20,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Exercises to improve breathing, swallowing and the voice',15,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('facilitate a learners use of natural gestures by providing communication opportunities while playing with a child on a structured learning task',35,8) RETURNING *
--====================================================================
INSERT INTO providers  (fname,
  lname,
  birthdate,
  gender,
  email,
  password,
  city,
  phonenumber,
  role_id,
  category_id) VALUES('Omer','Nafeth','1996-6-2','male','omer@gmail.com','12369874','Amman','9631486451',3, 'Speech Therapy') RETURNING *

INSERT INTO provider_info  (img,bio,qualifications, provider_id) VALUES ('','test ','test',21) RETURNING *


 INSERT INTO services (service,price_per_hour,provider_id) VALUES ('
Perception exercises, for example to differentiate between individual sounds and syllables.',25,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Exercises to produce certain sounds and improve the fluency of speech.',20,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Exercises to improve breathing, swallowing and the voice',15,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('facilitate a learners use of natural gestures by providing communication opportunities while playing with a child on a structured learning task',35,8) RETURNING *
--===================================================================
INSERT INTO providers  (fname,
  lname,
  birthdate,
  gender,
  email,
  password,
  city,
  phonenumber,
  role_id,
  category_id) VALUES('Subhi','Hamed','1996-6-30','male','subhi@gmail.com','12369874','As-salt','9631486451',3, 'Speech Therapy') RETURNING *

INSERT INTO provider_info  (img,bio,qualifications, provider_id) VALUES ('','test ','test',21) RETURNING *


 INSERT INTO services (service,price_per_hour,provider_id) VALUES ('
Perception exercises, for example to differentiate between individual sounds and syllables.',25,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Exercises to produce certain sounds and improve the fluency of speech.',20,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Exercises to improve breathing, swallowing and the voice',15,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('facilitate a learners use of natural gestures by providing communication opportunities while playing with a child on a structured learning task',35,8) RETURNING *
--======================================================================
INSERT INTO providers  (fname,
  lname,
  birthdate,
  gender,
  email,
  password,
  city,
  phonenumber,
  role_id,
  category_id) VALUES('Sara','Abdullah','1996-6-2','female','sara@gmail.com','12369874','Amman','9631486451',3, 'Speech Therapy') RETURNING *

INSERT INTO provider_info  (img,bio,qualifications, provider_id) VALUES ('','test ','test',21) RETURNING *


 INSERT INTO services (service,price_per_hour,provider_id) VALUES ('
Perception exercises, for example to differentiate between individual sounds and syllables.',25,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Exercises to produce certain sounds and improve the fluency of speech.',20,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Exercises to improve breathing, swallowing and the voice',15,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('facilitate a learners use of natural gestures by providing communication opportunities while playing with a child on a structured learning task',35,8) RETURNING *
--===================================================================
INSERT INTO providers  (fname,
  lname,
  birthdate,
  gender,
  email,
  password,
  city,
  phonenumber,
  role_id,
  category_id) VALUES('Amera','Adel','2001-6-2','female','amera@gmail.com','12369874','Ajlone','9631486451',3, 'Speech Therapy') RETURNING *

INSERT INTO provider_info  (img,bio,qualifications, provider_id) VALUES ('','test ','test',21) RETURNING *


 INSERT INTO services (service,price_per_hour,provider_id) VALUES ('
Perception exercises, for example to differentiate between individual sounds and syllables.',25,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Exercises to produce certain sounds and improve the fluency of speech.',20,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('Exercises to improve breathing, swallowing and the voice',15,8) RETURNING *
  INSERT INTO services (service,price_per_hour,provider_id) VALUES ('facilitate a learners use of natural gestures by providing communication opportunities while playing with a child on a structured learning task',35,8) RETURNING *
--========================= Babysitting =============================
 INSERT INTO providers  (fname,
  lname,
  birthdate,
  gender,
  email,
  password,
  city,
  phonenumber,
  role_id,
  category_id) VALUES('Malak','Mohamad','1996-6-2','female','malak@gmail.com','12369874','Amman','9631486451',3, 'Babysitting') RETURNING *

INSERT INTO provider_info  (img,bio,qualifications, provider_id) VALUES ('','test ','test',21) RETURNING *


 INSERT INTO services (service,price_per_hour,provider_id) VALUES ('
Day Babysitting',25,8) RETURNING *
 INSERT INTO services (service,price_per_hour,provider_id) VALUES ('
Night Babysitting',40,8) RETURNING *
INSERT INTO services (service,price_per_hour,provider_id) VALUES ('
OverNight Babysitting',50,8) RETURNING *
--===============================================================
INSERT INTO providers  (fname,
  lname,
  birthdate,
  gender,
  email,
  password,
  city,
  phonenumber,
  role_id,
  category_id) VALUES('Ghofran','Mamoun','2000-6-2','female','ghofran@gmail.com','12369874','Az-zarqa','9631486451',3, 'Babysitting') RETURNING *

INSERT INTO provider_info  (img,bio,qualifications, provider_id) VALUES ('','test ','test',21) RETURNING *

 INSERT INTO services (service,price_per_hour,provider_id) VALUES ('
Day Babysitting',25,8) RETURNING *
 INSERT INTO services (service,price_per_hour,provider_id) VALUES ('
Night Babysitting',40,8) RETURNING *
INSERT INTO services (service,price_per_hour,provider_id) VALUES ('
OverNight Babysitting',50,8) RETURNING *
--==========================================================
INSERT INTO providers  (fname,
  lname,
  birthdate,
  gender,
  email,
  password,
  city,
  phonenumber,
  role_id,
  category_id) VALUES('Alaa','Salem','1995-2-2','female','alaa@gmail.com','12369874','As-salt','9631486451',3, 'Babysitting') RETURNING *

INSERT INTO provider_info  (img,bio,qualifications, provider_id) VALUES ('','test ','test',21) RETURNING *
--======================================================
INSERT INTO providers  (fname,
  lname,
  birthdate,
  gender,
  email,
  password,
  city,
  phonenumber,
  role_id,
  category_id) VALUES('ayat','Mohamad','2000-7-2','female','ayat@gmail.com','12369874','Ajlone','9631486451',3, 'Babysitting') RETURNING *

INSERT INTO provider_info  (img,bio,qualifications, provider_id) VALUES ('','test ','test',21) RETURNING *

--=======================================================
INSERT INTO providers  (fname,
  lname,
  birthdate,
  gender,
  email,
  password,
  city,
  phonenumber,
  role_id,
  category_id) VALUES('Mnar','Ali','1999-4-2','female','mnar@gmail.com','12369874','Mafraq','9631486451',3, 'Babysitting') RETURNING *

INSERT INTO provider_info  (img,bio,qualifications, provider_id) VALUES ('','test ','test',21) RETURNING *



--====================== ROLE & permition ===============================

INSERT INTO roles (role) VALUES ('admin') RETURNING *

INSERT INTO permissions (permission) VALUES ('ADD_CATEGORY') RETURNING *;
INSERT INTO permissions (permission) VALUES ('DELETE_PROVIDER') RETURNING *;
INSERT INTO permissions (permission) VALUES ('SHOW_ADMIN_PANEL') RETURNING *;



INSERT INTO roles (role) VALUES ('user') RETURNING *

INSERT INTO permissions (permission) VALUES ('ADD_ORDER') RETURNING *;
INSERT INTO permissions (permission) VALUES ('ADD_HISTORY') RETURNING *;
INSERT INTO permissions (permission) VALUES ('DELETE_HISTORY') RETURNING *;



INSERT INTO roles (role) VALUES ('provider') RETURNING *

INSERT INTO permissions (permission) VALUES ('ADD_NOTE') RETURNING *;
INSERT INTO permissions (permission) VALUES ('ADD_SERVICE') RETURNING *;
INSERT INTO permissions (permission) VALUES ('ADD_SCHDEUAL') RETURNING *;


INSERT INTO users (firstName ,lastName ,birthDate ,city ,email,password ,phoneNumber ,gender,role_id) VALUES ('Duha','Jehad','2000-7-7','amman','duhauser@gmail.com','123456','0785221564','female','2')

-- CREATE TABLE categories(
-- category_id SERIAL PRIMARY KEY NOT NULL ,
-- category VARCHAR(255) UNIQUE,
-- is_deleted SMALLINT DEFAULT 0

-- );




-- psql -U postgres -f ./models/database.sql