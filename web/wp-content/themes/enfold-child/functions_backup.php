<?php
if(!function_exists('avia_logo'))
{
        /**
         * return the logo of the theme. if a logo was uploaded and set at the backend options panel display it
         * otherwise display the logo file linked in the css file for the .bg-logo class
         * @return string the logo + url
         */
        function avia_logo($use_image = "", $sub = "", $headline_type = "h1", $dimension = "")
        {
                $use_image              = apply_filters('avf_logo', $use_image);
                $headline_type  = apply_filters('avf_logo_headline', $headline_type);
                $sub                    = apply_filters('avf_logo_subtext',  $sub);
                $alt                    = apply_filters('avf_logo_alt', get_bloginfo('name'));
                $link                   = apply_filters('avf_logo_link', home_url('/'));


                if($sub) $sub = "<span class='subtext'>$sub</span>";
                if($dimension === true) $dimension = "height='100' width='300'"; //basically just for better page speed ranking :P

                if($logo = avia_get_option('logo'))
                {
                         $logo = apply_filters('avf_logo', $logo);
                         if(is_numeric($logo)){ $logo = wp_get_attachment_image_src($logo, 'full'); $logo = $logo[0]; }
                         $logo = "<img class='logo2' {$dimension} src=''/><img class='logo2' {$dimension} src='http://www.cpilosenlaces.jd/wp-content/uploads/2014/11/logo_derecha_estrecho.png'/><img {$dimension} src='{$logo}' alt='{$alt}' />";
                         $logo = "<$headline_type class='logo'><a href='".$link."'>".$logo."$sub</a></$headline_type>";
                }
                else
                {
                        $logo = get_bloginfo('name');
                        if($use_image) $logo = "<img {$dimension} src='{$use_image}' alt='{$alt}' title='{$logo}'/>";
                        $logo = "<$headline_type class='logo bg-logo'><a href='".$link."'>".$logo."$sub</a></$headline_type>";
                }

                $logo = apply_filters('avf_logo_final_output', $logo, $use_image, $headline_type, $sub, $alt, $link);

                return $logo;
        }
}
//[myjavascript]
function my_scripts_method() {

	wp_enqueue_script(
		'google_charts',
		'https://www.google.com/jsapi',
		array()
	);
	wp_enqueue_script(
		'custom-script',
		get_template_directory_uri() . '/js/organigrama.js',
		array()
	);
}
if(is_home()) add_action('wp_enqueue_scripts', 'my_scripts_method');
