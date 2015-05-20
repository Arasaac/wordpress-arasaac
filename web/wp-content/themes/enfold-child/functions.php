<?php

add_filter('avf_logo_subtext', 'kriesi_logo_addition');
function kriesi_logo_addition($sub)
{
    $sub .= "<strong class='logo-title'>Portal <span class='arasaac-color'>Aragonés</span> de la Comunicación Aumentativa y Alternativa</strong>";
    return $sub;
}
function after_head_image_func(){
    echo "<div class='logo2'><img src='http://127.0.0.1:8080/wp-content/uploads/2015/05/logo_fse.jpg'></div>";
    
}
add_action('ava_main_header', 'after_head_image_func');
