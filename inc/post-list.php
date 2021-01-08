<div class="post-list">
  <?php if (have_posts()) : while(have_posts()) : the_post();?>
  <article class="overflow-x-hidden">
    <div class="mb-4 lg:flex">
      <div>
        <h2><?php the_title();?></h2>
        <div class="-mt-4">
          <?php include(get_template_directory() . '/inc/post-date.php');?>
        </div>
      </div>
      <div class="flex-grow -mt-2 lg:mt-5">
        <?php include(get_template_directory() . '/inc/post-category-tags.php');?>
      </div>
    </div>

    <?php the_excerpt();?>

    <div>
      <a class="link-with-arrow" href="<?php the_permalink();?>">Jetzt lesen</i></a>
    </div>

    <div class="h-px mt-8 bg-border"></div>
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
