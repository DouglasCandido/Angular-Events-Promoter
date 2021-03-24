drop schema db_eventspromoter;
create schema db_eventspromoter;
use db_eventspromoter; 

create table if not exists uf
(

    id integer not null unique auto_increment,
    sigla char(2) not null unique,
    nome varchar(20) not null unique,
    primary key(sigla)

);

select * from uf;

drop table uf;

insert into uf(sigla, nome) values('AC','Acre');
insert into uf(sigla, nome) values('AL','Alagoas');
insert into uf(sigla, nome) values('AP','Amapá');
insert into uf(sigla, nome) values('AM','Amazonas');
insert into uf(sigla, nome) values('BA','Bahia');
insert into uf(sigla, nome) values('CE','Ceará');
insert into uf(sigla, nome) values('DF','Distrito Federal');
insert into uf(sigla, nome) values('ES','Espírito Santo');
insert into uf(sigla, nome) values('GO','Goiás');
insert into uf(sigla, nome) values('MA','Maranhão');
insert into uf(sigla, nome) values('MT','Mato Grosso');
insert into uf(sigla, nome) values('MS','Mato Grosso do Sul');
insert into uf(sigla, nome) values('MG','Minas Gerais');
insert into uf(sigla, nome) values('PA','Pará');
insert into uf(sigla, nome) values('PB','Paraíba');
insert into uf(sigla, nome) values('PR','Paraná');
insert into uf(sigla, nome) values('PE','Pernambuco');
insert into uf(sigla, nome) values('PI','Piauí');
insert into uf(sigla, nome) values('RJ','Rio de Janeiro');
insert into uf(sigla, nome) values('RN','Rio Grande do Norte');
insert into uf(sigla, nome) values('RS','Rio Grande do Sul');
insert into uf(sigla, nome) values('RO','Rondônia');
insert into uf(sigla, nome) values('RR','Roraima');
insert into uf(sigla, nome) values('SC','Santa Catarina');
insert into uf(sigla, nome) values('SP','São Paulo');
insert into uf(sigla, nome) values('SE','Sergipe');
insert into uf(sigla, nome) values('TO','Tocantins');

create table if not exists enthusiast
(

    id integer not null unique auto_increment,
    name_enthusiast varchar(100),
    cpf varchar(14) not null unique,
    sex char(1) not null,
    birthDate date not null,
    username varchar(16) not null unique,
    password_enthusiast varchar(16) not null,
    contactEmail varchar(20) not null unique,
    contactPhone varchar(13) not null unique,
    state char(2) not null,
    city varchar(56) not null,
    district varchar(56) not null,
    street varchar(56) not null,
    number_place integer not null,
    zipCode varchar(9) not null,
    registrationDate date not null,
    primary key(cpf),
    foreign key(state) references uf(sigla) 

);

select * from enthusiast;

drop table enthusiast;

create table if not exists promoter
(

    id integer not null unique auto_increment,
    name_promoter varchar(100),
    cnpj varchar(18) not null unique,
    sex char(1) not null,
    birthDate date not null,
    username varchar(16) not null unique,
    password_promoter varchar(16) not null,
    contactEmail varchar(20) not null unique,
    contactPhone varchar(13) not null unique,
    state char(2) not null,
    city varchar(56) not null,
    district varchar(56) not null,
    street varchar(56) not null,
    number_place integer not null,
    zipCode varchar(9) not null,
    site varchar(30) unique,
    registrationDate date not null,
    primary key(cnpj),
    foreign key(state) references uf(sigla) 

);

select * from promoter;

drop table promoter;

create table if not exists event
(
    id integer not null unique auto_increment,
    cnpj_promoter varchar(18) not null,
    name_event varchar(50) not null,
    description_event varchar(50) not null,
    theme varchar(100) not null,
    state char(2) not null,
    city varchar(56) not null,
    district varchar(56) not null,
    street varchar(56) not null,
    number_place integer not null,
    zipCode varchar(9) not null,
    latitude numeric(10, 6) not null,
    longitude numeric(10, 6) not null,
    site varchar(30) unique,
    eventDate date not null,
    primary key(id),
    foreign key (cnpj_promoter) references promoter(cnpj)
);

select * from event;

drop table event;

create table if not exists comment
(
    id integer not null unique auto_increment,
    comment_about_the_event varchar(100) not null,
    cpf_enthusiast varchar(14) not null,
    id_event integer not null,
    commentRegistrationDate date not null,
    primary key(id),
    foreign key(cpf_enthusiast) references enthusiast(cpf),
    foreign key(id_event) references event(id)
);

select * from comment;

drop table comment;

create table if not exists measureOfInterestInTheEvent
(
    id integer not null unique auto_increment,
    cpf_enthusiast varchar(14) not null,
    id_event integer not null,
    numberOfEnthusiastsWhoDeclaredInterestInAttending integer default 0,
    likes integer default 0,
    dislikes integer default 0,
    primary key(id),
    foreign key(cpf_enthusiast) references enthusiast(cpf),
    foreign key(id_event) references event(id)
);

select * from measureOfInterestInTheEvent;

drop table measureOfInterestInTheEvent;


