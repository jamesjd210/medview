CREATE TYPE Provider_Enum AS ENUM (
    'hospital',
    'dentistry',
    'primary care clinic',
    'urgent care clinic',
    'convenience clinic',
    'imaging center',
    'laboratory',
    'supplier',
    'specialty center',
    'other'
);

CREATE TABLE Providers (
    name VARCHAR(255) NOT NULL UNIQUE,
    address VARCHAR(255) NOT NULL UNIQUE,
    type Provider_Enum NOT NULL,
    open_time TIME WITH TIME ZONE,
    close_time TIME WITH TIME ZONE,

    pk_providers SERIAL,
    PRIMARY KEY (pk_providers)
);

CREATE TABLE Insurers (
    name VARCHAR(255) NOT NULL UNIQUE,

    pk_insurers SERIAL,
    PRIMARY KEY (pk_insurers)
);

-- Association class between Providers and Insurers
CREATE TABLE Acceptance (
    fk_provider INTEGER,
    fk_insurer INTEGER,

    FOREIGN KEY (fk_provider) REFERENCES Providers(pk_providers),
    FOREIGN KEY (fk_insurer) REFERENCES Insurers(pk_insurers),
    PRIMARY KEY (fk_provider, fk_insurer)
);

CREATE TABLE Services (
    name VARCHAR(255) NOT NULL,

    fk_provider INTEGER,
    pk_services SERIAL,

    FOREIGN KEY (fk_provider) REFERENCES Providers(pk_providers),
    PRIMARY KEY (pk_services)
);

CREATE TABLE Plans (
    name VARCHAR(255) NOT NULL,

    fk_insurer INTEGER,
    pk_plans SERIAL,

    FOREIGN KEY (fk_insurer) REFERENCES Insurers(pk_insurers),
    PRIMARY KEY (pk_plans)
);
