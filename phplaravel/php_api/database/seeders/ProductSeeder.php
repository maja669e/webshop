<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $products = [
            [
                'trefle_id' => 301472, 'name' => 'Pilea', 'price' => 79,
                'image' => '/plants/pilea/main.png',
                'description' => 'A compact plant with round leaves held on long, slender stems.',
                'origin' => 'Native to southwest China in Asia.',
                'light' => 'Bright, indirect light. Avoid strong direct sunlight.',
                'water' => 'Let most of the soil dry before watering. Water evenly and allow extra water to drain away.',
                'note' => 'Rotate the pot regularly to encourage balanced growth.',
            ],
            [
                'trefle_id' => 62427, 'name' => 'Monstera', 'price' => 149,
                'image' => '/plants/monstera/main.png',
                'description' => 'A climbing tropical plant with large leaves that develop distinctive splits and holes.',
                'origin' => 'Native to Mexico and Central America.',
                'light' => 'Indirect light, away from strong direct sunlight.',
                'water' => 'Water thoroughly, then let the upper part of the soil dry before watering again.',
                'note' => 'Provide support as the climbing stems grow.',
            ],
            [
                'trefle_id' => 521863, 'name' => 'Ficus Ginseng', 'price' => 249,
                'image' => '/plants/ficus-ginseng/main.png',
                'description' => 'An evergreen fig with small, glossy leaves, often grown as a miniature indoor tree.',
                'origin' => 'Native to tropical and subtropical Asia and the western Pacific.',
                'light' => 'Bright, indirect light in a warm position away from draughts.',
                'water' => 'Let the soil dry slightly between waterings. Water less during winter.',
                'note' => 'Avoid large temperature changes.',
            ],
            [
                'trefle_id' => 105591, 'name' => 'Pachira', 'price' => 229,
                'image' => '/plants/pachira/main.png',
                'description' => 'A leafy money tree with a crown of narrow leaflets.',
                'origin' => 'Native to southern and southeastern Brazil in South America.',
                'light' => 'Bright, indirect light. Avoid harsh direct sunlight.',
                'water' => 'Water thoroughly and adjust the interval to the conditions in your home.',
                'note' => 'Rotate the pot occasionally to encourage even growth.',
            ],
            [
                'trefle_id' => 205176, 'name' => 'Elephant Foot', 'price' => 199,
                'image' => '/plants/elephant-foot/main.png',
                'description' => 'A sculptural plant with a thick base that stores water and long, curling leaves.',
                'origin' => 'Native to Mexico in North America.',
                'light' => 'A sunny window with plenty of light.',
                'water' => 'Let the soil dry between waterings. Water much less during winter.',
                'note' => 'Use a freely draining mix suited to succulents.',
            ],
            [
                'trefle_id' => 375325, 'name' => 'Snake Plant', 'price' => 129,
                'image' => '/plants/snake-plant/main.png',
                'description' => 'An upright plant with firm, patterned leaves and a strong architectural shape.',
                'origin' => 'Native to tropical Africa.',
                'light' => 'Tolerates low light and some direct sunlight.',
                'water' => 'Let the soil dry between waterings. In winter, watering every one to two months may be enough; check the soil first.',
                'note' => 'Good drainage is important; overwatering can damage the roots.',
            ],
            [
                'trefle_id' => 126064, 'name' => 'Peperomia', 'price' => 89,
                'image' => '/plants/peperomia/main.png',
                'description' => 'A compact, bushy plant with thick, glossy, rounded leaves.',
                'origin' => 'Native to the Americas, from Florida to tropical South America.',
                'light' => 'Bright, indirect light. Strong direct sunlight can damage the leaves.',
                'water' => 'Water carefully and avoid keeping the soil wet or letting it become extremely dry.',
                'note' => 'Keep away from draughts and avoid overwatering.',
            ],
            [
                'trefle_id' => 223435, 'name' => 'Parlor Palm', 'price' => 159,
                'image' => '/plants/parlor-palm/main.png',
                'description' => 'A graceful indoor palm with slender stems and softly arching fronds.',
                'origin' => 'Native to Mexico and Central America.',
                'light' => 'Bright, indirect light; lower light is also tolerated.',
                'water' => 'Let the soil dry slightly between waterings and ensure good drainage.',
                'note' => 'Protect from cold draughts near windows and doors.',
            ],
            [
                'trefle_id' => 150691, 'name' => 'Strelitzia', 'price' => 299,
                'image' => '/plants/strelitzia/main.png',
                'description' => 'A bold tropical plant with large, upright leaves that resemble those of a banana plant.',
                'origin' => 'Native to southern Africa.',
                'light' => 'Bright, indirect light.',
                'water' => 'Water when the top layer of the soil feels dry and allow excess water to drain.',
                'note' => 'Keep in a warm position away from cold draughts.',
            ],
            [
                'trefle_id' => 81346, 'name' => 'Satin Pothos', 'price' => 119,
                'image' => '/plants/satin-pothos/main.png',
                'description' => 'A trailing or climbing plant with dark green leaves marked with silver.',
                'origin' => 'Native to parts of South and Southeast Asia.',
                'light' => 'Bright, indirect light. Avoid direct sunlight.',
                'water' => 'Keep the soil lightly moist and allow extra water to drain away.',
                'note' => 'Let the stems trail from a shelf or guide them onto a support.',
            ],
            [
                'trefle_id' => 202726, 'name' => 'Yucca', 'price' => 249,
                'image' => '/plants/yucca/main.png',
                'description' => 'An upright indoor tree with sturdy stems and long leaves shaped like swords.',
                'origin' => 'Native to Mexico and Central America.',
                'light' => 'A very bright, sunny position; provide light shade from strong summer sun.',
                'water' => 'Water with good drainage. In winter, let the upper soil dry before watering again.',
                'note' => 'Turn the pot regularly for balanced growth towards the light.',
            ],
            [
                'trefle_id' => 428132, 'name' => 'Dragon Tree', 'price' => 219,
                'image' => '/plants/dragon-tree/main.png',
                'description' => 'A slender dragon tree with narrow leaves arranged above woody stems.',
                'origin' => 'Native to islands of the western Indian Ocean, including Madagascar.',
                'light' => 'Bright, indirect light.',
                'water' => 'Allow the soil to dry between waterings, without leaving it severely dry.',
                'note' => 'Use soil that drains well.',
            ],
            [
                'trefle_id' => 239357, 'name' => 'Aglaonema', 'price' => 169,
                'image' => '/plants/aglaonema/main.png',
                'description' => 'A leafy tropical plant with long, pointed leaves and silvery markings.',
                'origin' => 'Native to the Philippines and Sulawesi in Southeast Asia.',
                'light' => 'Bright, diffused light; shade is also tolerated.',
                'water' => 'Water moderately and avoid overwatering, which can cause root rot.',
                'note' => 'Use soil that drains well.',
            ],
        ];

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}
