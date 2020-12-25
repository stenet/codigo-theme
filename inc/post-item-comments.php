<?php if (comments_open()) :?>
<?php if (get_comments_number() == 0) :?>
<div class="row">
  <div class="column">
    <button id="create-post-comment">Kommentar erstellen</button>
  </div>
</div>
<?php endif;?>
<div class="row post-comments" style="display: <?php echo (get_comments_number() == 0) ? 'none' : '' ?>">
  <div class="column">
    <?php comments_template();?>
  </div>
</div>
<?php endif;?>