<?php
// Our own endpoint: the plant post type, built like the "cake" example from class.
function plantshop_register_plant_post_type()
{
    register_post_type('plant', [
        'labels' => [
            'name' => 'Plants',
            'singular_name' => 'Plant',
        ],
        'public' => true,
        'has_archive' => true,
        'show_in_rest' => true, // important REST API
        'menu_icon' => 'dashicons-palmtree',
        'supports' => ['title', 'editor', 'thumbnail', 'custom-fields'],
        'rewrite' => ['slug' => 'plants'],
    ]);
    // Shop fields that are sent with each plant in the REST API.
    $fields = [
        'shop_id' => 'integer',
        'price' => 'integer',
        'origin' => 'string',
        'light' => 'string',
        'water' => 'string',
        'note' => 'string',
    ];
    foreach ($fields as $key => $type) {
        register_post_meta('plant', $key, [
            'type' => $type,
            'single' => true,
            'show_in_rest' => true,
        ]);
    }
}
add_action('init', 'plantshop_register_plant_post_type');