<?php

add_filter('avf_logo_subtext', 'kriesi_logo_addition');
function kriesi_logo_addition($sub)
{
    $sub .= "<strong class='logo-title'>Portal <span class='arasaac-color'>Aragonés</span> de la Comunicación Aumentativa y Alternativa</strong>";
    return $sub;
}
function after_head_image_func(){
    echo "<div class='logo2'><img src='http://www.arasaac.jd:8080/wp-content/uploads/2015/05/logo_fse.jpg'></div>";
    echo "<div class='logo3'><img src='http://www.arasaac.jd:8080/wp-content/uploads/2015/05/logo_gobierno_aragon-e1433605232881.gif'></div>";
    
}
add_action('ava_main_header', 'after_head_image_func');



/*para integrar enfold con custom post types*/
add_theme_support('avia_template_builder_custom_post_type_grid');
add_theme_support('add_avia_builder_post_type_option');


/*relevanssi*/
add_filter('avf_ajax_search_function', 'avia_init_relevanssi', 10, 4);
function avia_init_relevanssi($function_name, $search_query, $search_parameters, $defaults)
{
    $function_name = 'avia_relevanssi_search';
    return $function_name;
}

function avia_relevanssi_search($search_query, $search_parameters, $defaults)
{
    global $query;
    $tempquery = $query;
    if(empty($tempquery)) $tempquery = new WP_Query();

    $tempquery->query_vars = $search_parameters;
    relevanssi_do_query($tempquery);
    $posts = $tempquery->posts;

    return $posts;
}


/*Cambiar icono por defecto de los posts, mediante plugin default feature image*/
/*cambiamos según post type:*/
function dfi_posttype_book ( $dfi_id, $post_id ) {
  $post = get_post($post_id);
  if ( 'programa' === $post->post_type ) {
    return 193; // the image id
  }
  else if ( 'material' === $post->post_type ) {
    return 192; // the image id
  }
  return $dfi_id; // the original featured image id
}
add_filter( 'dfi_thumbnail_id', 'dfi_posttype_book', 10, 2 );

/*envíamos un mensaje cada vez que se publique un material nuevo*/
add_action('acf/save_post', 'my_save_post');
function my_save_post( $post_id ) {
	if( get_post_type($post_id) !== 'material' ) {
		return;
	}
	$post = get_post( $post_id );
	$name = get_field('autor', $post_id);
	$email = get_field('correo_electronico', $post_id);
	$to = 'juandacorreo@gmail.com';
	$headers = 'From: ' . $name . ' <' . $email . '>' . "\r\n";
	$subject = 'eNuevo material Arasaac pendiente de publicar:' . $post->post_title;
	$body = $post->post_content;
	wp_mail($to, $subject, $body, $headers );
}
/* Para poner los mensajes de los formularios en español...?????*/
add_filter('acf/settings/default_language', 'my_acf_settings_default_language');
 
function my_acf_settings_default_language( $language ) {
 
    return 'es';
    
}


function modify_new_url($url){

    return $url . '?filtered=yes';

}
add_filter('beautiful_filters_new_url', 'modify_new_url');

