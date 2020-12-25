<?php get_header();?>

<div class="row">
  <div class="column">
    <h1><?php the_title('');?></h1>
  </div>
</div>
<?php if (have_posts()) : while(have_posts()) : the_post();?>
<div class="row">
  <div class="column">
    <?php the_content();?>
  </div>
</div>
<?php endwhile; endif;?>

<?php get_footer();?>