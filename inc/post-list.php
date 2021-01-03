<div class="space-y-4 post-list">
  <?php if (have_posts()) : while(have_posts()) : the_post();?>
  <article class="overflow-x-hidden bg-white border rounded border-border">
    <div class="p-4 lg:flex bg-group-bg">
      <div>
        <div class="font-semibold">
          <?php the_title();?>
        </div>
        <?php include(get_template_directory() . '/inc/post-date.php');?>
      </div>
      <div class="flex-grow">
        <?php include(get_template_directory() . '/inc/post-category-tags.php');?>
      </div>
    </div>

    <div class="p-4">
      <?php the_excerpt();?>
      
      <a class="font-semibold plain" href="<?php the_permalink();?>">Beitrag anzeigen&nbsp;&nbsp;<i class="fas fa-long-arrow-alt-right"></i></a>
    </div>
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