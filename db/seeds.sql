INSERT INTO department (name)
VALUES
('Operations'),
('Production'),
('Business Development'),
('IT'),
('Engineering Support');

INSERT INTO role (title, salary, department_id)
('President', 100000, 1),
('GM', 80000, 1),
('Technical Writer 1', 45000, 5),
('Document ConversionSpecialist', 24000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
('James', 'Fraser', 'jf@goldenbough.edu', 1, 0),
  ('Jack', 'London', 'jlondon@ualaska.edu', 2, 1),
  ('Robert', 'Bruce', 'rbruce@scotland.net', 3, 2),
  ('Peter', 'Greenaway', 'pgreenaway@postmodern.com', 4, 1),
  ('Derek', 'Jarman', 'djarman@prospectcottage.net', 4, 1),
  ('Paolo', 'Pasolini', 'ppasolini@salo.com', 3, 2),

