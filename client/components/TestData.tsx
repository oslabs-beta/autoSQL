export const SampleData = {
  films: {
    _id: {
      table_name: 'films',
      column_name: '_id',
      data_type: 'int',
      primary_key: true,
      foreign_tables: [
        'people_in_films',
        'planets_in_films',
        'species_in_films',
        'vessels_in_films',
      ],
    },
    title: {
      table_name: 'films',
      column_name: 'title',
      data_type: 'varchar',
    },
    episode_id: {
      table_name: 'films',
      column_name: 'episode_id',
      data_type: 'int',
    },
    opening_crawl: {
      table_name: 'films',
      column_name: 'opening_crawl',
      data_type: 'varchar',
    },
    director: {
      table_name: 'films',
      column_name: 'director',
      data_type: 'varchar',
    },
    producer: {
      table_name: 'films',
      column_name: 'producer',
      data_type: 'varchar',
    },
    release_date: {
      table_name: 'films',
      column_name: 'release_date',
      data_type: 'date',
    },
  },
  people: {
    _id: {
      table_name: 'people',
      column_name: '_id',
      data_type: 'int',
      primary_key: true,
      foreign_tables: ['people_in_films', 'pilots'],
    },
    name: {
      table_name: 'people',
      column_name: 'name',
      data_type: 'varchar',
    },
    mass: {
      table_name: 'people',
      column_name: 'mass',
      data_type: 'varchar',
    },
    hair_color: {
      table_name: 'people',
      column_name: 'hair_color',
      data_type: 'varchar',
    },
    skin_color: {
      table_name: 'people',
      column_name: 'skin_color',
      data_type: 'varchar',
    },
    eye_color: {
      table_name: 'people',
      column_name: 'eye_color',
      data_type: 'varchar',
    },
    birth_year: {
      table_name: 'people',
      column_name: 'birth_year',
      data_type: 'varchar',
    },
    gender: {
      table_name: 'people',
      column_name: 'gender',
      data_type: 'varchar',
    },
    species_id: {
      table_name: 'people',
      column_name: 'species_id',
      data_type: 'bigint',
      foreign_key: true,
      linkedTable: 'species',
      linkedTableColumn: '_id',
    },
    homeworld_id: {
      table_name: 'people',
      column_name: 'homeworld_id',
      data_type: 'bigint',
      foreign_key: true,
      linkedTable: 'planets',
      linkedTableColumn: '_id',
    },
    height: {
      table_name: 'people',
      column_name: 'height',
      data_type: 'int',
    },
  },
  people_in_films: {
    person_id: {
      table_name: 'people_in_films',
      column_name: 'person_id',
      data_type: 'bigint',
      primary_key: true,
      foreign_tables: [],
      foreign_key: true,
      linkedTable: 'people',
      linkedTableColumn: '_id',
    },
    film_id: {
      table_name: 'people_in_films',
      column_name: 'film_id',
      data_type: 'bigint',
      primary_key: true,
      foreign_tables: [],
      foreign_key: true,
      linkedTable: 'films',
      linkedTableColumn: '_id',
    },
  },
  pilots: {
    _id: {
      table_name: 'pilots',
      column_name: '_id',
      data_type: 'int',
      primary_key: true,
      foreign_tables: [],
    },
    person_id: {
      table_name: 'pilots',
      column_name: 'person_id',
      data_type: 'bigint',
      foreign_key: true,
      linkedTable: 'people',
      linkedTableColumn: '_id',
    },
    vessel_id: {
      table_name: 'pilots',
      column_name: 'vessel_id',
      data_type: 'bigint',
      foreign_key: true,
      linkedTable: 'vessels',
      linkedTableColumn: '_id',
    },
  },
  planets: {
    _id: {
      table_name: 'planets',
      column_name: '_id',
      data_type: 'int',
      primary_key: true,
      foreign_tables: ['people', 'planets_in_films', 'species'],
    },
    name: {
      table_name: 'planets',
      column_name: 'name',
      data_type: 'varchar',
    },
    rotation_period: {
      table_name: 'planets',
      column_name: 'rotation_period',
      data_type: 'int',
    },
    orbital_period: {
      table_name: 'planets',
      column_name: 'orbital_period',
      data_type: 'int',
    },
    diameter: {
      table_name: 'planets',
      column_name: 'diameter',
      data_type: 'int',
    },
    climate: {
      table_name: 'planets',
      column_name: 'climate',
      data_type: 'varchar',
    },
    gravity: {
      table_name: 'planets',
      column_name: 'gravity',
      data_type: 'varchar',
    },
    terrain: {
      table_name: 'planets',
      column_name: 'terrain',
      data_type: 'varchar',
    },
    surface_water: {
      table_name: 'planets',
      column_name: 'surface_water',
      data_type: 'varchar',
    },
    population: {
      table_name: 'planets',
      column_name: 'population',
      data_type: 'bigint',
    },
  },
  planets_in_films: {
    _id: {
      table_name: 'planets_in_films',
      column_name: '_id',
      data_type: 'int',
      primary_key: true,
      foreign_tables: [],
    },
    film_id: {
      table_name: 'planets_in_films',
      column_name: 'film_id',
      data_type: 'bigint',
      foreign_key: true,
      linkedTable: 'films',
      linkedTableColumn: '_id',
    },
    planet_id: {
      table_name: 'planets_in_films',
      column_name: 'planet_id',
      data_type: 'bigint',
      foreign_key: true,
      linkedTable: 'planets',
      linkedTableColumn: '_id',
    },
  },
  species: {
    _id: {
      table_name: 'species',
      column_name: '_id',
      data_type: 'int',
      primary_key: true,
      foreign_tables: ['people', 'species_in_films'],
    },
    name: {
      table_name: 'species',
      column_name: 'name',
      data_type: 'varchar',
    },
    classification: {
      table_name: 'species',
      column_name: 'classification',
      data_type: 'varchar',
    },
    average_height: {
      table_name: 'species',
      column_name: 'average_height',
      data_type: 'varchar',
    },
    average_lifespan: {
      table_name: 'species',
      column_name: 'average_lifespan',
      data_type: 'varchar',
    },
    hair_colors: {
      table_name: 'species',
      column_name: 'hair_colors',
      data_type: 'varchar',
    },
    skin_colors: {
      table_name: 'species',
      column_name: 'skin_colors',
      data_type: 'varchar',
    },
    eye_colors: {
      table_name: 'species',
      column_name: 'eye_colors',
      data_type: 'varchar',
    },
    language: {
      table_name: 'species',
      column_name: 'language',
      data_type: 'varchar',
    },
    homeworld_id: {
      table_name: 'species',
      column_name: 'homeworld_id',
      data_type: 'bigint',
      foreign_key: true,
      linkedTable: 'planets',
      linkedTableColumn: '_id',
    },
  },
  species_in_films: {
    _id: {
      table_name: 'species_in_films',
      column_name: '_id',
      data_type: 'int',
      primary_key: true,
      foreign_tables: [],
    },
    film_id: {
      table_name: 'species_in_films',
      column_name: 'film_id',
      data_type: 'bigint',
      foreign_key: true,
      linkedTable: 'films',
      linkedTableColumn: '_id',
    },
    species_id: {
      table_name: 'species_in_films',
      column_name: 'species_id',
      data_type: 'bigint',
      foreign_key: true,
      linkedTable: 'species',
      linkedTableColumn: '_id',
    },
  },
  starship_specs: {
    _id: {
      table_name: 'starship_specs',
      column_name: '_id',
      data_type: 'int',
      primary_key: true,
      foreign_tables: [],
    },
    hyperdrive_rating: {
      table_name: 'starship_specs',
      column_name: 'hyperdrive_rating',
      data_type: 'varchar',
    },
    MGLT: {
      table_name: 'starship_specs',
      column_name: 'MGLT',
      data_type: 'varchar',
    },
    vessel_id: {
      table_name: 'starship_specs',
      column_name: 'vessel_id',
      data_type: 'bigint',
      foreign_key: true,
      linkedTable: 'vessels',
      linkedTableColumn: '_id',
    },
  },
  vessels: {
    _id: {
      table_name: 'vessels',
      column_name: '_id',
      data_type: 'int',
      primary_key: true,
      foreign_tables: ['pilots', 'starship_specs', 'vessels_in_films'],
    },
    name: {
      table_name: 'vessels',
      column_name: 'name',
      data_type: 'varchar',
    },
    manufacturer: {
      table_name: 'vessels',
      column_name: 'manufacturer',
      data_type: 'varchar',
    },
    model: {
      table_name: 'vessels',
      column_name: 'model',
      data_type: 'varchar',
    },
    vessel_type: {
      table_name: 'vessels',
      column_name: 'vessel_type',
      data_type: 'varchar',
    },
    vessel_class: {
      table_name: 'vessels',
      column_name: 'vessel_class',
      data_type: 'varchar',
    },
    cost_in_credits: {
      table_name: 'vessels',
      column_name: 'cost_in_credits',
      data_type: 'bigint',
    },
    length: {
      table_name: 'vessels',
      column_name: 'length',
      data_type: 'varchar',
    },
    max_atmosphering_speed: {
      table_name: 'vessels',
      column_name: 'max_atmosphering_speed',
      data_type: 'varchar',
    },
    crew: {
      table_name: 'vessels',
      column_name: 'crew',
      data_type: 'int',
    },
    passengers: {
      table_name: 'vessels',
      column_name: 'passengers',
      data_type: 'int',
    },
    cargo_capacity: {
      table_name: 'vessels',
      column_name: 'cargo_capacity',
      data_type: 'varchar',
    },
    consumables: {
      table_name: 'vessels',
      column_name: 'consumables',
      data_type: 'varchar',
    },
  },
};
