<?php if (have_posts()) : while(have_posts()) : the_post();?>
<?php include(get_template_directory() . '/inc/post-date.php');?>
<?php include(get_template_directory() . '/inc/post-category-tags.php');?>
<?php the_content();?>
<?php endwhile; endif;?>