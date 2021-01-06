<?php 
$categories = get_the_category(); 
$has_categories = !empty($categories);
$has_tags = has_tag();

if ($has_categories || $has_tags) :?>
<div class="flex flex-wrap lg:justify-end post-category-tags">
  <?php if ($has_categories) :?>
    <wc-tag class="mr-1 lg:mr-0 lg:ml-1" tag-hue="var(--green-hue)">
      <?php echo '<a href="' . esc_url( get_category_link( $categories[0]->term_id ) ) . '">' . esc_html( $categories[0]->name ) . '</a>';?>
    </wc-tag>
  <?php endif;?>
  
  <?php if ($has_tags) :?>
    <?php the_tags("<wc-tag class='mr-1 lg:mr-0 lg:ml-1'>", "</wc-tag><wc-tag class='mr-1 lg:mr-0 lg:ml-1'>", "</wc-tag>");?>
  <?php endif;?>
</div>
<?php endif;?>