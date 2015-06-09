<?php
	/*
	Template Name: Lista Programas
	*/


	/*
	 * get_header is a basic wordpress function, used to retrieve the header.php file in your theme directory.
	 */


	 global $avia_config, $more;
	 get_header();
	 echo avia_title();
	 ?>



		<div class='container_wrap container_wrap_first main_color <?php avia_layout_class( 'main' ); ?>'>

			<div class='container'>

				<main class='template-archives content <?php avia_layout_class( 'content' ); ?> units' <?php avia_markup_helper(array('context' => 'content'));?>>

                    <div class="entry-content-wrapper entry-content clearfix">

                    <?php

                    query_posts(array('posts_per_page'=>20,'post_type' => 'programa'));

                    // check if we got posts to display:
                    

					 if (have_posts()) :

                        while (have_posts()) : the_post();
                    		echo "<header class='entry-content-header'>";
                    		echo "<h2 class='post-title entry-title'  itemprop='headline'>" . get_the_title();
                    		echo "</h2></header><div class='entry-content' itemprop='text'>";
                    		echo "Autor: ";
                        	the_field('autor'); 
                    		echo "<br>Idiomas: ";
                        	the_field('idiomas');
                    		echo "<br>Contenido: ";
                     		the_content();
                     		echo "</div>";
                    /*the_post();
                    the_content();
                        echo "<article>";
                        echo "<a href='".get_permalink()."' rel='bookmark' title='". __('Permanent Link:','avia_framework')." ".the_title_attribute('echo=0')."'>".get_the_title()."</a>";
                        echo "</>article";
                     echo custom_taxonomies_terms_links();*/
                        endwhile;
                    else:
                    
                      echo "<h3>" . __('No Blog Posts found','avia_framework') . "</h3>";
                    
                    endif;


                     ?>


                    </div>

				<!--end content-->
				</main>

				<?php
				wp_reset_query();
				//get the sidebar
				$avia_config['currently_viewing'] = 'page';
				get_sidebar();

				?>

			</div><!--end container-->

		</div><!-- close default .container_wrap element -->




<?php get_footer(); ?>