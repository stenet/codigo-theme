<?php 
$categories = get_the_category(); 
$has_categories = !empty($categories);
$has_tags = has_tag();

if ($has_categories || $has_tags) :?>
<div class="flex flex-wrap justify-end mb-4">
  <?php if ($has_categories) :?>
    <wc-tag tag-color="var(--green)">
      <?php echo '<a href="' . esc_url( get_category_link( $categories[0]->term_id ) ) . '">' . esc_html( $categories[0]->name ) . '</a>';?>
    </wc-tag>
  <?php endif;?>
  
  <?php if ($has_tags) :?>
    <?php the_tags("<wc-tag>", "</wc-tag><wc-tag>", "</wc-tag>");?>
  <?php endif;?>
</div>
<?php endif;?>