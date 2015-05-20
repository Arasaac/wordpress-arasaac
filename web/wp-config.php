<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link https://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'arasaac');

/** MySQL hostname */
define('DB_HOST', 'mysql');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'Ddv3S;w[Sr`+Foz}dZ#,gGkUDTr(68Tt#nN@.$lv@VjA%QA{_Wk.TQd;ZR9M?6oh');
define('SECURE_AUTH_KEY',  '?Q[[(mv1b-ciMcel44+BfjisZv_}A-CZa_H:5<z%_`{|Y[;V/bL&90c+i+Hg8GE+');
define('LOGGED_IN_KEY',    '#M`3%i|b{)~>d#5xi/kO~ob+6h5gooID|N_p{~J-47*|9H]}6]&,a]!b0n]FKF}q');
define('NONCE_KEY',        'q|LY[*[,`!y fzS7VKnZp%2[gPW)q&|Y^VyixA JLNr13^vV`og7i4hEc/a=|rRh');
define('AUTH_SALT',        '6!_e*so?&P+23rp+m>}{G9rF0>21|Ojko{L!*E%{*i5~5Zq! S;$9hu+^C] O_OS');
define('SECURE_AUTH_SALT', '~h%$-rbZ#_BCpeFfWlE)<.Qv$L|eWLu;i6y-wB#]12%]NRg|$ ~`rKLdT^[$qc#Y');
define('LOGGED_IN_SALT',   'cO!nteXNf,/Y;b$+6XM+[D  =9EIP!zxA/.$XTLRP]OCM.OMAwSH)Gh]fs(.Bpc4');
define('NONCE_SALT',       'y=)_+8O#L)]rE=CROQGR-mH1E(:md$01Z1GS Lo LML}V^`0#E)W0E=$9@X|k`pX');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
