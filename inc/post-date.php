<?php if (get_post_type() === 'post') : ?>
<div class="text-sm text-text-light">
  <i class="far fa-clock"></i>
  <?php echo get_the_date();?>
</div><?php endif;?>