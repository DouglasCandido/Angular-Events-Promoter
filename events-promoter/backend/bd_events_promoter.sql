# drop schema bd_events_promoter;

# create schema bd_events_promoter;

use bd_events_promoter; 

# ALTER DATABASE bd_events_promoter CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

# SET @@global.time_zone = '-03:00';

# O Script de criação comentado abaixo está obsoleto
/*
# Tabela utilizada para armazenar os estados cadastrados no sistema
create table if not exists ufs(

    # codigo int not null auto_increment,
    sigla varchar(2) not null,
    nome varchar(255) not null,
    primary key(sigla) 
    
);

insert into ufs(sigla, nome) values("AC","Acre");
insert into ufs(sigla, nome) values("AL","Alagoas");
insert into ufs(sigla, nome) values("AP","Amapá");
insert into ufs(sigla, nome) values("AM","Amazonas");
insert into ufs(sigla, nome) values("BA","Bahia");
insert into ufs(sigla, nome) values("CE","Ceará");
insert into ufs(sigla, nome) values("DF","Distrito Federal");
insert into ufs(sigla, nome) values("ES","Espírito Santo");
insert into ufs(sigla, nome) values("GO","Goiás");
insert into ufs(sigla, nome) values("MA","Maranhão");
insert into ufs(sigla, nome) values("MT","Mato Grosso");
insert into ufs(sigla, nome) values("MS","Mato Grosso do Sul");
insert into ufs(sigla, nome) values("MG","Minas Gerais");
insert into ufs(sigla, nome) values("PA","Pará");
insert into ufs(sigla, nome) values("PB","Paraíba");
insert into ufs(sigla, nome) values("PR","Paraná");
insert into ufs(sigla, nome) values("PE","Pernambuco");
insert into ufs(sigla, nome) values("PI","Piauí");
insert into ufs(sigla, nome) values("RJ","Rio de Janeiro");
insert into ufs(sigla, nome) values("RN","Rio Grande do Norte");
insert into ufs(sigla, nome) values("RS","Rio Grande do Sul");
insert into ufs(sigla, nome) values("RO","Rondônia");
insert into ufs(sigla, nome) values("RR","Roraima");
insert into ufs(sigla, nome) values("SC","Santa Catarina");
insert into ufs(sigla, nome) values("SP","São Paulo");
insert into ufs(sigla, nome) values("SE","Sergipe");
insert into ufs(sigla, nome) values("TO","Tocantins");

create table if not exists enthusiasts
(

    id integer not null unique auto_increment,
    name_enthusiast varchar(100),
    cpf varchar(14) not null unique,
    sex char(1) not null,
    birthDate date not null,
    username varchar(16) not null unique,
    password_enthusiast varchar(16) not null,
    contactEmail varchar(30) not null unique,
    contactPhone varchar(11) not null unique,
    state char(2) not null,
    city varchar(56) not null,
    district varchar(56) not null,
    street varchar(56) not null,
    number_place integer not null,
    zipCode varchar(9) not null,
    registrationDate datetime not null,
    primary key(cpf),
    foreign key(state) references ufs(sigla) 

);

create table if not exists promoters
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
    registrationDate datetime not null,
    primary key(cnpj),
    foreign key(state) references ufs(sigla) 

);

create table if not exists events
(
    id integer not null unique auto_increment,
    cnpj_promoter varchar(18) not null,
    name_event varchar(50) not null,
    description_event varchar(100) not null,
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
    eventDate datetime not null,
    primary key(id),
    foreign key (cnpj_promoter) references promoters(cnpj),
    foreign key (state) references ufs(sigla)
);

create table if not exists comments
(
    id integer not null unique auto_increment,
    comment_about_the_event varchar(100) not null,
    cpf_enthusiast varchar(14) not null,
    id_event integer not null,
    commentRegistrationDate datetime not null,
    primary key(id),
    foreign key(cpf_enthusiast) references enthusiasts(cpf),
    foreign key(id_event) references events(id)
);

create table if not exists measureOfInterestInTheEvents
(
    id integer not null unique auto_increment,
    id_event integer not null,
    numberOfEnthusiastsWhoDeclaredInterestInAttending integer default 0,
    likes integer default 0,
    dislikes integer default 0,
    primary key(id),
    foreign key(id_event) references events(id)
);

# Tabela utilizada para armazenar as inscrições dos entusiastas em eventos
create table if not exists subscriptions
(

	id integer not null unique auto_increment,
    id_event integer not null,
    cpf_enthusiast varchar(14) not null,
    subscriptionRegistrationDate datetime not null,
	primary key(id),
    foreign key(cpf_enthusiast) references enthusiasts(cpf),
    foreign key(id_event) references events(id)
    
);
*/

# Chaves Estrangeiras
# ALTER TABLE enthusiasts ADD FOREIGN KEY (state) REFERENCES ufs(sigla);

# ALTER TABLE promoters ADD FOREIGN KEY (state) REFERENCES ufs(sigla); 

ALTER TABLE events ADD FOREIGN KEY (cnpj_promoter) REFERENCES promoters(cnpj); 
# ALTER TABLE events ADD FOREIGN KEY (state) REFERENCES ufs(sigla); 

ALTER TABLE comments ADD FOREIGN KEY (cpf_enthusiast) REFERENCES enthusiasts(cpf);
ALTER TABLE comments ADD FOREIGN KEY (id_event) REFERENCES events(id);

ALTER TABLE measureofinterestintheevents ADD FOREIGN KEY (id_event) REFERENCES events(id); 

ALTER TABLE subscriptions ADD FOREIGN KEY (cpf_enthusiast) REFERENCES enthusiasts(cpf); 
ALTER TABLE subscriptions ADD FOREIGN KEY (id_event) REFERENCES events(id); 







