<?php if (get_post_type() === 'post') : ?>
<div class="-mt-6 mb-6 text-sm text-text-light">
  <i class="far fa-clock"></i>
  <?php echo get_the_date();?>
</div><?php endif;?>