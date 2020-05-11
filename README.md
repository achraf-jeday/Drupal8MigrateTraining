# This repository is intended for training on migrating data from different sources (Drupal 6/7, CSV, CMS ...) to Drupal 8.

# Ce dépôt est destiné à la formation sur la migration de données depuis différentes sources (Drupal 6/7, CSV, CMS, etc.) vers Drupal 8.

Configuration directory:

```
$config_directories['sync'] = '../config/sync';
```

Drupal 8 database configuration:

```
$databases['default']['default'] = array (
  'database' => 'migrate_training',
  'username' => 'root',
  'password' => 'password',
  'prefix' => '',
  'host' => 'localhost',
  'port' => '',
  'namespace' => 'Drupal\\Core\\Database\\Driver\\mysql',
  'driver' => 'mysql',
);
```

Drupal 7 database configuration:

```
$databases['migrate']['default'] = array (
  'database' => 'migrate_training_7',
  'username' => 'root',
  'password' => 'password',
  'prefix' => '',
  'host' => 'localhost',
  'port' => '',
  'namespace' => 'Drupal\\Core\\Database\\Driver\\mysql',
  'driver' => 'mysql',
);
```

Use this command to revert the status of broken migration:

```
drush php-eval "var_dump(Drupal::keyValue('migrate_status')->set('migration_id', 0));"
```
