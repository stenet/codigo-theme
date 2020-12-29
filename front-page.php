<?php get_header();?>

<div>
  <h1><?php the_title('');?></h1>
  <?php include(get_template_directory() . '/inc/post-item-content.php');?>   
</div>

<?php get_footer();?>