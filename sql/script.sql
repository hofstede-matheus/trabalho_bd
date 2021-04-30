
-- extensions
create extension if not exists "uuid-ossp";

-- types
create type tipo_perfil as enum ('MENTOR', 'MENTORADO'); 

-- tables
create table if not exists usuarios (
	id varchar primary key default uuid_generate_v4(),
	tipo tipo_perfil,
	email varchar not null,
	senha varchar not null,
	nome varchar(255) not null,
	nascimento timestamp not null
);
create table if not exists perfis (
	id varchar primary key default uuid_generate_v4(),
	id_usuario varchar not null
);
create table if not exists habilidades (
	id varchar primary key default uuid_generate_v4(),
	id_perfil  varchar not null,
	nome varchar not null
);
create table if not exists bloco_Tempo (
	id varchar not null primary key default uuid_generate_v4(),
	id_mentor varchar not null,
	inicio timestamp not null,
	fim timestamp not null
);
create table if not exists agendamento (
	id varchar primary key default uuid_generate_v4(), 
	id_mentor varchar not null, 
	id_mentorado varchar not null, 
	id_Bloco_Tempo varchar, 
	concluido boolean default false
);
create table if not exists avaliacao (
	id varchar primary key default uuid_generate_v4(), 
	id_agendamento varchar not null, 
	numero_Estrelas int not null
);

-- relations
alter table habilidades add constraint fk_perfis foreign key(id_perfil) references perfis(id);
alter table perfis 
add constraint fk_usuarios foreign key(id_usuario)
references usuarios(id);
alter table bloco_tempo add constraint fk_mentor foreign key(id_mentor) references usuarios(id);
begin;
alter table agendamento add constraint fk_mentor foreign key(id_mentor) references usuarios(id);
alter table agendamento add	constraint fk_mentorado foreign key(id_mentorado) references usuarios(id);
alter table agendamento add	constraint fk_bloco_de_tempo foreign key(id_bloco_tempo) references bloco_tempo(id);
commit;
alter table avaliacao  add constraint fk_agendamento foreign key(id_agendamento) references agendamento(id);