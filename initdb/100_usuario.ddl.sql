CREATE TABLE IF NOT EXISTS usuarios (
  id                       INT          NOT NULL auto_increment,
  email                    VARCHAR(250) NOT NULL,
  nome                     VARCHAR(250) NOT NULL,
  senha                    VARCHAR(250) NOT NULL,
  PRIMARY KEY (id)
);
