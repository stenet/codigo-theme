<?php if (have_posts()) : while(have_posts()) : the_post();?>
<div class="row">
  <div class="column">
    <?php if (get_post_type() === 'post') : ?><div class="post-date"><?php echo get_the_date();?></div><?php endif;?>
    <?php the_content();?>
  </div>
</div>
<?php endwhile; endif;?>