<?php get_header();?>

<article>
  <div class="lg:flex">
    <div>
      <div>
        <?php include(get_template_directory() . '/inc/wp-title.php');?>
      </div>
      <div class="mb-8 -mt-8">
        <?php include(get_template_directory() . '/inc/post-date.php');?>
      </div>
    </div>
    <div class="flex-grow">
      <?php include(get_template_directory() . '/inc/post-category-tags.php');?>
    </div>
  </div>

  <?php include(get_template_directory() . '/inc/post-item-content.php');?>   
  <?php include(get_template_directory() . '/inc/post-item-comments.php');?>   
</article>

<?php get_footer();?>