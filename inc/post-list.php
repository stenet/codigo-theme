<div class="space-y-6 post-list">
  <?php if (have_posts()) : while(have_posts()) : the_post();?>
  <article class="overflow-x-hidden">
    <div class="mb-4 lg:flex">
      <div>
        <a class="text-xl tracking-tight" href="<?php the_permalink();?>">
          <?php the_title();?>
        </a>
        <div class="mt-1">
          <?php include(get_template_directory() . '/inc/post-date.php');?>
        </div>
      </div>
      <div class="flex-grow">
        <?php include(get_template_directory() . '/inc/post-category-tags.php');?>
      </div>
    </div>

    <?php the_excerpt();?>
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
