<?php get_header();?>

<article>
  <?php include(get_template_directory() . '/inc/wp-title.php');?>  
  <?php include(get_template_directory() . '/inc/post-item-content.php');?>   
  <?php include(get_template_directory() . '/inc/post-item-comments.php');?>   
</article>

<?php get_footer();?>