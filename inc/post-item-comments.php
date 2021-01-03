<?php if (comments_open()) :?>
<div class="post-container">
  <?php if (get_comments_number() == 0) :?>
  <div class="mt-6">
    <button id="create-post-comment">Kommentar erstellen</button>
  </div>
  <?php endif;?>
  <div class="mt-6 post-comment-container" style="display: <?php echo (get_comments_number() == 0) ? 'none' : '' ?>">
    <?php comments_template();?>
  </div>
</div>
<?php endif;?>