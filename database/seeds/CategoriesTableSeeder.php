<?php

use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $names = ['Gastronomia', 'Zakupy', 'Zdrowie i Uroda', 'Wyposażenie', 'Edukacja', 'Transport', 'Elektronika', 'Zwierzęta', 'Sport i Hobby', 'Inne Usługi'];
        for ($i = 0; $i < 10; $i++){
            $name = $names[$i];
            DB::table('categories')->insert([
               'name' => $name,
                'slug' => \App\Helpers\SlugHelper::nameToSlug($name)
            ]);
        }
    }
}
