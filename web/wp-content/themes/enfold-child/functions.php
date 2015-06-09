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


add_action('acf/save_post', 'my_save_post');

function my_save_post( $post_id ) {
	
	// bail early if not a contact_form post
	if( get_post_type($post_id) !== 'materiales' ) {
		
		return;
		
	}
	
		
	// vars
	$post = get_post( $post_id );
	
	
	// get custom fields (field group exists for content_form)
	$name = get_field('autor', $post_id);
	$email = get_field('correo_electronico', $post_id);
	
	
	// email data
	$to = 'juandacorreo@gmail.com';
	$headers = 'From: ' . $name . ' <' . $email . '>' . "\r\n";
	$subject = $post->post_title;
	$body = $post->post_content;
	
	
	// send email
	wp_mail($to, $subject, $body, $headers );
	
}
