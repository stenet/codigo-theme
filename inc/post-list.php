<div class="space-y-4">
  <?php if (have_posts()) : while(have_posts()) : the_post();?>
  <article class="p-4 overflow-x-hidden bg-white border rounded border-border">
    <div class="lg:flex">
      <div>
        <div class="mb-6 font-semibold">
          <?php the_title();?>
        </div>
        <?php include(get_template_directory() . '/inc/post-date.php');?>
      </div>
      <div class="flex-grow">
        <?php include(get_template_directory() . '/inc/post-category-tags.php');?>
      </div>
    </div>

    <?php the_excerpt();?>
    
    <a class="font-semibold plain" href="<?php the_permalink();?>">Beitrag anzeigen <i class="fas fa-arrow-right"></i></a>
  </article>
  <?php endwhile;?>

  <div>
    <?php the_posts_pagination(array(
      "prev_text" => "«",
      "next_text" => "»"
    ));?>
  </div>
  <?php else :?>
  <div>
    Es wurden keine Beiträge gefunden
  </div>
  <?php endif;?>
</div>