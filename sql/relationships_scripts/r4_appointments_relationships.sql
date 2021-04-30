begin;
alter table agendamento add constraint fk_mentor foreign key(id_mentor) references usuarios(id);
alter table agendamento add	constraint fk_mentorado foreign key(id_mentorado) references usuarios(id);
alter table agendamento add	constraint fk_bloco_de_tempo foreign key(id_bloco_tempo) references bloco_tempo(id);
commit;
