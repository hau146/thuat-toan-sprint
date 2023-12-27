create database fashionable_footwear;

create table `rank`(
id int primary key auto_increment,
name varchar(50)
);

create table voucher_rank(
id int primary key auto_increment,
name varchar(255),
percentage_reduction int,
id_rank int,
foreign key(id_rank) references `rank`(id)
);

create table `role`(
id int primary key auto_increment,
name varchar(50)
);

create table account(
id int primary key auto_increment,
name varchar(50),
address varchar(255),
gender bit,
`date` date,
number_phone varchar(20),
email varchar(50),
avatar varchar(255),
id_rank int,
foreign key(id_rank) references `rank`(id),
id_role int,
foreign key(id_role) references `role`(id)
);

create table voucher(
id int primary key auto_increment,
name varchar(255),
percentage_reduction int,
id_account int,
foreign key(id_account) references account(id)
);

create table type_product(
id int primary key auto_increment,
name varchar(50)
);

create table product(
id int primary key auto_increment,
name varchar(50),
size int,
price double,
number_product int,
sell_number int default 0,
status_product bit,
shipping_cost double,
id_type_product int,
foreign key(id_type_product) references type_product(id)
);

create table image_product(
id int primary key auto_increment,
image varchar(255),
id_product int,
foreign key(id_product) references product(id)
);

create table color(
id int primary key auto_increment,
name_product varchar(50)
);
create table color_detail(
id int primary key auto_increment,
id_product int,
foreign key(id_product) references product(id),
id_color int,
foreign key(id_color) references color(id)
);

create table size(
id int primary key auto_increment,
size_number int
);
create table size_detail(
id int primary key auto_increment,
id_product int,
foreign key(id_product) references product(id),
id_size int,
foreign key(id_size) references size(id)
);

create table cart(
id int primary key auto_increment,
number_product int,
size_product int,
color varchar(50),
id_account int,
foreign key(id_account) references `account`(id),
id_product int,
foreign key(id_product) references product(id)
);

create table `order`(
id int primary key auto_increment,
order_date date,
total_price double,
id_account int,
foreign key(id_account) references `account`(id)
);

create table order_detail(
id int primary key auto_increment,
total_price double,
id_order int,
foreign key(id_order) references `order`(id),
number_product int,
size_product int,
color varchar(50),
id_product int,
foreign key(id_product) references product(id)
);

create table detail_order_status(
id int primary key auto_increment,
name_order_status varchar(255)
);

create table order_status(
id int primary key auto_increment,
id_detail_order_status int,
foreign key(id_detail_order_status) references detail_order_status(id),
id_account int,
foreign key(id_account) references `account`(id),
id_product int,
foreign key(id_product) references product(id)
);








