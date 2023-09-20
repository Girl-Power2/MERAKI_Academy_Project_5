1-create tables roles{

role_id SERIAL PRIMARY KEY

role VARCHAR(255)

}
2-create table permissions{
permission_id SERIAL PRIMARY KEY

permission VARCHAR(255)
}

3-create table role_permissions{

table_id SERIAL PRIMARY KEY

role_id int
FOREIGN KEY REF (roles)
permission_id int
FOREIGN KEY REF (permissions)
}

1-create table users{

user_id SERIAL PRIMARY KEY
fName VARCHAR(255)
lName VARCHAR(255)
birthdate DATE
email VARCHAR(255)
password VARCHAR(255)
phoneNumber VARCHAR(100)
city VARCHAR(255)
gender VARCHAR(255)
role_id INT
FOREIGN KEY REF( roles )
is_deleted DEFAULT 0
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>
2-create table providers{

provider_id SERIAL PRIMARY KEY
fName VARCHAR(255)
lName VARCHAR(255)
birthDAte DATE
email VARCHAR(255)
password VARCHAR(255)
phoneNumber VARCHAR(100)
city VARCHAR(255)
gender  VARCHAR(255)
role_id INT
FOREIGN KEY REF( roles )
category_id INT
FOREIGN KEY REF( categories )
is_deleted DEFAULT 0
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>
3-create table services{

service_id SERIAL PRIMARY KEY
service VARCHAR(255)
price-per-hour VARCHAR(255)
is_deleted DEFAULT 0
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>
4-create table orders{

order_id SERIAL PRIMARY KEY
service _id INT
FOREIGN KEY REF( services )
provider_id INT
FOREIGN KEY REF( providers )
user_id INT
FOREIGN KEY REF( users)
created_at TIMESTAMP DEFAULT NOW()
is_deleted DEFAULT 0
status DEFAULT “pending”
schedule_id INT
FOREIGN KEY REF( schedule )
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>
5-create table provider_info{

provider_id SERIAL PRIMARY KEY
img TEXT
bio MEDIUMTEXT
qualifications MEDIUMTEXT
service_id INT
FOREIGN KEY REF( services)
is_deleted DEFAULT 0
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>
6-create table provider_notes{
providerNote_id SERIAL PRIMARY KEY
user_id
FOREIGN KEY REF( users)
provider_id
FOREIGN KEY REF( providers)
visitied_on TIMESTAMP DEFAULT NOW ()
note MEDUIMTEXT
is_deleted DEFAULT 0
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>
7-create table medical_history{
medical_history_id SERIAL PRIMARY KEY
user_id
FOREIGN KEY REF( users)
history MEDUIM TEXT
medications MEDUIM TEXT
chronic_diseases MEDUIMTEXT
is_deleted DEFAULT 0
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>
7-create table categories{
category_id SERIAL PRIMARY KEY

category VARCHAR(255)
is_deleted DEFAULT 0
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>
7-create table schedule{

schedule_id SERIAL PRIMARY KEY

date DATE 
provider_id INT
is_deleted DEFAULT 0
booked DEFAULT false
}