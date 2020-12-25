<?php get_header();?>

<div class="row">
  <div class="column">
    <h1><?php wp_title('');?></h1>
  </div>
</div>

<?php include(get_template_directory() . '/inc/post-item-content.php');?>   

<?php get_footer();?>