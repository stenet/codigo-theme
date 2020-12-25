<?php if (have_comments()) : ?>
  <h3>Kommentare</h3>
  <ul class="post-comments">
    <?php wp_list_comments(array(
      'style' => 'ul',
      'short_ping' => true
    ));?>
  </ul>
<?php endif;?>


<?php comment_form();?>