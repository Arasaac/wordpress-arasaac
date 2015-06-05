<?php 
	/*
	Template Name: Template para materiales
	*/

	 global $avia_config, $more;
	 acf_form_head();
	 get_header();
	 echo avia_title();



	 ?>



		<div class='container_wrap container_wrap_first main_color <?php avia_layout_class( 'main' ); ?>'>

			<div class='container'>


<div id="content">
	
	<?php

acf_form(array(
		'post_id'		=> 'new_post',
		'post_title'	=> true,
		'post_content'	=> false,
		'field_groups'       => array(53),
		'new_post'		=> array(
			'post_type'		=> 'material',
			'post_status'	=> 'publish'
		),
		'return'		=> home_url('contact-form-thank-you'),
		'submit_value'	=> 'Send'
	));

	
/*

	$new_post = array(
		'post_id'            => 'new', // Create a new post
		// PUT IN YOUR OWN FIELD GROUP ID(s)
		'field_groups'       => array(53), // Create post field group ID(s)
		'form'               => true,
		'return'             => '%post_url%', // Redirect to new post url
		'html_before_fields' => '',
		'html_after_fields'  => '',
		'submit_value'       => 'Submit Post',
		'updated_message'    => 'Saved!'
	);
	acf_form( $new_post );
*/

	
	?>
	
</div>

			</div><!--end container-->

		</div><!-- close default .container_wrap element -->




<?php get_footer(); ?>