<?php if (have_posts()) : while(have_posts()) : the_post();?>
<?php if (get_post_type() === 'post') : ?><div class="-mt-6 mb-6 text-sm"><?php echo get_the_date();?></div><?php endif;?>
<?php the_content();?>
<?php endwhile; endif;?>