<?php get_header();?>

<div class="row">
  <div class="column">
    <h1><?php wp_title('');?></h1>
  </div>
</div>
<?php if (have_posts()) : while(have_posts()) : the_post();?>
<div class="blog-post__item">
  <div class="row">
    <div class="column">
      <h3><?php the_title();?></h3>
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
</div>
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
    Es wurden keine Beiträge dazu gefunden
  </div>
</div>
<?php endif;?>

<?php get_footer();?>