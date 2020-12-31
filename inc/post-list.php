<div class="space-y-4">
  <?php if (have_posts()) : while(have_posts()) : the_post();?>
  <article class="border border-border rounded p-4">
    <h2><?php the_title();?></h2>
    <?php include(get_template_directory() . '/inc/post-date.php');?>
    <?php include(get_template_directory() . '/inc/post-category-tags.php');?>

    <?php the_excerpt();?>
    
    <a class="plain font-semibold" href="<?php the_permalink();?>">Beitrag anzeigen <i class="fas fa-arrow-right"></i></a>
  </article>
  <?php endwhile;?>

  <div class="pt-4">
    <?php the_posts_pagination(array(
      'screen_reader_text' => ''
    ));?>
  </div>
  <?php else :?>
  <div>
    Es wurden keine Beiträge gefunden
  </div>
  <?php endif;?>
</div>