<?php get_header();?>

<article>
  <h1><?php the_title('');?></h1>
  <?php include(get_template_directory() . '/inc/post-item-content.php');?>   
</article>

<?php get_footer();?>