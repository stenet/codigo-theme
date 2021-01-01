<?php get_header();?>

<article>
  <div class="lg:flex">
    <div>
      <div class="mb-6">
        <?php include(get_template_directory() . '/inc/wp-title.php');?>
      </div>
      <?php include(get_template_directory() . '/inc/post-date.php');?>
    </div>
    <div class="flex-grow">
      <?php include(get_template_directory() . '/inc/post-category-tags.php');?>
    </div>
  </div>

  <?php include(get_template_directory() . '/inc/post-item-content.php');?>   
  <?php include(get_template_directory() . '/inc/post-item-comments.php');?>   
</article>

<?php get_footer();?>