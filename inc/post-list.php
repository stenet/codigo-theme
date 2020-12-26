<?php if (have_posts()) : while(have_posts()) : the_post();?>
<article class="blog-post__item">
  <div class="row">
    <div class="column">
      <h2><a href="<?php the_permalink();?>"><?php the_title();?></a></h2>
      <?php if (get_post_type() === 'post') : ?><div class="post-date"><?php echo get_the_date();?></div><?php endif;?>
    </div>
  </div>
  <div class="row">
    <div class="column">
      <?php the_excerpt();?>
    </div>
  </div>
  <div class="row">
    <div class="column">
      <a href="<?php the_permalink();?>" class="button button-outline">Beitrag anzeigen</a>
    </div>
  </div>
</article>
<?php endwhile;?>
<div class="row">
  <div class="column">
    <?php the_posts_pagination(array(
      'screen_reader_text' => 'Navigation'
    ));?>
  </div>
</div>
<?php else :?>
<div class="row">
  <div class="column">
    Es wurden keine Beiträge gefunden
  </div>
</div>
<?php endif;?>