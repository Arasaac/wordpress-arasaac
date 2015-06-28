<?php 
	/*
	Template Name: Template para programas
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
		'post_content'	=> true,
		'field_groups'       => array(99),
		'new_post'		=> array(
			'post_type'		=> 'programa',
			'post_status'	=> 'pending' /*pending, publish, draft*/
		),
		'return'		=> home_url('software-enviado'),
		'submit_value'	=> 'Publicar software'
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