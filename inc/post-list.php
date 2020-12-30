<div class="space-y-8 divide-y divide-border -mt-8">
  <?php if (have_posts()) : while(have_posts()) : the_post();?>
  <article class="pt-8">
    <h2><?php the_title();?></h2>
    <?php include(get_template_directory() . '/inc/post-date.php');?>
    <?php include(get_template_directory() . '/inc/post-category-tags.php');?>

    <?php the_excerpt();?>
    
    <a class="plain" href="<?php the_permalink();?>">Beitrag anzeigen <i class="fas fa-arrow-right"></i></a>
  </article>
  <?php endwhile;?>

  <div class="pt-8">
    <?php the_posts_pagination(array(
      'screen_reader_text' => 'Navigation'
    ));?>
  </div>
  <?php else :?>
  <div>
    Es wurden keine Beiträge gefunden
  </div>
  <?php endif;?>
</div>